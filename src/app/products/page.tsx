import { AppLayout } from "@/components/layout/AppLayout";
import { ProductsPage } from "@/features/products";

export default function Page() {
  return (
    <AppLayout>
      <ProductsPage />
    </AppLayout>
  );
}