import { PropsWithChildren } from "react";
import clsx from "clsx";
// 
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
      className={clsx("lg:font-normal font-medium", darkInvert && "dark:invert")}
    >
      {children} {required && <span className="text-rose-600">*</span>}
    </FieldLabel>
  );
};
