"use client";

import {
  X,
  ReceiptText,
  Printer,
} from "lucide-react";

import { useSaleDetailStore } from "../store/sale-detail-store";
import { printReceipt } from "../utils/print-receipt";

export function SalesDetailDialog() {
  const {
    open,
    loading,
    invoice,
    createdAt,
    items,
    total,
    paymentAmount,
    changeAmount,
    closeDetail,
  } = useSaleDetailStore();

  if (!open) return null;

  const totalItem = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-start justify-between border-b p-6">

          <div>

            <div className="flex items-center gap-2">

              <ReceiptText className="text-teal-600" />

              <h2 className="text-xl font-bold">
                Detail Penjualan
              </h2>

            </div>

            <p className="mt-3 font-semibold">
              {invoice}
            </p>

            <p className="text-sm text-slate-500">
              {createdAt
                ? new Date(createdAt).toLocaleString(
                    "id-ID"
                  )
                : "-"}
            </p>

          </div>

          <button
            onClick={closeDetail}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X />
          </button>

        </div>

        {/* Body */}

        <div className="max-h-[420px] overflow-y-auto p-6">

          {loading ? (

            <div className="py-10 text-center">
              Memuat...
            </div>

          ) : (

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="pb-3 text-left">
                    Produk
                  </th>

                  <th className="pb-3 text-center">
                    Qty
                  </th>

                  <th className="pb-3 text-right">
                    Harga
                  </th>

                  <th className="pb-3 text-right">
                    Subtotal
                  </th>

                </tr>

              </thead>

              <tbody>

                {items.map((item) => (

                  <tr
                    key={item.id}
                    className="border-b"
                  >

                    <td className="py-4">

                      <div className="font-semibold">
                        {item.product_name}
                      </div>

                      <div className="text-sm text-slate-500">
                        {item.sku}
                      </div>

                    </td>

                    <td className="text-center">
                      {item.quantity}
                    </td>

                    <td className="text-right">
                      Rp{" "}
                      {item.price.toLocaleString(
                        "id-ID"
                      )}
                    </td>

                    <td className="text-right font-semibold">
                      Rp{" "}
                      {item.subtotal.toLocaleString(
                        "id-ID"
                      )}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          )}

        </div>

        {/* Footer */}

        <div className="border-t bg-slate-50 p-6">

          <div className="space-y-2">

            <div className="flex justify-between">
              <span>Total Item</span>
              <span className="font-semibold">
                {totalItem}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Total Belanja</span>
              <span className="font-semibold">
                Rp {Number(total).toLocaleString("id-ID")}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Bayar</span>
              <span className="font-semibold text-emerald-600">
                Rp {Number(paymentAmount).toLocaleString("id-ID")}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Kembalian</span>
              <span className="font-semibold text-orange-600">
                Rp {Number(changeAmount).toLocaleString("id-ID")}
              </span>
            </div>

          </div>

          <div className="my-6 border-t" />

          <div className="flex justify-end gap-3">

            <button
              onClick={() =>
                printReceipt({
                  invoice,
                  createdAt,
                  total,
                  paymentAmount,
                  changeAmount,
                  items,
                })
              }
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-blue-600
                px-5
                py-3
                font-semibold
                text-white
                hover:bg-blue-700
              "
            >
              <Printer size={18} />
              Cetak Struk
            </button>

            <button
              onClick={closeDetail}
              className="
                rounded-xl
                border
                px-5
                py-3
                hover:bg-slate-100
              "
            >
              Tutup
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}