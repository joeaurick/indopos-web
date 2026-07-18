import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  color?: "blue" | "green" | "orange" | "red";
};

export function Badge({
  children,
  color = "blue",
}: Props) {
  return (
    <span
      className={clsx(
        "inline-flex rounded-full px-3 py-1 text-xs font-semibold",

        color === "blue" &&
          "bg-blue-100 text-blue-700",

        color === "green" &&
          "bg-emerald-100 text-emerald-700",

        color === "orange" &&
          "bg-amber-100 text-amber-700",

        color === "red" &&
          "bg-rose-100 text-rose-700"
      )}
    >
      {children}
    </span>
  );
}