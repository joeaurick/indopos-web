export type FinanceFilterType =
  | "all"
  | "today"
  | "week"
  | "month"
  | "custom";

export type FinanceFilter = {
  type: FinanceFilterType;

  startDate?: string;

  endDate?: string;
};

export type FinanceSummary = {
  totalSales: number;

  totalCashIn: number;

  totalIncome: number;

  totalPurchases: number;

  totalExpenses: number;

  totalExpense: number;

  grossProfit: number;

  netProfit: number;

  totalTransactions: number;

  totalPurchaseOrders: number;

  totalCashOut: number;

  totalCashInTransactions: number;
};

export type FinanceHistoryItem = {
  id: string;

  type:
    | "SALE"
    | "PURCHASE"
    | "EXPENSE"
    | "CASH_IN";

  invoice: string;

  total: number;

  status: string;

  created_at: string;
};

export type FinanceChartItem = {
  date: string;

  income: number;

  purchase: number;

  cashOut: number;

  expense: number;

  grossProfit: number;

  netProfit: number;
};

export type FinanceData = {
  summary: FinanceSummary;

  history: FinanceHistoryItem[];

  chart: FinanceChartItem[];
};