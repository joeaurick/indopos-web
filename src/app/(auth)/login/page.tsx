export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold">
          Login IndoPos
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Masuk ke akun Anda.
        </p>

        <div className="mt-8 space-y-4">
          <input
            className="w-full rounded border p-3"
            placeholder="Email"
          />

          <input
            className="w-full rounded border p-3"
            type="password"
            placeholder="Password"
          />

          <button
            className="w-full rounded bg-black py-3 text-white"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}