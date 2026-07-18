export type ExpenseCategory = {
  id: string;

  name: string;

  color: string;

  icon: string | null;

  is_active: boolean;

  created_at: string;

  updated_at: string;
};

export type ExpenseCategoryFormData = {
  name: string;

  color: string;

  icon: string | null;
};