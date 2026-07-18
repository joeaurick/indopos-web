import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

import { AppLayout } from "@/components/layout/AppLayout";

import { DashboardStats } from "@/components/dashboard/DashboardStats";
import { DashboardChart } from "@/components/dashboard/DashboardChart";
import { DashboardActivity } from "@/components/dashboard/DashboardActivity";
import { DashboardTopProducts } from "@/components/dashboard/DashboardTopProducts";
import { DashboardPaymentMethod } from "@/components/dashboard/DashboardPaymentMethod";
import { DashboardInventoryAlert } from "@/components/dashboard/DashboardInventoryAlert";
import { DashboardHeroStats } from "@/components/dashboard/DashboardHeroStats";

import { AppButton } from "@/components/ui";

import {
  CalendarDays,
  ShoppingCart,
  Package,
  CircleDollarSign,
} from "lucide-react";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <AppLayout>
      {/* HERO */}

      <div
        className="
          mb-8
          overflow-hidden
          rounded-[32px]
          border
          border-[var(--border)]
          bg-[var(--card)]
          p-8
          shadow-sm
        "
      >
        <div
  className="
    flex
    flex-col
    gap-8

    xl:flex-row
    xl:items-start
    xl:justify-between
  "
>

          {/* LEFT */}

          <div className="min-w-0 flex-1">

            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">

              <CalendarDays size={16} />

              {new Date().toLocaleDateString("id-ID", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}

            </div>

            <h1 className="mt-3 text-4xl font-bold tracking-tight">
              Dashboard
            </h1>

            <p className="mt-3 max-w-2xl text-[15px] text-[var(--text-muted)]">
              Selamat datang kembali di IndoPOS.
              Pantau seluruh aktivitas bisnis Anda secara real-time.
            </p>

            <DashboardHeroStats />

          </div>

          {/* RIGHT */}

<div
  className="
    flex
    w-full
    flex-col
    gap-3

    xl:w-[220px]
  "
>

  <AppButton className="h-12 w-full">
    + Penjualan Baru
  </AppButton>

  <AppButton
    variant="secondary"
    className="h-12 w-full"
  >
    + Cash In
  </AppButton>

  <AppButton
    variant="outline"
    className="h-12 w-full"
  >
    + Cash Out
  </AppButton>

</div>

        </div>

      </div>

      <DashboardStats />

<div className="mt-6 grid gap-6 xl:grid-cols-3">

  <div className="xl:col-span-2">
    <DashboardChart />
  </div>

  <DashboardActivity />

</div>

<div className="mt-6 grid gap-6 xl:grid-cols-2">

  <DashboardTopProducts />

  <DashboardInventoryAlert />

</div>

<div className="mt-6 grid gap-6 xl:grid-cols-2">

  <DashboardPaymentMethod />


</div>

    </AppLayout>
  );
}