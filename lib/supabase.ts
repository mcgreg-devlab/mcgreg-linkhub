import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gjzqafrykdvxflhphrzq.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqenFhZnJ5a2R2eGZsaHBocnpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ4Njc3MzksImV4cCI6MjA5MDQ0MzczOX0.lHGyvZBggWAvDUtpp_ly3Zo0vO7AV4XN0YQYWx1l8iE";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
