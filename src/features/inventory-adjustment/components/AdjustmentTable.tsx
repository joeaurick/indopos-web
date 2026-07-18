"use client";

import { Boxes } from "lucide-react";

import { Adjustment } from "../types";

type Props = {
  adjustments: Adjustment[];

  loading: boolean;
};

export function AdjustmentTable({
  adjustments,
  loading,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">

      <table className="w-full">

        <thead className="bg-slate-50">

          <tr>

            <th className="px-6 py-4 text-left">
              Produk
            </th>

            <th className="px-6 py-4">
              Tipe
            </th>

            <th className="px-6 py-4">
              Qty
            </th>

            <th className="px-6 py-4">
              Sebelum
            </th>

            <th className="px-6 py-4">
              Sesudah
            </th>

            <th className="px-6 py-4">
              Tanggal
            </th>

          </tr>

        </thead>

        <tbody>

          {loading ? (

            <tr>

              <td
                colSpan={6}
                className="py-10 text-center"
              >
                Memuat...
              </td>

            </tr>

          ) : adjustments.length === 0 ? (

            <tr>

              <td
                colSpan={6}
                className="py-10 text-center text-slate-400"
              >
                Belum ada Adjustment.
              </td>

            </tr>

          ) : (

            adjustments.map((item) => (

              <tr
                key={item.id}
                className="border-t"
              >

                <td className="px-6 py-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">

                      <Boxes size={18} />

                    </div>

                    <div>

                      <div className="font-semibold">
                        {item.product_name}
                      </div>

                      <div className="text-sm text-slate-500">
                        {item.sku}
                      </div>

                    </div>

                  </div>

                </td>

                <td className="text-center">
                  {item.type}
                </td>

                <td className="text-center">
                  {item.qty}
                </td>

                <td className="text-center">
                  {item.stock_before}
                </td>

                <td className="text-center">
                  {item.stock_after}
                </td>

                <td className="text-center">
                  {new Date(
                    item.created_at
                  ).toLocaleString("id-ID")}
                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}