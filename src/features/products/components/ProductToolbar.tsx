"use client";

import { Plus } from "lucide-react";

import { PageHeader } from "@/components/common/PageHeader";
import { SearchToolbar } from "@/components/common/SearchToolbar";
import { PrimaryButton } from "@/components/common/PrimaryButton";

import { CategoryFilter } from "./CategoryFilter";

type Props = {
  search: string;
  onSearch: (value: string) => void;

  selectedCategory: string | null;
  onSelectCategory: (
    id: string | null
  ) => void;

  onAdd: () => void;
};

export function ProductToolbar({
  search,
  onSearch,
  selectedCategory,
  onSelectCategory,
  onAdd,
}: Props) {
  return (
    <div className="space-y-6">

      <PageHeader
        title="Products"
        description="Kelola semua produk toko."
        action={
          <PrimaryButton onClick={onAdd}>
            <span className="flex items-center gap-2">
              <Plus size={18} />
              Tambah Produk
            </span>
          </PrimaryButton>
        }
      />

      <SearchToolbar
        value={search}
        onChange={onSearch}
        placeholder=""
        rightSlot={
          <CategoryFilter
            value={selectedCategory}
            onChange={onSelectCategory}
          />
        }
      />

    </div>
  );
}