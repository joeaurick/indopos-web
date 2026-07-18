"use client";

import { PageHeader } from "@/components/app/page-header/PageHeader";

import { ReportsFilter } from "../components/ReportsFilter";
import { ReportsSummary } from "../components/ReportsSummary";
import { ReportsTable } from "../components/ReportsTable";
import { ExportExcelButton } from "../components/ExportExcelButton";
import { ExportPdfButton } from "../components/ExportPdfButton";
import { PrintReportButton } from "../components/PrintReportButton";
import { ReportsProductTable } from "../components/ReportsProductTable";

export function ReportsPage() {
  return (
    <>
      <PageHeader
        title="Reports"
        subtitle="Laporan penjualan, pembelian, stok dan keuangan."
      />

      <div className="flex flex-wrap items-center gap-3">

        <ReportsFilter />

        <ExportExcelButton />

        <ExportPdfButton />

        <PrintReportButton />

      </div>

      <div className="mt-6">
        <ReportsSummary />
      </div>

      <div className="mt-6">
        <ReportsTable />
      </div>

      <div className="mt-6">
  <ReportsProductTable />
</div>
    </>
  );
}