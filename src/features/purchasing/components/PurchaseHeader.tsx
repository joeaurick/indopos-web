"use client";

import { Supplier } from "@/features/suppliers";

type Props = {
  suppliers: Supplier[];

  supplierId: string;

  invoice: string;

  orderDate: string;

  onSupplierChange: (
    value: string
  ) => void;

  onDateChange: (
    value: string
  ) => void;
};

export function PurchaseHeader({

  suppliers,

  supplierId,

  invoice,

  orderDate,

  onSupplierChange,

  onDateChange,

}: Props) {

  return (

    <div className="grid grid-cols-2 gap-5">

      <div>

        <label className="mb-2 block text-sm font-medium">
          Supplier
        </label>

        <select
          value={supplierId}
          onChange={(e) =>
            onSupplierChange(
              e.target.value
            )
          }
          className="w-full rounded-xl border px-4 py-3"
        >

          <option value="">
            Pilih Supplier
          </option>

          {suppliers.map(
            (supplier) => (

              <option
                key={supplier.id}
                value={supplier.id}
              >
                {supplier.name}
              </option>

            )
          )}

        </select>

      </div>

      <div>

        <label className="mb-2 block text-sm font-medium">
          Invoice
        </label>

        <input
          readOnly
          value={invoice}
          className="w-full rounded-xl border bg-slate-100 px-4 py-3"
        />

      </div>

      <div>

        <label className="mb-2 block text-sm font-medium">
          Tanggal
        </label>

        <input
          type="date"
          value={orderDate}
          onChange={(e) =>
            onDateChange(
              e.target.value
            )
          }
          className="w-full rounded-xl border px-4 py-3"
        />

      </div>

    </div>

  );

}