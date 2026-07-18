"use client";

import { InventoryItem } from "../types";

type Props = {
  items: InventoryItem[];
  loading: boolean;
};

export function InventoryTable({
  items,
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

            <th className="px-6 py-4 text-left">
              SKU
            </th>

            <th className="px-6 py-4 text-left">
              Kategori
            </th>

            <th className="px-6 py-4 text-center">
              Stock
            </th>

            <th className="px-6 py-4 text-center">
              Minimum
            </th>

            <th className="px-6 py-4 text-center">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td
                colSpan={6}
                className="py-12 text-center"
              >
                Memuat data...
              </td>
            </tr>
          ) : items.length === 0 ? (
            <tr>
              <td
                colSpan={6}
                className="py-12 text-center text-slate-400"
              >
                Data inventory kosong.
              </td>
            </tr>
          ) : (
            items.map((item) => {
              const low =
                item.stock <= item.minimum_stock;

              return (
                <tr
                  key={item.id}
                  className="border-t hover:bg-slate-50"
                >
                  <td className="px-6 py-4 font-medium">
                    {item.product_name}
                  </td>

                  <td className="px-6 py-4">
                    {item.sku}
                  </td>

                  <td className="px-6 py-4">
                    {item.category_name ??
                      "-"}
                  </td>

                  <td className="px-6 py-4 text-center font-semibold">
                    {item.stock}
                  </td>

                  <td className="px-6 py-4 text-center">
                    {item.minimum_stock}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <span
                      className={
                        low
                          ? "rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700"
                          : "rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700"
                      }
                    >
                      {low
                        ? "Stock Menipis"
                        : "Normal"}
                    </span>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}