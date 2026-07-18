import { AppLayout } from "@/components/layout/AppLayout";
import { PageHeader } from "@/components/app/page-header/PageHeader";

import { BusinessForm } from "@/features/settings/components/BusinessForm";

export default function SettingsPage() {
  return (
    <AppLayout>

      <PageHeader
        title="Business Profile"
        subtitle="Pengaturan identitas usaha."
      />

      <BusinessForm />

    </AppLayout>
  );
}