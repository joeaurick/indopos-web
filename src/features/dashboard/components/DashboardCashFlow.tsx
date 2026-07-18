"use client";

import {
  ArrowDownLeft,
  ArrowUpRight,
  Wallet,
} from "lucide-react";

import { AppCard } from "@/components/ui";

export function DashboardCashFlow() {
  const cashIn = 25850000;
  const cashOut = 9240000;
  const balance = cashIn - cashOut;

  return (
    <AppCard className="p-6">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Cash Flow
          </h2>

          <p className="mt-1 text-sm text-[var(--text-muted)]">
            Ringkasan arus kas hari ini.
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

      <div className="space-y-5">

        <div
          className="
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-[var(--border)]
            p-5
          "
        >
          <div className="flex items-center gap-4">

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-emerald-100
                text-emerald-600
              "
            >
              <ArrowDownLeft size={20} />
            </div>

            <div>

              <p className="text-sm text-[var(--text-muted)]">
                Cash In
              </p>

              <h3 className="text-xl font-bold">
                Rp {cashIn.toLocaleString("id-ID")}
              </h3>

            </div>

          </div>

        </div>

        <div
          className="
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-[var(--border)]
            p-5
          "
        >
          <div className="flex items-center gap-4">

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-red-100
                text-red-600
              "
            >
              <ArrowUpRight size={20} />
            </div>

            <div>

              <p className="text-sm text-[var(--text-muted)]">
                Cash Out
              </p>

              <h3 className="text-xl font-bold">
                Rp {cashOut.toLocaleString("id-ID")}
              </h3>

            </div>

          </div>

        </div>

        <div
          className="
            rounded-3xl
            bg-[var(--primary)]
            p-6
            text-white
          "
        >

          <p className="text-sm opacity-80">
            Saldo Kas
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Rp {balance.toLocaleString("id-ID")}
          </h2>

        </div>

      </div>

    </AppCard>
  );
}