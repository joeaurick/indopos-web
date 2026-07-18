"use client";

import { Package } from "lucide-react";

import { PurchaseOrder } from "../types";

import { PurchaseActions } from "./PurchaseActions";

type Props = {
  purchases: PurchaseOrder[];

  loading: boolean;

  onEdit: (
    purchase: PurchaseOrder
  ) => void;

  onDelete: (
    purchase: PurchaseOrder
  ) => void;

  onReceive: (
    purchase: PurchaseOrder
  ) => void;
};

export function PurchaseTable({
  purchases,
  loading,
  onEdit,
  onDelete,
  onReceive,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">

      <table className="w-full">

        <thead className="bg-slate-50">

          <tr>

            <th className="px-6 py-4 text-left">
              Invoice
            </th>

            <th className="px-6 py-4 text-left">
              Supplier
            </th>

            <th className="px-6 py-4 text-left">
              Tanggal
            </th>

            <th className="px-6 py-4 text-center">
              Status
            </th>

            <th className="px-6 py-4 text-right">
              Total
            </th>

            <th className="px-6 py-4 text-center">
              Action
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
                Memuat...
              </td>
            </tr>
          ) : purchases.length === 0 ? (
            <tr>
              <td
                colSpan={6}
                className="py-12 text-center text-slate-400"
              >
                Data Purchase kosong.
              </td>
            </tr>
          ) : (
            purchases.map(
              (purchase) => (
                <tr
                  key={purchase.id}
                  className="border-t hover:bg-slate-50"
                >
                  <td className="px-6 py-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100">
                        <Package />
                      </div>

                      <div className="font-semibold">
                        {purchase.invoice_number}
                      </div>

                    </div>

                  </td>

                  <td className="px-6 py-4">
                    {purchase.supplier_name}
                  </td>

                  <td className="px-6 py-4">
                    {purchase.order_date}
                  </td>

                  <td className="px-6 py-4 text-center">

                    <span
                      className={`rounded-full px-3 py-1 text-sm ${
                        purchase.status ===
                        "RECEIVED"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {purchase.status}
                    </span>

                  </td>

                  <td className="px-6 py-4 text-right font-semibold">
                    Rp{" "}
                    {purchase.total.toLocaleString(
                      "id-ID"
                    )}
                  </td>

                  <td className="px-6 py-4">

                    <div className="flex items-center justify-center gap-2">

                      {purchase.status ===
                        "DRAFT" && (
                        <button
                          onClick={() =>
                            onReceive(
                              purchase
                            )
                          }
                          className="rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700"
                        >
                          Receive
                        </button>
                      )}

                      <PurchaseActions
                        onEdit={() =>
                          onEdit(
                            purchase
                          )
                        }
                        onDelete={() =>
                          onDelete(
                            purchase
                          )
                        }
                      />

                    </div>

                  </td>

                </tr>
              )
            )
          )}

        </tbody>

      </table>

    </div>
  );
}