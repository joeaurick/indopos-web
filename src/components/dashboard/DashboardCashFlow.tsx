"use client";

import {
  CreditCard,
  Wallet,
} from "lucide-react";

import { AppCard } from "@/components/ui";

import { useDashboardStore } from "@/features/dashboard/store/dashboard-store";

export function DashboardCashFlow() {
  const paymentMethods =
    useDashboardStore(
      (state) => state.data.paymentMethods
    );

  const total =
    paymentMethods.reduce(
      (sum, item) => sum + item.total,
      0
    );

  return (
    <AppCard className="p-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Payment Method
          </h2>

          <p className="mt-1 text-sm text-[var(--text-muted)]">
            Metode pembayaran penjualan.
          </p>
        </div>

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-emerald-100
            text-emerald-600
          "
        >
          <Wallet size={22} />
        </div>
      </div>

      <div className="space-y-4">
        {paymentMethods.length === 0 && (
          <div className="rounded-2xl border border-dashed p-8 text-center text-sm text-slate-500">
            Belum ada transaksi.
          </div>
        )}

        {paymentMethods.map((item) => (
          <div
            key={item.method}
            className="rounded-2xl border border-[var(--border)] p-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-slate-100
                  "
                >
                  <CreditCard size={18} />
                </div>

                <div>
                  <h4 className="font-semibold">
                    {item.method}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {item.count} transaksi
                  </p>
                </div>
              </div>

              <div className="text-right">
                <p className="font-bold">
                  Rp{" "}
                  {item.total.toLocaleString(
                    "id-ID"
                  )}
                </p>

                <p className="text-xs text-slate-500">
                  {total > 0
                    ? (
                        (item.total /
                          total) *
                        100
                      ).toFixed(1)
                    : 0}
                  %
                </p>
              </div>
            </div>

            <div className="mt-4 h-2 rounded-full bg-slate-200">
              <div
                className="h-2 rounded-full bg-[var(--primary)]"
                style={{
                  width: `${
                    total > 0
                      ? (item.total /
                          total) *
                        100
                      : 0
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