"use client";

import {
  FormEvent,
  useEffect,
  useState,
} from "react";

import { notify } from "@/lib/notify";

import {
  ExpenseCategory,
} from "../types";

import { useExpenseCategoryStore } from "../store/expense-category.store";

type Props = {
  mode: "create" | "edit";

  category?: ExpenseCategory | null;

  onSuccess?: () => void;
};

const COLORS = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#14b8a6",
  "#06b6d4",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#ec4899",
];

export function ExpenseCategoryForm({
  mode,
  category,
  onSuccess,
}: Props) {
  const loading =
    useExpenseCategoryStore(
      (state) => state.loading
    );

  const createCategory =
    useExpenseCategoryStore(
      (state) => state.createCategory
    );

  const updateCategory =
    useExpenseCategoryStore(
      (state) => state.updateCategory
    );

  const [name, setName] =
    useState("");

  const [color, setColor] =
    useState(COLORS[0]);

  const [icon, setIcon] =
    useState("");

  useEffect(() => {
    if (
      mode === "edit" &&
      category
    ) {
      setName(category.name);

      setColor(
        category.color ||
          COLORS[0]
      );

      setIcon(
        category.icon ?? ""
      );

      return;
    }

    setName("");

    setColor(COLORS[0]);

    setIcon("");
  }, [mode, category]);

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!name.trim()) {
      notify.warning(
        "Nama kategori wajib diisi."
      );

      return;
    }

    const payload = {
      name: name.trim(),
      color,
      icon:
        icon.trim() === ""
          ? null
          : icon.trim(),
    };

    const toastId =
      notify.loading(
        mode === "create"
          ? "Menyimpan kategori..."
          : "Memperbarui kategori..."
      );

    try {
      if (mode === "create") {
        await createCategory(
          payload
        );

        notify.dismiss(
          toastId
        );

        notify.success(
          "Kategori berhasil ditambahkan."
        );
      } else {
        if (!category) {
          throw new Error(
            "Kategori tidak ditemukan."
          );
        }

        await updateCategory(
          category.id,
          payload
        );

        notify.dismiss(
          toastId
        );

        notify.success(
          "Kategori berhasil diperbarui."
        );
      }

      onSuccess?.();
    } catch (error: any) {
      console.error(error);

      notify.dismiss(
        toastId
      );

      notify.error(
        error?.message ??
          "Terjadi kesalahan."
      );
    }
  }

  return (
    <form
      onSubmit={
        handleSubmit
      }
      className="space-y-5"
    >
      <div>
        <label className="mb-2 block text-sm font-medium">
          Nama Kategori
        </label>

        <input
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Icon
        </label>

        <input
          value={icon}
          onChange={(e) =>
            setIcon(
              e.target.value
            )
          }
          placeholder="Contoh: bolt"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-teal-500"
        />
      </div>

      <div>
        <label className="mb-3 block text-sm font-medium">
          Warna
        </label>

        <div className="flex flex-wrap gap-3">
          {COLORS.map(
            (item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setColor(
                    item
                  )
                }
                className={`h-10 w-10 rounded-full border-4 transition ${
                  color === item
                    ? "border-slate-900"
                    : "border-white"
                }`}
                style={{
                  backgroundColor:
                    item,
                }}
              />
            )
          )}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={
            loading
          }
          className="rounded-xl bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-700 disabled:opacity-50"
        >
          {loading
            ? mode ===
              "create"
              ? "Menyimpan..."
              : "Memperbarui..."
            : mode ===
              "create"
            ? "Simpan"
            : "Update"}
        </button>
      </div>
    </form>
  );
}