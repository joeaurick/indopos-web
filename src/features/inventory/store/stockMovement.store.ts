import { create } from "zustand";

import {
  StockMovement,
  StockMovementPayload,
} from "../types";

import { stockMovementService } from "../services/stockMovement.service";

type StockMovementState = {
  movements: StockMovement[];

  loading: boolean;

  fetchMovements: () => Promise<void>;

  createMovement: (
    payload: StockMovementPayload
  ) => Promise<void>;
};

export const useStockMovementStore =
  create<StockMovementState>(
    (set, get) => ({
      movements: [],

      loading: false,

      fetchMovements:
        async () => {
          set({
            loading: true,
          });

          try {
            const movements =
              await stockMovementService.getMovements();

            set({
              movements,
            });
          } finally {
            set({
              loading: false,
            });
          }
        },

      createMovement:
        async (payload) => {
          await stockMovementService.createMovement(
            payload
          );

          await get().fetchMovements();
        },
    })
  );