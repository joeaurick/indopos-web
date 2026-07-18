"use client";

import { Trash2 } from "lucide-react";

import {
  PurchaseItem,
} from "../hooks/usePurchaseItems";

type Props = {
  items: PurchaseItem[];

  onQtyChange: (
    productId: string,
    qty: number
  ) => void;

  onPriceChange: (
    productId: string,
    price: number
  ) => void;

  onDelete: (
    productId: string
  ) => void;
};

export function PurchaseItemTable({
  items,
  onQtyChange,
  onPriceChange,
  onDelete,
}: Props) {
  return (
    <table className="w-full overflow-hidden rounded-xl border">

      <thead className="bg-slate-100">

        <tr>

          <th className="p-3 text-left">
            Produk
          </th>

          <th className="p-3">
            Qty
          </th>

          <th className="p-3">
            Harga Modal
          </th>

          <th className="p-3">
            Subtotal
          </th>

          <th></th>

        </tr>

      </thead>

      <tbody>

        {items.map((item) => (

          <tr
            key={item.product_id}
            className="border-t"
          >

            <td className="p-3">
              {item.product_name}
            </td>

            <td className="p-3">

              <input
                type="number"
                value={item.qty}
                onChange={(e) =>
                  onQtyChange(
                    item.product_id,
                    Number(
                      e.target.value
                    )
                  )
                }
                className="w-20 rounded-lg border px-2 py-1"
              />

            </td>

            <td className="p-3">

              <input
                type="number"
                value={item.cost_price}
                onChange={(e) =>
                  onPriceChange(
                    item.product_id,
                    Number(
                      e.target.value
                    )
                  )
                }
                className="w-32 rounded-lg border px-2 py-1"
              />

            </td>

            <td className="p-3 font-semibold">
              Rp{" "}
              {item.subtotal.toLocaleString(
                "id-ID"
              )}
            </td>

            <td>

              <button
                onClick={() =>
                  onDelete(
                    item.product_id
                  )
                }
              >
                <Trash2
                  size={18}
                  className="text-red-500"
                />
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>
  );
}