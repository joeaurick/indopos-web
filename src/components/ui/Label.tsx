type Props = {
  children: React.ReactNode;
};

export function Label({
  children,
}: Props) {
  return (
    <label
      className="
        mb-2
        block
        text-sm
        font-semibold
        text-slate-700
      "
    >
      {children}
    </label>
  );
}