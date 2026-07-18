import { create } from "zustand";

import { Product } from "../types";
import { productService } from "../services/product.service";

type ProductInput = {
  name: string;
  sku: string;
  price: number;
  stock: number;
  category_id: string | null;
};

type ProductState = {
  products: Product[];
  loading: boolean;

  search: string;
  selectedCategory: string | null;

  fetchProducts: () => Promise<void>;

  createProduct: (
    data: ProductInput
  ) => Promise<void>;

  updateProduct: (
    id: string,
    data: ProductInput
  ) => Promise<void>;

  deleteProduct: (
    id: string
  ) => Promise<void>;

  setSearch: (
    value: string
  ) => void;

  setSelectedCategory: (
    id: string | null
  ) => void;
};

export const useProductStore =
  create<ProductState>((set, get) => ({

    products: [],

    loading: false,

    search: "",

    selectedCategory: null,

    setSearch: (value) => {
      set({
        search: value,
      });
    },

    setSelectedCategory: (id) => {
      set({
        selectedCategory: id,
      });
    },

    fetchProducts: async () => {

      set({
        loading: true,
      });

      try {

        const products =
          await productService.getProducts();

        set({
          products,
          loading: false,
        });

      } catch (error) {

        console.error(error);

        set({
          loading: false,
        });

      }

    },

    createProduct: async (data) => {

      set({
        loading: true,
      });

      try {

        await productService.createProduct(
          data
        );

        await get().fetchProducts();

      } finally {

        set({
          loading: false,
        });

      }

    },

    updateProduct: async (
      id,
      data
    ) => {

      set({
        loading: true,
      });

      try {

        await productService.updateProduct(
          id,
          data
        );

        await get().fetchProducts();

      } finally {

        set({
          loading: false,
        });

      }

    },

    deleteProduct: async (
      id
    ) => {

      set({
        loading: true,
      });

      try {

        await productService.deleteProduct(
          id
        );

        await get().fetchProducts();

      } finally {

        set({
          loading: false,
        });

      }

    },

  }));