import { create } from "zustand";

import { reportService } from "../services/report.service";

import {
  ReportData,
  ReportFilter,
} from "../types";

type ReportState = {
  loading: boolean;

  filter: ReportFilter;

  data: ReportData;

  fetchReports: (
    filter?: ReportFilter
  ) => Promise<void>;
};

const initialData: ReportData = {
  summary: {
    totalSales: 0,

    totalCashIn: 0,

    totalIncome: 0,

    totalPurchases: 0,

    totalExpenses: 0,

    totalExpense: 0,

    grossProfit: 0,

    netProfit: 0,

    totalTransactions: 0,
  },

  history: [],

  products: [],
};

export const useReportStore =
  create<ReportState>((set) => ({
    loading: false,

    filter: {
      type: "all",
    },

    data: initialData,

    fetchReports: async (
      filter = {
        type: "all",
      }
    ) => {
      set({
        loading: true,
        filter,
      });

      try {
        const data =
          await reportService.getReports(
            filter
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
  }));