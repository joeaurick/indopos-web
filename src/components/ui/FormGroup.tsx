import { ReactNode } from "react";

import { Label } from "./Label";

type Props = {
  label: string;

  children: ReactNode;

  required?: boolean;
};

export function FormGroup({
  label,
  children,
  required,
}: Props) {
  return (
    <div className="space-y-2">

      <Label>

        {label}

        {required && (
          <span className="ml-1 text-red-500">
            *
          </span>
        )}

      </Label>

      {children}

    </div>
  );
}