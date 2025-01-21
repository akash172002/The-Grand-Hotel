import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://aqrfknrlvbhdgjmsgvas.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxcmZrbnJsdmJoZGdqbXNndmFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0NTMzMDIsImV4cCI6MjA1MzAyOTMwMn0.VbAcw16VLYla0hJwnvrxpVSdtTXQKDvDdBtOjpD48Ms";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
