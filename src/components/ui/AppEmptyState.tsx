import { PackageOpen } from "lucide-react";

type Props = {
  title: string;
  description: string;
};

export function AppEmptyState({
  title,
  description,
}: Props) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-dashed
        border-[var(--border)]
        py-20
        text-center
      "
    >
      <PackageOpen
        size={52}
        className="mb-5 text-slate-400"
      />

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm text-[var(--text-muted)]">
        {description}
      </p>
    </div>
  );
}