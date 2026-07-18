import { AppLayout } from "@/components/layout/AppLayout";
import { CustomersPage } from "@/features/customers";

export default function Page() {
  return (
    <AppLayout>
      <CustomersPage />
    </AppLayout>
  );
}