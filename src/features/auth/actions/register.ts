"use server";

import { registerUser } from "../services/auth.service";
import { registerSchema } from "../schemas/register.schema";

export async function registerAction(_: unknown, formData: FormData) {
  const values = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const parsed = registerSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0].message,
    };
  }

  const { error } = await registerUser(
    parsed.data.fullName,
    parsed.data.email,
    parsed.data.password
  );

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  return {
    success: true,
    message: "Registrasi berhasil. Silakan cek email Anda.",
  };
}