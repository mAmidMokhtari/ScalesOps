import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://nuegnjzpgijvpckagucj.supabase.co";
const supabaseApiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im51ZWduanpwZ2lqdnBja2FndWNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY3MTM1NjMsImV4cCI6MjAxMjI4OTU2M30.OEVHaicVthvfakWrv-ZC8K6J1QINpXKyRVJlNmTu10I";
const supabase = createClient(supabaseUrl, supabaseApiKey, {
  schema: "public",
});

export default supabase;
