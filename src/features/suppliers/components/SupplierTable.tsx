"use client";

import { Building2 } from "lucide-react";

import { Supplier } from "../types";
import { SupplierActions } from "./SupplierActions";

type Props = {
  suppliers: Supplier[];

  loading: boolean;

  onEdit: (
    supplier: Supplier
  ) => void;

  onDelete: (
    supplier: Supplier
  ) => void;
};

export function SupplierTable({
  suppliers,
  loading,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">

      <table className="w-full">

        <thead className="bg-slate-50">

          <tr>

            <th className="px-6 py-4 text-left">
              Supplier
            </th>

            <th className="px-6 py-4 text-left">
              Contact
            </th>

            <th className="px-6 py-4 text-left">
              Phone
            </th>

            <th className="px-6 py-4 text-left">
              Email
            </th>

            <th className="px-6 py-4 text-left">
              Address
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
                Memuat data...
              </td>

            </tr>

          ) : suppliers.length === 0 ? (

            <tr>

              <td
                colSpan={6}
                className="py-12 text-center text-slate-400"
              >
                Supplier tidak ditemukan.
              </td>

            </tr>

          ) : (

            suppliers.map((supplier) => (

              <tr
                key={supplier.id}
                className="border-t hover:bg-slate-50"
              >

                <td className="px-6 py-4">

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">

                      <Building2 className="text-slate-500" />

                    </div>

                    <div className="font-semibold">
                      {supplier.name}
                    </div>

                  </div>

                </td>

                <td className="px-6 py-4">
                  {supplier.contact_person}
                </td>

                <td className="px-6 py-4">
                  {supplier.phone}
                </td>

                <td className="px-6 py-4">
                  {supplier.email}
                </td>

                <td className="px-6 py-4">
                  {supplier.address}
                </td>

                <td className="px-6 py-4">

                  <SupplierActions
                    onEdit={() =>
                      onEdit(supplier)
                    }
                    onDelete={() =>
                      onDelete(supplier)
                    }
                  />

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}