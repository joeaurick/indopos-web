export type Supplier = {
  id: string;

  name: string;

  contact_person: string;

  phone: string;

  email: string;

  address: string;

  is_active: boolean;

  created_at: string;
};

export type SupplierPayload = {
  name: string;

  contact_person: string;

  phone: string;

  email: string;

  address: string;
};