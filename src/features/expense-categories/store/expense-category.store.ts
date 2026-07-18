import { create } from "zustand";

import { expenseCategoryService } from "../services/expense-category.service";

import {
  ExpenseCategory,
  ExpenseCategoryFormData,
} from "../types";

type ExpenseCategoryState = {
  loading: boolean;

  categories: ExpenseCategory[];

  fetchCategories: () => Promise<void>;

  createCategory: (
    data: ExpenseCategoryFormData
  ) => Promise<void>;

  updateCategory: (
    id: string,
    data: ExpenseCategoryFormData
  ) => Promise<void>;

  deleteCategory: (
    id: string
  ) => Promise<void>;
};

export const useExpenseCategoryStore =
  create<ExpenseCategoryState>(
    (set) => ({
      loading: false,

      categories: [],

      fetchCategories: async () => {
        set({
          loading: true,
        });

        try {
          const categories =
            await expenseCategoryService.getCategories();

          set({
            categories,
            loading: false,
          });
        } catch (error) {
          console.error(error);

          set({
            loading: false,
          });
        }
      },

      createCategory: async (
        payload
      ) => {
        set({
          loading: true,
        });

        try {
          await expenseCategoryService.createCategory(
            payload
          );

          const categories =
            await expenseCategoryService.getCategories();

          set({
            categories,
            loading: false,
          });
        } catch (error) {
          set({
            loading: false,
          });

          throw error;
        }
      },

      updateCategory: async (
        id,
        payload
      ) => {
        set({
          loading: true,
        });

        try {
          await expenseCategoryService.updateCategory(
            id,
            payload
          );

          const categories =
            await expenseCategoryService.getCategories();

          set({
            categories,
            loading: false,
          });
        } catch (error) {
          set({
            loading: false,
          });

          throw error;
        }
      },

      deleteCategory: async (
        id
      ) => {
        set({
          loading: true,
        });

        try {
          await expenseCategoryService.deleteCategory(
            id
          );

          const categories =
            await expenseCategoryService.getCategories();

          set({
            categories,
            loading: false,
          });
        } catch (error) {
          set({
            loading: false,
          });

          throw error;
        }
      },
    })
  );