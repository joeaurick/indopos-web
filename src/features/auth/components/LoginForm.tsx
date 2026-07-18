"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Eye,
  EyeOff,
} from "lucide-react";

import { toast } from "sonner";

import { AppButton } from "@/components/ui";
import { supabase } from "@/lib/supabase/client";

export function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  async function handleLogin(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!email || !password) {
      toast.error(
        "Email dan Password wajib diisi"
      );
      return;
    }

    setLoading(true);

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Login berhasil");

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <section
      className="
        flex
        items-center
        justify-center
        p-10
      "
    >
      <div className="w-full max-w-md">

        {/* HEADER */}

        <div className="mb-10 text-center">

          <div
            className="
              mx-auto
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl
              bg-[var(--primary)]
              text-3xl
              font-bold
              text-white
              shadow-xl
            "
          >
            I
          </div>

          <h2 className="mt-6 text-4xl font-bold">
            Selamat Datang
          </h2>

          <p className="mt-3 text-[15px] text-slate-500">
            Masuk ke Dashboard IndoPOS
          </p>

        </div>

        {/* FORM */}

        <form
          onSubmit={handleLogin}
          className="space-y-6"
        >

          <div>
  <label className="mb-2 block text-sm font-medium">
    Email
  </label>

  <input
    type="email"
    value={email}
    onChange={(e) =>
      setEmail(e.target.value)
    }
    placeholder="Masukkan email"
    className="
      h-14
      w-full
      rounded-2xl
      border
      border-slate-200
      bg-white
      px-5
      text-[15px]
      outline-none
      transition-all
      focus:border-[var(--primary)]
      focus:ring-4
      focus:ring-teal-100
    "
  />
</div>

          <div>
  <label className="mb-2 block text-sm font-medium">
    Password
  </label>

  <div className="relative">

    <input
      type={
        showPassword
          ? "text"
          : "password"
      }
      value={password}
      onChange={(e) =>
        setPassword(e.target.value)
      }
      placeholder="Masukkan password"
      className="
        h-14
        w-full
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-5
        pr-14
        text-[15px]
        outline-none
        transition-all
        focus:border-[var(--primary)]
        focus:ring-4
        focus:ring-teal-100
      "
    />

    <button
      type="button"
      onClick={() =>
        setShowPassword(!showPassword)
      }
      className="
        absolute
        right-5
        top-1/2
        -translate-y-1/2
        text-slate-400
        hover:text-slate-700
      "
    >
      {showPassword ? (
        <EyeOff size={20} />
      ) : (
        <Eye size={20} />
      )}
    </button>

  </div>
</div>

          <AppButton
            loading={loading}
            type="submit"
            className="h-14 w-full rounded-2xl"
          >
            Login
          </AppButton>

        </form>

      </div>
    </section>
  );
}