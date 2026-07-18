import { AppLayout } from "@/components/layout/AppLayout";

import { FinancePage } from "@/features/finance";

export default function Page() {
  return (
    <AppLayout>
      <FinancePage />
    </AppLayout>
  );
}