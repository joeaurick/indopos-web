import { ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
};

export function PageHeader({
  title,
  subtitle,
  action,
}: Props) {
  return (
    <div
      className="
        mb-8
        flex
        flex-col
        gap-4

        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      <div>
        <h1
          className="
            text-3xl
            font-bold
            text-slate-900
          "
        >
          {title}
        </h1>

        {subtitle && (
          <p className="mt-2 text-slate-500">
            {subtitle}
          </p>
        )}
      </div>

      {action}
    </div>
  );
}