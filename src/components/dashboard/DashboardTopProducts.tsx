"use client";

import { Trophy } from "lucide-react";

import { AppCard } from "@/components/ui";
import { useDashboardStore } from "@/features/dashboard/store/dashboard-store";

export function DashboardTopProducts() {
  const products = useDashboardStore(
    (state) => state.data.topProducts
  );

  const maxSold =
    products.length > 0
      ? Math.max(
          ...products.map(
            (item) => item.sold
          )
        )
      : 1;

  return (
    <AppCard className="p-6">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Top Selling Product
          </h2>

          <p className="mt-1 text-sm text-[var(--text-muted)]">
            Produk paling laris berdasarkan transaksi.
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
            bg-amber-100
            text-amber-600
          "
        >
          <Trophy size={22} />
        </div>

      </div>

      {products.length === 0 && (

        <div
          className="
            rounded-2xl
            border
            border-dashed
            border-[var(--border)]
            py-10
            text-center
          "
        >

          <Trophy
            className="mx-auto mb-4 text-slate-400"
            size={36}
          />

          <p className="font-medium">
            Belum ada penjualan
          </p>

          <p className="mt-1 text-sm text-[var(--text-muted)]">
            Produk terlaris akan muncul di sini.
          </p>

        </div>

      )}

      <div className="space-y-5">

        {products.map((item, index) => (

          <div
            key={item.id}
            className="
              rounded-2xl
              border
              border-[var(--border)]
              p-4
            "
          >

            <div className="flex items-center justify-between">

              <div>

                <h4 className="font-semibold">

                  #{index + 1} {item.name}

                </h4>

                <p className="mt-1 text-sm text-[var(--text-muted)]">

                  {item.sold} Terjual

                </p>

              </div>

              <div className="text-right">

                <p className="font-bold">

                  Rp{" "}
                  {item.revenue.toLocaleString("id-ID")}

                </p>

              </div>

            </div>

            <div
              className="
                mt-4
                h-2
                overflow-hidden
                rounded-full
                bg-slate-200
              "
            >

              <div
                className="
                  h-full
                  rounded-full
                  bg-[var(--primary)]
                "
                style={{
                  width: `${
                    (item.sold / maxSold) * 100
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