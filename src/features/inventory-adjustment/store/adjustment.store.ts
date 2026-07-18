import { create } from "zustand";

import {
  Adjustment,
  AdjustmentPayload,
} from "../types";

import { adjustmentService } from "../services/adjustment.service";

type AdjustmentState = {
  adjustments: Adjustment[];

  loading: boolean;

  fetchAdjustments: () => Promise<void>;

  createAdjustment: (
    payload: AdjustmentPayload
  ) => Promise<void>;
};

export const useAdjustmentStore =
  create<AdjustmentState>(
    (set, get) => ({
      adjustments: [],

      loading: false,

      fetchAdjustments:
        async () => {
          set({
            loading: true,
          });

          try {
            const adjustments =
              await adjustmentService.getAdjustments();

            set({
              adjustments,
            });
          } finally {
            set({
              loading: false,
            });
          }
        },

      createAdjustment:
        async (payload) => {
          set({
            loading: true,
          });

          try {
            await adjustmentService.createAdjustment(
              payload
            );

            await get().fetchAdjustments();
          } finally {
            set({
              loading: false,
            });
          }
        },
    })
  );