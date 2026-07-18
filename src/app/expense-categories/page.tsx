import { AppLayout } from "@/components/layout/AppLayout";

import { ExpenseCategoryPage } from "@/features/expense-categories";

export default function Page() {
  return (
    <AppLayout>
      <ExpenseCategoryPage />
    </AppLayout>
  );
}