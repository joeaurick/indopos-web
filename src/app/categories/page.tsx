import { AppLayout } from "@/components/layout/AppLayout";
import { CategoriesPage } from "@/features/categories/pages/CategoriesPage";

export default function Page() {
  return (
    <AppLayout>
      <CategoriesPage />
    </AppLayout>
  );
}