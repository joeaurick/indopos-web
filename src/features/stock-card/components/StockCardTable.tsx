"use client";

import { StockMovement } from "@/features/inventory/types";

type Props = {
  data: StockMovement[];
  loading: boolean;
};

export function StockCardTable({
  data,
  loading,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">

      <table className="w-full">

        <thead className="bg-slate-50">

          <tr>

            <th className="px-5 py-4 text-left">
              Tanggal
            </th>

            <th className="px-5 py-4 text-left">
              Produk
            </th>

            <th className="px-5 py-4 text-center">
              Referensi
            </th>

            <th className="px-5 py-4 text-center">
              Tipe
            </th>

            <th className="px-5 py-4 text-right">
              Qty
            </th>

            <th className="px-5 py-4 text-right">
              Sebelum
            </th>

            <th className="px-5 py-4 text-right">
              Sesudah
            </th>

          </tr>

        </thead>

        <tbody>

          {loading ? (
            <tr>
              <td
                colSpan={7}
                className="py-10 text-center"
              >
                Memuat...
              </td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td
                colSpan={7}
                className="py-10 text-center text-slate-400"
              >
                Belum ada histori stok.
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr
                key={item.id}
                className="border-t"
              >
                <td className="px-5 py-4">
                  {new Date(
                    item.created_at
                  ).toLocaleString("id-ID")}
                </td>

                <td className="px-5 py-4">
                  {item.product_name}
                </td>

                <td className="px-5 py-4 text-center">
                  {item.reference_type}
                </td>

                <td className="px-5 py-4 text-center">
                  {item.movement_type}
                </td>

                <td className="px-5 py-4 text-right font-semibold">
                  {item.qty}
                </td>

                <td className="px-5 py-4 text-right">
                  {item.stock_before}
                </td>

                <td className="px-5 py-4 text-right">
                  {item.stock_after}
                </td>
              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}