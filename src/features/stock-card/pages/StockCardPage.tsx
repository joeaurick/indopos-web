"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { useStockMovementStore } from "@/features/inventory/store/stockMovement.store";

import { StockCardToolbar } from "../components/StockCardToolbar";
import { StockCardTable } from "../components/StockCardTable";

export function StockCardPage() {
  const [search, setSearch] =
    useState("");

  const movements =
    useStockMovementStore(
      (state) => state.movements
    );

  const loading =
    useStockMovementStore(
      (state) => state.loading
    );

  const fetchMovements =
    useStockMovementStore(
      (state) => state.fetchMovements
    );

  useEffect(() => {
    fetchMovements();
  }, [fetchMovements]);

  const filtered =
    useMemo(() => {
      const keyword =
        search
          .trim()
          .toLowerCase();

      return movements.filter(
        (item) =>
          item.product_name
            .toLowerCase()
            .includes(keyword)
      );
    }, [
      movements,
      search,
    ]);

  return (
    <div className="space-y-6">

      <StockCardToolbar
        search={search}
        onSearch={setSearch}
      />

      <StockCardTable
        data={filtered}
        loading={loading}
      />

    </div>
  );
}