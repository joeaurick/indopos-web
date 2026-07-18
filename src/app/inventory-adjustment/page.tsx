import { AppLayout } from "@/components/layout/AppLayout";
import { InventoryAdjustmentPage } from "@/features/inventory-adjustment";

export default function Page() {
  return (
    <AppLayout>
      <InventoryAdjustmentPage />
    </AppLayout>
  );
}