"use client";

import {
  CreditCard,
  Wallet,
  Landmark,
} from "lucide-react";

import { AppCard } from "@/components/ui";
import { useDashboardStore } from "@/features/dashboard/store/dashboard-store";

export function DashboardPaymentMethod() {
  const payments =
    useDashboardStore(
      (state) => state.data.paymentMethods
    );

  const total =
    payments.reduce(
      (sum, item) => sum + item.total,
      0
    ) || 1;

  const getIcon = (method: string) => {
    switch (method.toLowerCase()) {
      case "cash":
        return <Wallet size={20} />;

      case "transfer":
        return <Landmark size={20} />;

      default:
        return <CreditCard size={20} />;
    }
  };

  return (
    <AppCard className="p-6">

      <div className="mb-8">

        <h2 className="text-2xl font-bold">
          Payment Method
        </h2>

        <p className="mt-1 text-sm text-[var(--text-muted)]">
          Metode pembayaran hari ini.
        </p>

      </div>

      <div className="space-y-5">

        {payments.map((item) => (

          <div
            key={item.method}
            className="rounded-2xl border border-[var(--border)] p-4"
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                {getIcon(item.method)}

                <div>

                  <h4 className="font-semibold">
                    {item.method}
                  </h4>

                  <p className="text-sm text-[var(--text-muted)]">
                    {item.count} transaksi
                  </p>

                </div>

              </div>

              <div className="text-right">

                <p className="font-bold">
                  Rp{" "}
                  {item.total.toLocaleString("id-ID")}
                </p>

              </div>

            </div>

            <div className="mt-3 h-2 rounded-full bg-slate-200">

              <div
                className="h-2 rounded-full bg-[var(--primary)]"
                style={{
                  width: `${
                    (item.total / total) * 100
                  }%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </AppCard>
  );
}