import { create } from "zustand";

import { Category } from "../types";
import { categoryService } from "../services/category.service";

type CategoryPayload = {
  name: string;
  description: string | null;
};

type CategoryState = {
  categories: Category[];
  loading: boolean;

  fetchCategories: () => Promise<void>;

  createCategory: (
    payload: CategoryPayload
  ) => Promise<void>;

  updateCategory: (
    id: string,
    payload: CategoryPayload
  ) => Promise<void>;

  deleteCategory: (
    id: string
  ) => Promise<void>;
};

export const useCategoryStore =
create<CategoryState>((set, get) => ({

  categories: [],

  loading: false,

  fetchCategories: async () => {

    set({
      loading: true,
    });

    try {

      const categories =
        await categoryService.getCategories();

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

      const exists =
        get().categories.some(
          (category) =>
            category.name
              .trim()
              .toLowerCase() ===
            payload.name
              .trim()
              .toLowerCase()
        );

      if (exists) {
        throw new Error(
          "Nama kategori sudah digunakan."
        );
      }

      await categoryService.createCategory(
        payload
      );

      await get().fetchCategories();

    } finally {

      set({
        loading: false,
      });

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

      const exists =
        get().categories.some(
          (category) =>
            category.id !== id &&
            category.name
              .trim()
              .toLowerCase() ===
            payload.name
              .trim()
              .toLowerCase()
        );

      if (exists) {
        throw new Error(
          "Nama kategori sudah digunakan."
        );
      }

      await categoryService.updateCategory(
        id,
        payload
      );

      await get().fetchCategories();

    } finally {

      set({
        loading: false,
      });

    }

  },

  deleteCategory: async (
    id
  ) => {

    set({
      loading: true,
    });

    try {

      await categoryService.deleteCategory(
        id
      );

      await get().fetchCategories();

    } finally {

      set({
        loading: false,
      });

    }

  },

}));