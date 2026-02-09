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
  label,
  type = "text",
  placeholder,
  required,
  disabled,
  loading,
  description,
}: Props<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field className="gap-2">
          <CustomFieldLabel options={{ name, label, required }} />
          {loading ? (
            <InputSkeleton />
          ) : (
            <Input
              id={name}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              {...field}
            />
          )}
          <CustomFieldError options={{ fieldState, description }} />
        </Field>
      )}
    />
  );
};
