import { AppLayout } from "@/components/layout/AppLayout";
import { InventoryPage } from "@/features/inventory";

export default function Page() {
  return (
    <AppLayout>
      <InventoryPage />
    </AppLayout>
  );
}