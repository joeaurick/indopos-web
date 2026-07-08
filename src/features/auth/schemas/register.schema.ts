import { z } from "zod";

export const registerSchema = z
  .object({
    fullName: z.string().min(3, "Nama minimal 3 karakter"),
    email: z.email("Email tidak valid"),
    password: z.string().min(8, "Password minimal 8 karakter"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Konfirmasi password tidak sama",
  });

export type RegisterSchema = z.infer<typeof registerSchema>;