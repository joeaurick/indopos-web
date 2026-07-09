import { createClient } from "@/lib/supabase/server";

export async function registerUser(
  fullName: string,
  email: string,
  password: string
) {
  const supabase = await createClient();

  return await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });
}