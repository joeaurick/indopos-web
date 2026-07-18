"use client";

import { PageHeader } from "@/components/app/page-header/PageHeader";

import { FinanceFilter } from "../components/FinanceFilter";
import { FinanceSummary } from "../components/FinanceSummary";
import { FinanceChart } from "../components/FinanceChart";
import { FinanceHistory } from "../components/FinanceHistory";

export function FinancePage() {
  return (
    <>
      <PageHeader
        title="Finance"
        subtitle="Ringkasan keuangan, pemasukan, pengeluaran, dan riwayat transaksi."
      />

      <FinanceFilter />

      <FinanceSummary />

      <div className="mt-6">
        <FinanceChart />
      </div>

      <div className="mt-6">
        <FinanceHistory />
      </div>
    </>
  );
}