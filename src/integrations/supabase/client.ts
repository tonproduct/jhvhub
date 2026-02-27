import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

export function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  return createClient<Database>(url, key);
}

// Lazy singleton — only instantiated in browser/at runtime
let _client: ReturnType<typeof getSupabaseClient> | null = null;

export const supabase = new Proxy({} as ReturnType<typeof getSupabaseClient>, {
  get(_, prop: string) {
    if (!_client) _client = getSupabaseClient();
    return (_client as any)[prop];
  },
});
