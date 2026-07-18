import { create } from "zustand";

import {
  Supplier,
  SupplierPayload,
} from "../types";

import { supplierService } from "../services/supplier.service";

type SupplierState = {
  suppliers: Supplier[];

  loading: boolean;

  fetchSuppliers: () => Promise<void>;

  createSupplier: (
    payload: SupplierPayload
  ) => Promise<void>;

  updateSupplier: (
    id: string,
    payload: SupplierPayload
  ) => Promise<void>;

  deleteSupplier: (
    id: string
  ) => Promise<void>;
};

export const useSupplierStore =
create<SupplierState>((set, get) => ({

  suppliers: [],

  loading: false,

  fetchSuppliers: async () => {

    set({
      loading: true,
    });

    try {

      const suppliers =
        await supplierService.getSuppliers();

      set({
        suppliers,
        loading: false,
      });

    } catch (error) {

      console.error(error);

      set({
        loading: false,
      });

    }

  },

  createSupplier: async (
    payload
  ) => {

    set({
      loading: true,
    });

    try {

      await supplierService.createSupplier(
        payload
      );

      await get().fetchSuppliers();

    } finally {

      set({
        loading: false,
      });

    }

  },

  updateSupplier: async (
    id,
    payload
  ) => {

    set({
      loading: true,
    });

    try {

      await supplierService.updateSupplier(
        id,
        payload
      );

      await get().fetchSuppliers();

    } finally {

      set({
        loading: false,
      });

    }

  },

  deleteSupplier: async (
    id
  ) => {

    set({
      loading: true,
    });

    try {

      await supplierService.deleteSupplier(
        id
      );

      await get().fetchSuppliers();

    } finally {

      set({
        loading: false,
      });

    }

  },

}));