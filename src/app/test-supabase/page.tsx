import { createClient } from "@/lib/supabase/server";

export default async function TestSupabasePage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getSession();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Test Supabase</h1>

      <pre className="mt-4 rounded bg-slate-100 p-4">
        {JSON.stringify(
          {
            session: data.session,
            error: error?.message,
          },
          null,
          2
        )}
      </pre>
    </main>
  );
}