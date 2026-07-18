"use client";

import {
  ShoppingCart,
  CircleDollarSign,
  Package,
} from "lucide-react";

import { useDashboardStore } from "@/features/dashboard/store/dashboard-store";

export function DashboardHeroStats() {
  const summary = useDashboardStore(
    (state) => state.data.summary
  );

  return (
    <div
      className="
        mt-8
        grid
        gap-4
        sm:grid-cols-2
        xl:grid-cols-3
      "
    >
      <div className="rounded-2xl bg-slate-50 px-5 py-4">
        <div className="flex items-center gap-3">
          <ShoppingCart
            size={22}
            className="text-blue-600"
          />

          <div>
            <p className="text-xs text-slate-500">
              Hari Ini
            </p>

            <h3 className="font-bold">
              {summary.todayTransactions} Transaksi
            </h3>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-slate-50 px-5 py-4">
        <div className="flex items-center gap-3">
          <CircleDollarSign
            size={22}
            className="text-emerald-600"
          />

          <div>
            <p className="text-xs text-slate-500">
              Revenue
            </p>

            <h3 className="font-bold">
              Rp{" "}
              {summary.todayIncome.toLocaleString(
                "id-ID"
              )}
            </h3>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-slate-50 px-5 py-4">
        <div className="flex items-center gap-3">
          <Package
            size={22}
            className="text-orange-500"
          />

          <div>
            <p className="text-xs text-slate-500">
              Stock Alert
            </p>

            <h3 className="font-bold">
              {summary.lowStock} Produk
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}