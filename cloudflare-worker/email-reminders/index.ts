const escape = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[c]!),
  );
// No frontend secrets or runtime dependencies. Cloudflare invokes scheduled().
type Delivery = {
  delivery_id: string;
  reminder_id: string;
  user_id: string;
  email: string;
  send_date: string;
  day_number: number;
  unsubscribe_token: string;
  payload: Record<string, unknown> | null;
};
type Env = {
  SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
  RESEND_API_KEY?: string;
  REMINDER_FROM?: string;
  REMINDER_SITE_URL?: string;
  WORKER_PUBLIC_URL: string;
  REMINDER_ADMIN_SECRET?: string;
};
function database(env: Env) {
  const api = env.SUPABASE_URL;
  const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY;

  async function db(path: string, method = "POST", body?: unknown) {
    const response = await fetch(`${api}/rest/v1/${path}`, {
      method,
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: body === undefined ? undefined : JSON.stringify(body),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error(`database_${response.status}`);
    const text = await response.text();
    return text ? JSON.parse(text) : null;
  }
  return db;
}
export function buildEmail(
  row: Delivery,
  from: string,
  site: string,
  workerURL: string,
  preview = false,
) {
  const practice = new URL("/list-3-1", site);
  practice.search = new URLSearchParams({
    source: "email",
    campaign: "seven_day",
    day: String(row.day_number),
  }).toString();
  const unsubscribe = `${workerURL}/?token=${row.unsubscribe_token}`;
  const subject = `第 ${row.day_number}/7 天：今天有哪些雅思词，你还听不出来？`;
  const footer = preview
    ? "这是每日提醒样例，不会开启连续提醒。"
    : "你主动开启了 7 天练习提醒，7 天后自动结束。";
  const text =
    `花几分钟，继续你的雅思听力练习。\n不必一次练很多，今天开始就好。\n开始练习：${practice}\n${
      preview ? "" : `关闭提醒：${unsubscribe}\n`
    }${footer}`;
  return {
    from,
    to: [row.email],
    subject,
    text,
    html:
      `<!doctype html><html lang="zh-CN"><body style="font-family:Arial,sans-serif;color:#334155;line-height:1.8;padding:24px"><h1 style="font-size:22px">${
        escape(subject)
      }</h1><p>花几分钟，继续你的雅思听力练习。</p><p>不必一次练很多，今天开始就好。</p><p><a href="${
        escape(practice.href)
      }" style="display:inline-block;background:#2563eb;color:white;padding:12px 24px;border-radius:8px;text-decoration:none">开始练习</a></p><p style="font-size:12px;color:#64748b">${footer}${
        preview ? "" : `<br><a href="${escape(unsubscribe)}">关闭提醒</a>`
      }</p></body></html>`,
    headers: preview ? {} : {
      "List-Unsubscribe": `<${unsubscribe}>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    },
  };
}
// Both the real daily job and the administrator preview use this exact sender.
export async function sendDailyEmail(
  env: Env,
  payload: unknown,
  deliveryId: string,
) {
  return await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
      "Idempotency-Key": `radom-reminder-${deliveryId}`,
    },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(15000),
  });
}
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
const testCors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Authorization, Content-Type",
  "Cache-Control": "no-store",
};
export async function handler(req: Request, env: Env) {
  if (new URL(req.url).pathname !== "/test-email") {
    return handleRequest(req, env);
  }
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: testCors });
  }
  const response = await handleRequest(req, env);
  const headers = new Headers(response.headers);
  for (const [key, value] of Object.entries(testCors)) headers.set(key, value);
  return new Response(response.body, { status: response.status, headers });
}
async function handleRequest(req: Request, env: Env) {
  const db = database(env);
  try {
    const url = new URL(req.url);
    if (url.pathname === "/test-email") {
      if (req.method !== "POST") {
        return json({ error: "method_not_allowed" }, 405);
      }
      if (!env.RESEND_API_KEY) return json({ error: "not_configured" }, 503);
      const authorization = req.headers.get("Authorization");
      if (!authorization || !/^Bearer \S+$/i.test(authorization)) {
        return json({ error: "login_required" }, 401);
      }
      // Validate with Auth, never trust a client-supplied user ID or email.
      const auth = await fetch(`${env.SUPABASE_URL}/auth/v1/user`, {
        headers: {
          apikey: env.SUPABASE_SERVICE_ROLE_KEY,
          Authorization: authorization,
        },
        signal: AbortSignal.timeout(10000),
      });
      if (!auth.ok) {
        return json(
          { error: "login_required" },
          auth.status >= 500 ? 503 : 401,
        );
      }
      const user = await auth.json();
      if (!user.id || !user.email_confirmed_at) {
        return json({ error: "verified_email_required" }, 403);
      }
      const reservation = await db("rpc/reserve_email_reminder_test", "POST", {
        p_user_id: user.id,
      });
      if (reservation.error) {
        return json(
          reservation,
          reservation.error === "verified_email_required" ? 403 : 429,
        );
      }
      const attemptPath =
        `email_reminder_test_attempts?id=eq.${reservation.id}`;
      const practice = new URL(
        "/list-3-1",
        env.REMINDER_SITE_URL || "https://hear-write.com",
      );
      practice.searchParams.set("source", "test_email");
      const payload = {
        from: env.REMINDER_FROM || "随机雅思 <reminders@hear-write.com>",
        to: [reservation.email],
        subject: "随机雅思｜测试邮件",
        text:
          `这是你主动发送的测试邮件。收到它说明邮件已到达你的邮箱。\n开始练习：${practice}\n测试邮件不会开启或占用 7 天提醒。`,
        html:
          `<!doctype html><html lang="zh-CN"><body style="font-family:Arial,sans-serif;padding:24px;line-height:1.8"><h1 style="font-size:22px">测试邮件</h1><p>这是你主动发送的测试邮件。收到它说明邮件已到达你的邮箱。</p><p><a href="${
            escape(practice.href)
          }">开始练习</a></p><p>测试邮件不会开启或占用 7 天提醒。</p></body></html>`,
      };
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
            "Idempotency-Key": `radom-test-${reservation.id}`,
          },
          body: JSON.stringify(payload),
          signal: AbortSignal.timeout(15000),
        });
        const result = await response.json();
        if (!response.ok) {
          await db(attemptPath, "PATCH", {
            state: "failed",
            error_code: `resend_${response.status}`,
          });
          return json({
            error: "send_failed",
            retry_after: 60,
            remaining: reservation.remaining,
          }, 502);
        }
        // A logging failure must not misreport a provider-accepted message as unsent.
        await db(attemptPath, "PATCH", {
          state: "accepted",
          provider_id: result.id,
        }).catch(() => console.warn("Test mail accepted; log update failed"));
        return json({
          accepted: true,
          retry_after: 60,
          remaining: reservation.remaining,
        });
      } catch {
        await db(attemptPath, "PATCH", {
          state: "unknown",
          error_code: "send_result_unknown",
        }).catch(() => {});
        return json({
          error: "send_result_unknown",
          retry_after: 60,
          remaining: reservation.remaining,
        }, 503);
      }
    }
    if (url.pathname === "/health" && req.method === "GET") {
      const configured =
        !!(env.RESEND_API_KEY && env.SUPABASE_SERVICE_ROLE_KEY &&
          env.WORKER_PUBLIC_URL);
      if (!configured) return json({ configured: false, ready: false });
      await db("email_reminder_config?select=ready", "GET");
      return json({ configured: true, database: true });
    }
    const token = url.searchParams.get("token");
    if (token) {
      if (
        !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
          token,
        )
      ) return json({ error: "invalid_token" }, 400);
      if (req.method === "POST") {
        await db("rpc/unsubscribe_email_reminder", "POST", { p_token: token });
        return new Response(
          '<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>已关闭提醒</title><body style="padding:32px;font-family:sans-serif"><h1>已关闭邮件提醒</h1><p>你可以随时回到学习统计页重新开启。</p><a href="https://hear-write.com">返回练习</a></body></html>',
          {
            headers: {
              "Content-Type": "text/html; charset=utf-8",
              "Cache-Control": "no-store",
            },
          },
        );
      }
      if (req.method !== "GET") {
        return json({ error: "method_not_allowed" }, 405);
      }
      // Mail link scanners may GET links: only explicit POST changes the subscription.
      return new Response(
        `<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>关闭邮件提醒</title><body style="padding:32px;font-family:sans-serif"><h1>关闭 7 天练习提醒</h1><form method="post"><button style="padding:12px 24px;font-size:16px">关闭提醒</button></form></body></html>`,
        {
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "no-store",
            "Content-Security-Policy":
              "default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; frame-ancestors 'none'",
          },
        },
      );
    }
    if (req.method !== "POST") {
      return json({ error: "method_not_allowed" }, 405);
    }
    // Administrator calls require a separate secret; browsers never receive it.
    if (
      !env.REMINDER_ADMIN_SECRET ||
      req.headers.get("x-admin-secret") !== env.REMINDER_ADMIN_SECRET
    ) return json({ error: "unauthorized" }, 401);
    const input = await req.json();
    if (url.pathname === "/send-daily" && input.action === "send_daily") {
      return json(await runReminders(env));
    }
    if (url.pathname === "/send-daily" && input.action === "preview_daily") {
      if (!env.RESEND_API_KEY) return json({ error: "not_configured" }, 503);
      if (
        typeof input.to !== "string" || input.to.length > 254 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.to) ||
        !Number.isInteger(input.day) || input.day < 1 || input.day > 7 ||
        typeof input.requestId !== "string" ||
        !/^[0-9a-f-]{36}$/i.test(input.requestId)
      ) return json({ error: "invalid_preview" }, 400);
      const row: Delivery = {
        delivery_id: input.requestId,
        reminder_id: input.requestId,
        user_id: input.requestId,
        email: input.to,
        send_date: new Date().toISOString().slice(0, 10),
        day_number: input.day,
        unsubscribe_token: input.requestId,
        payload: null,
      };
      const payload = buildEmail(
        row,
        env.REMINDER_FROM || "随机雅思 <reminders@hear-write.com>",
        env.REMINDER_SITE_URL || "https://hear-write.com",
        env.WORKER_PUBLIC_URL,
        true,
      );
      const response = await sendDailyEmail(env, payload, row.delivery_id);
      const result = await response.json();
      if (!response.ok) {
        return json({
          error: "daily_send_failed",
          provider_status: response.status,
          detail: result.message,
        }, 502);
      }
      console.log(
        JSON.stringify({ daily_preview: true, provider_id: result.id }),
      );
      return json({
        accepted: true,
        provider_id: result.id,
        day: input.day,
        preview: true,
      });
    }
    if (input.action !== "sync_config") {
      return json({ error: "invalid_action" }, 400);
    }
    const ready = !!(env.RESEND_API_KEY && env.SUPABASE_SERVICE_ROLE_KEY &&
      env.WORKER_PUBLIC_URL);
    await db("email_reminder_config?id=eq.true", "PATCH", { ready });
    return json({ ready });
  } catch {
    return json({ error: "reminder_service_error" }, 500);
  }
}
export async function runReminders(env: Env) {
  const db = database(env);
  if (
    !env.RESEND_API_KEY || !env.SUPABASE_SERVICE_ROLE_KEY ||
    !env.WORKER_PUBLIC_URL
  ) {
    if (env.SUPABASE_SERVICE_ROLE_KEY) {
      await db("email_reminder_config?id=eq.true", "PATCH", { ready: false });
    }
    throw new Error("Missing Worker secrets/configuration");
  }
  const from = env.REMINDER_FROM || "随机雅思 <reminders@hear-write.com>";
  const site = env.REMINDER_SITE_URL || "https://hear-write.com";
  await db("email_reminder_config?id=eq.true", "PATCH", { ready: true });
  const rows: Delivery[] = await db("rpc/claim_email_reminders");
  let sent = 0, skipped = 0, failed = 0;
  for (const row of rows) {
    const path = `email_reminder_deliveries?id=eq.${row.delivery_id}`;
    try {
      // Recheck consent/activity immediately before sending, including pending retries.
      const subscriptions = await db(
        `email_reminders?id=eq.${row.reminder_id}&enabled=eq.true&select=id`,
        "GET",
      );
      const dayStart = `${row.send_date}T00:00:00+08:00`;
      const activity = await db(
        `email_reminder_activity?user_id=eq.${row.user_id}&practiced_at=gte.${
          encodeURIComponent(dayStart)
        }&select=user_id`,
        "GET",
      );
      if (!subscriptions.length || activity.length) {
        await db(path, "PATCH", {
          state: "skipped",
          updated_at: new Date().toISOString(),
        });
        skipped++;
        continue;
      }
      const payload = row.payload ||
        buildEmail(row, from, site, env.WORKER_PUBLIC_URL);
      if (!row.payload) await db(path, "PATCH", { payload });
      const response = await sendDailyEmail(env, payload, row.delivery_id);
      const result = await response.json();
      if (!response.ok) {
        const retryable = response.status === 429 || response.status >= 500;
        await db(path, "PATCH", {
          state: retryable ? "pending" : "failed",
          error_code: `resend_${response.status}`,
          updated_at: new Date().toISOString(),
        });
        failed++;
        if (response.status === 429) break;
      } else {
        await db(path, "PATCH", {
          state: "sent",
          provider_id: result.id,
          error_code: null,
          updated_at: new Date().toISOString(),
        });
        sent++;
      }
    } catch {
      // Preserve processing lease and immutable payload when delivery is uncertain.
      // A later same-day retry uses the same provider idempotency key.
      failed++;
    }
    await new Promise((resolve) => setTimeout(resolve, 600));
  }
  const summary = { claimed: rows.length, sent, skipped, failed };
  console.log(JSON.stringify(summary));
  return summary;
}
export default {
  fetch: handler,
  async scheduled(_controller: unknown, env: Env) {
    await runReminders(env);
  },
};
