"use client";

import { useActionState } from "react";
import { registerAction } from "../actions/register";

const initialState = {
  success: false,
  message: "",
};

export function RegisterForm() {
  const [state, formAction, pending] = useActionState(
    registerAction,
    initialState
  );

  return (
    <div className="mx-auto mt-20 w-full max-w-md rounded-xl border bg-white p-8 shadow">
      <h1 className="text-2xl font-bold">Daftar IndoPos</h1>

      <p className="mt-2 text-sm text-gray-500">
        Buat akun untuk mulai menggunakan IndoPos.
      </p>

      <form action={formAction} className="mt-6 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium">
            Nama Lengkap
          </label>

          <input
            name="fullName"
            type="text"
            required
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Email
          </label>

          <input
            name="email"
            type="email"
            required
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Password
          </label>

          <input
            name="password"
            type="password"
            required
            className="w-full rounded-lg border p-3"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            Konfirmasi Password
          </label>

          <input
            name="confirmPassword"
            type="password"
            required
            className="w-full rounded-lg border p-3"
          />
        </div>

        {state.message && (
          <div
            className={`rounded-lg p-3 text-sm ${
              state.success
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {state.message}
          </div>
        )}

        <button
          type="submit"
          disabled={pending}
          className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {pending ? "Memproses..." : "Daftar"}
        </button>
      </form>
    </div>
  );
}