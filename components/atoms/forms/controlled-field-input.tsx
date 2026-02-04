import { Controller, FieldValues } from "react-hook-form";
//
import { Field } from "@/components/shadcn/ui/field";
import { Input } from "@/components/shadcn/ui/input";
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
          <CustomFieldLabel options={{ ...props, name, darkInvert }} />
          <Input
            id={name}
            {...props}
            {...field}
            className={darkInvert ? "text-gray-300" : undefined}
          />
          <CustomFieldError options={{ fieldState, description }} />
        </Field>
      )}
    />
  );
};
