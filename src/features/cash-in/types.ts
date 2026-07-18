export type CashInCategory = {
  id: string;

  name: string;

  color: string;

  icon: string;

  description?: string;

  is_active: boolean;
};

export type CashIn = {
  id: string;

  category_id: string | null;

  title: string;

  description?: string;

  amount: number;

  payment_method: string;

  receipt_number?: string;

  attachment_url?: string;

  cash_in_date: string;

  is_active: boolean;

  created_at: string;

  updated_at: string;

  category?: CashInCategory;
};

export type CashInSummary = {
  totalIncome: number;

  totalTransaction: number;

  todayIncome: number;

  monthIncome: number;
};

export type CashInFilter = {
  search: string;

  categoryId: string;

  startDate: string;

  endDate: string;
};

export type CashInData = {
  summary: CashInSummary;

  categories: CashInCategory[];

  cashIn: CashIn[];
};