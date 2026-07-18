import { create } from "zustand";

import { salesService } from "../services/sales.service";

export type Sale = {
  id: string;

  invoice: string;

  customer_id: string | null;

  subtotal: number;

  discount: number;

  tax: number;

  total: number;

  payment_method: string;

  payment_amount: number;

  change_amount: number;

  status: string;

  note: string | null;

  is_active: boolean;

  created_at: string;
};

type SalesState = {
  sales: Sale[];

  loading: boolean;

  search: string;

  fetchSales: () => Promise<void>;

  setSearch: (
    value: string
  ) => void;

  refresh: () => Promise<void>;
};

export const useSalesStore =
  create<SalesState>((set, get) => ({
    sales: [],

    loading: false,

    search: "",

    setSearch: (value) => {
      set({
        search: value,
      });
    },

    fetchSales: async () => {
      set({
        loading: true,
      });

      try {
        const sales =
          await salesService.getSales();

        set({
          sales,
        });
      } catch (error) {
        console.error(error);
      } finally {
        set({
          loading: false,
        });
      }
    },

    refresh: async () => {
      await get().fetchSales();
    },
  }));