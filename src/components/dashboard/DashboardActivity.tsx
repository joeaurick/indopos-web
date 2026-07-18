"use client";

import {
  ShoppingCart,
  Package,
 ArrowDownCircle,
  ArrowUpCircle,
  RefreshCcw,
} from "lucide-react";

import { AppCard } from "@/components/ui";
import { useDashboardStore } from "@/features/dashboard/store/dashboard-store";

function getActivityIcon(type: string) {
  switch (type) {
    case "SALE":
      return {
        icon: ShoppingCart,
        color: "bg-emerald-500",
      };

    case "PURCHASE":
      return {
        icon: Package,
        color: "bg-blue-500",
      };

    case "EXPENSE":
      return {
        icon: ArrowUpCircle,
        color: "bg-red-500",
      };

    case "CASH_IN":
      return {
        icon: ArrowDownCircle,
        color: "bg-cyan-500",
      };

    default:
      return {
        icon: RefreshCcw,
        color: "bg-slate-500",
      };
  }
}

export function DashboardActivity() {
  const activities = useDashboardStore(
    (state) => state.data.activities
  );

  return (
    <AppCard className="h-[460px] p-6">

      <div className="mb-8">

        <h2 className="text-2xl font-bold">
          Activity Timeline
        </h2>

        <p className="mt-1 text-sm text-[var(--text-muted)]">
          Aktivitas terakhir pada sistem.
        </p>

      </div>

      <div className="space-y-4 overflow-y-auto pr-2">

        {activities.length === 0 && (

          <div
            className="
              rounded-2xl
              border
              border-dashed
              border-[var(--border)]
              py-10
              text-center
            "
          >

            <Package
              size={36}
              className="mx-auto mb-4 text-slate-400"
            />

            <p className="font-medium">
              Belum ada aktivitas
            </p>

            <p className="mt-1 text-sm text-[var(--text-muted)]">
              Aktivitas sistem akan muncul di sini.
            </p>

          </div>

        )}

        {activities.map((item) => {

          const activity =
            getActivityIcon(item.reference_type);

          const Icon = activity.icon;

          return (

            <div
              key={item.id}
              className="
                flex
                items-start
                gap-4
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                p-4
                transition
                hover:shadow-md
              "
            >

              <div
                className={`
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  text-white
                  ${activity.color}
                `}
              >

                <Icon size={18} />

              </div>

              <div className="flex-1">

                <h4 className="font-semibold">
                  {item.reference_type}
                </h4>

                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  {item.note || "-"}
                </p>

                <span className="mt-2 block text-xs text-[var(--text-muted)]">
                  {new Date(
                    item.created_at
                  ).toLocaleString("id-ID")}
                </span>

              </div>

            </div>

          );

        })}

      </div>

    </AppCard>
  );
}