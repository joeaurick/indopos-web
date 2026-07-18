import { create } from "zustand";

import { cashInService } from "../services/cash-in.service";

import {
  CashIn,
  CashInData,
  CashInFilter,
} from "../types";

type CashInState = {
  loading: boolean;

  filter: CashInFilter;

  data: CashInData;

  setFilter: (
    filter: Partial<CashInFilter>
  ) => void;

  fetchCashIn: () => Promise<void>;

  createCashIn: (
    data: {
      category_id: string | null;
      title: string;
      description?: string;
      amount: number;
      payment_method: string;
      cash_in_date: string;
      receipt_number?: string;
      attachment_url?: string;
    }
  ) => Promise<void>;

  updateCashIn: (
    id: string,
    data: Partial<CashIn>
  ) => Promise<void>;

  deleteCashIn: (
    id: string
  ) => Promise<void>;
};

const initialData: CashInData = {
  summary: {
    totalIncome: 0,

    totalTransaction: 0,

    todayIncome: 0,

    monthIncome: 0,
  },

  categories: [],

  cashIn: [],
};

export const useCashInStore =
  create<CashInState>((set, get) => ({
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

    fetchCashIn: async () => {
      set({
        loading: true,
      });

      try {
        const data =
          await cashInService.getCashIn(
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

    createCashIn: async (
      payload
    ) => {
      set({
        loading: true,
      });

      try {
        await cashInService.createCashIn(
          payload
        );

        const data =
          await cashInService.getCashIn(
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

    updateCashIn: async (
      id,
      payload
    ) => {
      set({
        loading: true,
      });

      try {
        await cashInService.updateCashIn(
          id,
          payload
        );

        const data =
          await cashInService.getCashIn(
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

    deleteCashIn: async (
      id
    ) => {
      set({
        loading: true,
      });

      try {
        await cashInService.deleteCashIn(
          id
        );

        const data =
          await cashInService.getCashIn(
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