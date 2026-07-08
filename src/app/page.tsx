import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold">IndoPos</h1>

        <p className="mt-3 text-gray-600">
          Modern POS & Business Management Platform
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/login"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg border px-6 py-3"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}