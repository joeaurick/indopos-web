"use server";

import { createClient } from "@/lib/supabase/server";

export async function register(
  fullName: string,
  email: string,
  password: string
) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
      },
    },
  });

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
  };
}