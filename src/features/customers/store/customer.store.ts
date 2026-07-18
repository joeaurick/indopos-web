import { create } from "zustand";

import {
  Customer,
  CustomerPayload,
} from "../types";

import { customerService } from "../services/customer.service";

type CustomerState = {
  customers: Customer[];

  loading: boolean;

  fetchCustomers: () => Promise<void>;

  createCustomer: (
    payload: CustomerPayload
  ) => Promise<void>;

  updateCustomer: (
    id: string,
    payload: CustomerPayload
  ) => Promise<void>;

  deleteCustomer: (
    id: string
  ) => Promise<void>;
};

export const useCustomerStore =
create<CustomerState>((set, get) => ({

  customers: [],

  loading: false,

  fetchCustomers: async () => {

    set({
      loading: true,
    });

    try {

      const customers =
        await customerService.getCustomers();

      set({
        customers,
        loading: false,
      });

    } catch (error) {

      console.error(error);

      set({
        loading: false,
      });

    }

  },

  createCustomer: async (
    payload
  ) => {

    set({
      loading: true,
    });

    try {

      await customerService.createCustomer(
        payload
      );

      await get().fetchCustomers();

    } finally {

      set({
        loading: false,
      });

    }

  },

  updateCustomer: async (
    id,
    payload
  ) => {

    set({
      loading: true,
    });

    try {

      await customerService.updateCustomer(
        id,
        payload
      );

      await get().fetchCustomers();

    } finally {

      set({
        loading: false,
      });

    }

  },

  deleteCustomer: async (
    id
  ) => {

    set({
      loading: true,
    });

    try {

      await customerService.deleteCustomer(
        id
      );

      await get().fetchCustomers();

    } finally {

      set({
        loading: false,
      });

    }

  },

}));