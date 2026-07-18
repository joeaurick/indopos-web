export type Customer = {
  id: string;

  name: string;

  phone: string;

  email: string;

  address: string;

  is_active: boolean;

  created_at: string;
};

export type CustomerPayload = {
  name: string;

  phone: string;

  email: string;

  address: string;
};