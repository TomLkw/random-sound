-- 词汇统计同步表
-- 字段：user_id (UUID, 主键), email, stats_data (JSONB), updated_at (时间戳)

create table if not exists public.word_stats (
  user_id uuid primary key references auth.users (id) on delete cascade,
  email text,
  stats_data jsonb not null default '{}',
  updated_at timestamptz not null default now()
);

-- 索引（可选）
create index if not exists idx_word_stats_updated_at on public.word_stats(updated_at desc);

-- 启用 RLS
alter table public.word_stats enable row level security;

-- 只允许用户操作自己的数据
do $$
begin
  if not exists (
    select 1 from pg_policies where schemaname = 'public' and tablename = 'word_stats' and policyname = 'word_stats_select_own'
  ) then
    create policy word_stats_select_own on public.word_stats
      for select using (auth.uid() = user_id);
  end if;

  if not exists (
    select 1 from pg_policies where schemaname = 'public' and tablename = 'word_stats' and policyname = 'word_stats_insert_own'
  ) then
    create policy word_stats_insert_own on public.word_stats
      for insert with check (auth.uid() = user_id);
  end if;

  if not exists (
    select 1 from pg_policies where schemaname = 'public' and tablename = 'word_stats' and policyname = 'word_stats_update_own'
  ) then
    create policy word_stats_update_own on public.word_stats
      for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
  end if;
end $$;

