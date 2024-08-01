import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wlaozdmgwaaymllhazpm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsYW96ZG1nd2FheW1sbGhhenBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0MzQxNjUsImV4cCI6MjAzODAxMDE2NX0.ojRPW02vsmOCQtT7OSX7qdNaO2FL_Ls7KXsodrUCjoI";
export const supabase = createClient(supabaseUrl, supabaseKey);
