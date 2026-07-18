"use client";

import { useEffect } from "react";

import {
  Pencil,
  Trash2,
} from "lucide-react";

import { Card } from "@/components/ui/Card";

import {
  ExpenseCategory,
} from "../types";

import { useExpenseCategoryStore } from "../store/expense-category.store";

type Props = {
  onEdit?: (
    category: ExpenseCategory
  ) => void;

  onDelete?: (
    category: ExpenseCategory
  ) => void;
};

export function ExpenseCategoryTable({
  onEdit,
  onDelete,
}: Props) {
  const loading =
    useExpenseCategoryStore(
      (state) => state.loading
    );

  const categories =
    useExpenseCategoryStore(
      (state) => state.categories
    );

  const fetchCategories =
    useExpenseCategoryStore(
      (state) =>
        state.fetchCategories
    );

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-5 py-4 text-left text-sm font-semibold">
                No
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold">
                Warna
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold">
                Nama
              </th>

              <th className="px-5 py-4 text-left text-sm font-semibold">
                Icon
              </th>

              <th className="px-5 py-4 text-center text-sm font-semibold">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={5}
                  className="p-8 text-center text-slate-400"
                >
                  Loading...
                </td>
              </tr>
            ) : categories.length ===
              0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="p-8 text-center text-slate-400"
                >
                  Belum ada kategori.
                </td>
              </tr>
            ) : (
              categories.map(
                (
                  category,
                  index
                ) => (
                  <tr
                    key={
                      category.id
                    }
                    className="border-t hover:bg-slate-50"
                  >
                    <td className="px-5 py-4">
                      {index + 1}
                    </td>

                    <td className="px-5 py-4">
                      <div
                        className="h-6 w-6 rounded-full border"
                        style={{
                          backgroundColor:
                            category.color,
                        }}
                      />
                    </td>

                    <td className="px-5 py-4 font-medium">
                      {
                        category.name
                      }
                    </td>

                    <td className="px-5 py-4">
                      {category.icon ??
                        "-"}
                    </td>

                    <td className="px-5 py-4">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() =>
                            onEdit?.(
                              category
                            )
                          }
                          className="rounded-lg bg-amber-500 p-2 text-white hover:bg-amber-600"
                        >
                          <Pencil
                            size={
                              16
                            }
                          />
                        </button>

                        <button
                          onClick={() =>
                            onDelete?.(
                              category
                            )
                          }
                          className="rounded-lg bg-red-600 p-2 text-white hover:bg-red-700"
                        >
                          <Trash2
                            size={
                              16
                            }
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}