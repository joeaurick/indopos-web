"use client";

import {
  CalendarDays,
  CircleDollarSign,
  Package,
  ShoppingCart,
} from "lucide-react";

import { AppButton } from "@/components/ui";

export function DashboardHeader() {
  const today = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      className="
        mb-8
        flex
        items-center
        justify-between
        rounded-[28px]
        border
        border-[var(--border)]
        bg-[var(--card)]
        p-8
        shadow-sm
      "
    >
      {/* LEFT */}

      <div>

        <p className="text-sm text-[var(--text-muted)]">
          {today}
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Dashboard
        </h1>

        <p className="mt-3 max-w-xl text-[15px] text-[var(--text-muted)]">
          Selamat datang kembali. Berikut ringkasan aktivitas
          bisnis Anda hari ini.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">

          <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-5 py-4">

            <ShoppingCart
              size={20}
              className="text-blue-600"
            />

            <div>

              <p className="text-xs text-slate-500">
                Transaksi
              </p>

              <h3 className="font-bold">
                23 Hari Ini
              </h3>

            </div>

          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-5 py-4">

            <CircleDollarSign
              size={20}
              className="text-emerald-600"
            />

            <div>

              <p className="text-xs text-slate-500">
                Revenue
              </p>

              <h3 className="font-bold">
                Rp 12.500.000
              </h3>

            </div>

          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-5 py-4">

            <Package
              size={20}
              className="text-orange-500"
            />

            <div>

              <p className="text-xs text-slate-500">
                Stock Alert
              </p>

              <h3 className="font-bold">
                3 Produk
              </h3>

            </div>

          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div className="flex flex-col gap-3">

        <AppButton>
          + Penjualan Baru
        </AppButton>

        <AppButton variant="secondary">
          + Cash In
        </AppButton>

        <AppButton variant="outline">
          + Cash Out
        </AppButton>

      </div>

    </div>
  );
}