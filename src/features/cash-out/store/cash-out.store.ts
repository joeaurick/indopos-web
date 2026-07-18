import { create } from "zustand";

import { cashOutService } from "../services/cash-out.service";

import {
  CashOutData,
  CashOutFilter,
  Expense,
} from "../types";

type CashOutState = {
  loading: boolean;

  filter: CashOutFilter;

  data: CashOutData;

  setFilter: (
    filter: Partial<CashOutFilter>
  ) => void;

  fetchCashOut: () => Promise<void>;

  uploadReceipt: (
    file: File
  ) => Promise<string>;

  deleteReceipt: (
    url: string
  ) => Promise<void>;

  createExpense: (
    data: {
      category_id: string | null;
      title: string;
      description?: string;
      amount: number;
      payment_method: string;
      expense_date: string;
      receipt_number?: string;
      attachment_url?: string | null;
    }
  ) => Promise<void>;

  updateExpense: (
    id: string,
    data: Partial<Expense>
  ) => Promise<void>;

  deleteExpense: (
    id: string
  ) => Promise<void>;
};

const initialData: CashOutData = {
  summary: {
    totalExpense: 0,
    totalTransaction: 0,
    todayExpense: 0,
    monthExpense: 0,
  },

  categories: [],

  expenses: [],
};

export const useCashOutStore =
  create<CashOutState>((set, get) => ({
    loading: false,

    filter: {
      search: "",
      categoryId: "",
      startDate: "",
      endDate: "",
    },

    data: initialData,

    setFilter: (filter) =>
      set({
        filter: {
          ...get().filter,
          ...filter,
        },
      }),

    fetchCashOut: async () => {
      set({
        loading: true,
      });

      try {
        const data =
          await cashOutService.getCashOut(
            get().filter
          );

        set({
          data,
          loading: false,
        });
      } catch (error) {
        console.error(error);

        set({
          loading: false,
        });
      }
    },

    uploadReceipt: async (
      file
    ) => {
      return await cashOutService.uploadReceipt(
        file
      );
    },

    deleteReceipt: async (
      url
    ) => {
      await cashOutService.deleteReceipt(
        url
      );
    },

    createExpense: async (
      payload
    ) => {
      set({
        loading: true,
      });

      try {
        await cashOutService.createExpense(
          payload
        );

        const data =
          await cashOutService.getCashOut(
            get().filter
          );

        set({
          data,
          loading: false,
        });
      } catch (error) {
        set({
          loading: false,
        });

        throw error;
      }
    },

    updateExpense: async (
      id,
      payload
    ) => {
      set({
        loading: true,
      });

      try {
        await cashOutService.updateExpense(
          id,
          payload
        );

        const data =
          await cashOutService.getCashOut(
            get().filter
          );

        set({
          data,
          loading: false,
        });
      } catch (error) {
        set({
          loading: false,
        });

        throw error;
      }
    },

    deleteExpense: async (
      id
    ) => {
      set({
        loading: true,
      });

      try {
        await cashOutService.deleteExpense(
          id
        );

        const data =
          await cashOutService.getCashOut(
            get().filter
          );

        set({
          data,
          loading: false,
        });
      } catch (error) {
        set({
          loading: false,
        });

        throw error;
      }
    },
  }));