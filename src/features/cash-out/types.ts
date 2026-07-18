export type ExpenseCategory = {
  id: string;

  name: string;

  color: string;

  icon: string | null;

  is_active: boolean;
};

export type Expense = {
  id: string;

  category_id: string | null;

  title: string;

  description: string | null;

  amount: number;

  payment_method: string;

  expense_date: string;

  receipt_number: string | null;

  attachment_url: string | null;

  created_by: string | null;

  is_active: boolean;

  created_at: string;

  updated_at: string;

  category?: ExpenseCategory;
};

export type CashOutSummary = {
  totalExpense: number;

  totalTransaction: number;

  todayExpense: number;

  monthExpense: number;
};

export type CashOutFilter = {
  search: string;

  categoryId: string;

  startDate: string;

  endDate: string;
};

export type CashOutData = {
  summary: CashOutSummary;

  categories: ExpenseCategory[];

  expenses: Expense[];
};