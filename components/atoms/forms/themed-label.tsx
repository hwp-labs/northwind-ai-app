import { PropsWithChildren } from "react";
import { FieldLabel } from "@/components/shadcn/ui/field";

interface Props extends PropsWithChildren {
  name: string;
  required?: boolean;
  darkInvert?: boolean;
}

export const ThemedLabel = ({
  children,
  name,
  required,
  darkInvert,
}: Props) => {
  return (
    <FieldLabel
      htmlFor={name}
      className={darkInvert ? "dark:invert" : undefined}
    >
      {children} {required && <span className="text-rose-600">*</span>}
    </FieldLabel>
  );
};
