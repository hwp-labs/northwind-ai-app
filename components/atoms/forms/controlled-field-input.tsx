import { Controller, FieldValues } from "react-hook-form";
//
import { Field } from "@/components/shadcn/ui/field";
import { Input } from "@/components/shadcn/ui/input";
import { InputSkeleton } from "./input-skeleton";
import { CustomFieldLabel } from "./custom-field-label";
import { CustomFieldError } from "./custom-field-error";
import { ControlledInput } from "@/types/common";

interface Props<T extends FieldValues> extends ControlledInput<T> {
  type?: string;
}

export const ControlledFieldInput = <T extends FieldValues>({
  control,
  name,
  type = "text",
  required,
  loading,
  darkInvert,
  description,
  ...props
}: Props<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field className="gap-2">
          <CustomFieldLabel options={{ ...props, name, required, darkInvert }} />
          {loading ? (
            <InputSkeleton />
          ) : (
            <Input
              id={name}
              {...props}
              {...field}
              className={darkInvert ? "text-sm text-gray-900" : "text-sm"}
            />
          )}
          <CustomFieldError options={{ fieldState, description, darkInvert }} />
        </Field>
      )}
    />
  );
};
