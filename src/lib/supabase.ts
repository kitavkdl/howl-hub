import { createClient } from "@supabase/supabase-js";

// Values come from .env.local (copy .env.example and fill it in).
// These two are safe to expose to the browser. Never put the service_role key here.
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// null until the project is configured, so the app still runs without Supabase.
export const supabase = url && anonKey ? createClient(url, anonKey) : null;
