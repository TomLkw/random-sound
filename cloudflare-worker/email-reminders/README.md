# 7 天邮件提醒

前端逻辑保持在 `index.html`，Worker 只负责定时发送与退订。Supabase 保存报名、实际答题时间和发送记录。

已部署 Worker： https://radom-sound-email-reminders.zgbtlkw.workers.dev

## Cloudflare 配置

在 Worker 的 Settings → Variables and Secrets 中设置 **Secret**：

- `RESEND_API_KEY`：具有发送权限的 Resend 密钥。
- `SUPABASE_SERVICE_ROLE_KEY`：`elckemvmphbjjlpzgoqy` 项目的 service_role 密钥，禁止写入前端。

普通变量已配置在 `wrangler.toml`：发件人 `随机雅思 <reminders@hear-write.com>`，练习网站 `https://hear-write.com`。

`GET /health` 只检查必要配置和数据库连接，不发送邮件、不返回密钥。确认配置后，在数据库执行 `update public.email_reminder_config set ready=true where id=true;` 开放报名。定时任务也会在配置完整时同步这个状态。

2026-10-08 已配置两项 Secret，线上健康检查返回 `configured: true, database: true`，数据库报名开关已开启。线上退订 GET/POST 已验证，公共发送请求返回 401。尚未执行真实邮件投递或浏览器交互测试。

## 行为

- 两个提醒入口均提供「发送测试邮件」。`POST /test-email` 验证 Supabase 登录凭证，只发送到已验证的账户邮箱。
- 测试邮件每用户 60 秒一次、北京时间每天最多 3 次，数据库行锁原子预占额度；失败也占次数，与提醒周期无关。
- 测试发送结果只表示 Resend 接受，不代表进入收件箱。刷新页面仍受数据库额度限制。

- 主动报名，从北京时间次日起计算 7 个自然日。
- 每晚 20:00 开始处理；20:00–21:55 每 5 分钟处理或重试一次。
- 每次最多领取 8 个任务（控制免费 Worker 的外部请求数量）；同一用户同一天最多一封，最多尝试 4 次。大规模用户需调整吞吐量。
- 实际提交答案（包括答错、数字题、重练）才记录练习时间；已练过就跳过，不延长报名周期。
- 当天发送窗口结束后不补发。已发送不代表最终进入收件箱。
- 固定邮件模板链接到免费 `/list-3-1`，带邮件来源参数。
- 页面能关闭提醒；邮件内退订链接打开确认按钮，GET 扫描不退订；邮件客户端 RFC 8058 一键退订通过 POST 生效。
- 发送日志只允许服务端读写，用户只能查看自己的报名状态。
- 重试使用持久化的相同邮件内容及相同 Resend 幂等键。
- 公共 HTTP 请求不能触发每日发送；正常任务由 Cloudflare `scheduled()` 执行。
- `POST /send-daily` 需 `x-admin-secret` 与 Worker Secret `REMINDER_ADMIN_SECRET` 一致。
  `action: send_daily` 运行正常定时任务逻辑，仍遵守时段、报名、当天练习与去重规则。
  `action: preview_daily` 加 `to`、`day`（1–7）、`requestId`（UUID）使用同一每日模板和发送函数发一封样例，跳过定时等待与报名筛选，不开启提醒。重试必须保留相同 requestId。

2026-10-08 15:47（北京时间）通过已部署 Worker 的 `/send-daily` 样例模式执行共享每日发送代码，Resend 回报 `delivered`。邮件 ID：`01a11a7b-4bb6-795b-a97d-7711d046d857`。此验证覆盖模板与真实投递，不覆盖 Cron 触发、报名筛选和当天跳过规则。

## 部署与验证

```sh
npx --yes wrangler@4 deploy --config cloudflare-worker/email-reminders/wrangler.toml
deno test cloudflare-worker/email-reminders/index.test.ts
```

`email-reminders.sql` 为已应用的首次数据库迁移，不要重复执行。前端需另行通过现有 Pages 发布流程上线。

指标：`email_reminder_enabled`、`email_reminder_disabled`、`email_reminder_visit`、`email_reminder_practice`；已有 `practice_complete` 记录完成练习。来源归因记录首次落地访问及首次实际答题，不等同邮件投递成功。
