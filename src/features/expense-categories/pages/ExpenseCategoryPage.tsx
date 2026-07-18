"use client";

import { useState } from "react";

import { Plus } from "lucide-react";

import { PageHeader } from "@/components/app/page-header/PageHeader";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";

import {
  ExpenseCategory,
} from "../types";

import { ExpenseCategoryForm } from "../components/ExpenseCategoryForm";
import { ExpenseCategoryTable } from "../components/ExpenseCategoryTable";
import { DeleteExpenseCategoryDialog } from "../components/DeleteExpenseCategoryDialog";

export function ExpenseCategoryPage() {
  const [openForm, setOpenForm] =
    useState(false);

  const [openDelete, setOpenDelete] =
    useState(false);

  const [selectedCategory, setSelectedCategory] =
    useState<ExpenseCategory | null>(
      null
    );

  function handleCreate() {
    setSelectedCategory(null);
    setOpenForm(true);
  }

  function handleEdit(
    category: ExpenseCategory
  ) {
    setSelectedCategory(category);
    setOpenForm(true);
  }

  function handleDelete(
    category: ExpenseCategory
  ) {
    setSelectedCategory(category);
    setOpenDelete(true);
  }

  function closeForm() {
    setOpenForm(false);
    setSelectedCategory(null);
  }

  function closeDelete() {
    setOpenDelete(false);
    setSelectedCategory(null);
  }

  return (
    <>
      <PageHeader
        title="Expense Categories"
        subtitle="Kelola kategori pengeluaran usaha."
      />

      <div className="mb-6 flex justify-end">
        <Button onClick={handleCreate}>
          <Plus
            size={18}
            className="mr-2"
          />
          Tambah Kategori
        </Button>
      </div>

      <ExpenseCategoryTable
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <Modal
        open={openForm}
        onClose={closeForm}
        title={
          selectedCategory
            ? "Edit Kategori"
            : "Tambah Kategori"
        }
      >
        <ExpenseCategoryForm
          mode={
            selectedCategory
              ? "edit"
              : "create"
          }
          category={
            selectedCategory
          }
          onSuccess={closeForm}
        />
      </Modal>

      <DeleteExpenseCategoryDialog
        open={openDelete}
        category={selectedCategory}
        onClose={closeDelete}
      />
    </>
  );
}