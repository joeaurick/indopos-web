export type DashboardSummary = {
  todaySales: number;

  todayCashIn: number;

  todayIncome: number;

  todayExpense: number;

  todayProfit: number;

  todayTransactions: number;

  totalProducts: number;

  lowStock: number;

  totalCustomers: number;

  totalSuppliers: number;

  cashBalance: number;
};

export type RecentSale = {
  id: string;

  type?: string;

  invoice: string;

  total: number;

  created_at: string;
};

export type TopProduct = {
  id: string;

  name: string;

  sold: number;

  revenue: number;
};

export type LowStockProduct = {
  id: string;

  name: string;

  stock: number;

  minimum_stock: number;
};

export type DailySale = {
  date: string;

  income: number;

  expense: number;

  profit: number;
};

export type DashboardActivity = {
  id: string;

  reference_type: string;

  reference_id?: string;

  movement_type?: string;

  note: string | null;

  created_at: string;
};

export type CashFlow = {
  cashIn: number;
  cashOut: number;
  balance: number;
};

export type PaymentMethod = {
  method: string;

  total: number;

  count: number;
};

export type DashboardData = {
  summary: DashboardSummary;

  recentSales: RecentSale[];

  recentTransactions: RecentSale[];

  topProducts: TopProduct[];

  dailySales: DailySale[];

  activities: DashboardActivity[];

  lowStockProducts: LowStockProduct[];

  cashFlow: CashFlow;

  paymentMethods: PaymentMethod[];
};

