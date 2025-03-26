import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
	"https://galkdgmmssndxwgaehow.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdhbGtkZ21tc3NuZHh3Z2FlaG93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5OTE0MjIsImV4cCI6MjA1ODU2NzQyMn0.K1AklwljWMejmxX0PQR7eXYQCXTwd103jn4_J1KYtNc"
);

export default supabase;
