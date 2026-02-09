import { Controller, FieldValues } from "react-hook-form";
//
import { Field } from "@/components/shadcn/ui/field";
import { Input } from "@/components/shadcn/ui/input";
import { InputSkeleton } from "./input-skeleton";
import { CustomFieldLabel } from "./custom-field-label";
import { CustomFieldError } from "./custom-field-error";
import { ControlledInput } from "@/types/common";

interface Props<T extends FieldValues> extends ControlledInput<T> {
  options?: string[];
}

export const ControlledFieldInputDatalist = <T extends FieldValues>({
  control,
  name,
  options = [],
  darkInvert,
  required,
  loading,
  description,
  ...props
}: Props<T>) => {
  const listName = `${name}-datalist`;
  //
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
              type="search"
              list={listName}
              {...props}
              {...field}
              className={darkInvert ? "text-sm text-gray-300" : undefined}
            />
          )}
          <datalist id={listName}>
            {options.map((item) => (
              <option key={item} value={item} />
            ))}
          </datalist>
          <CustomFieldError options={{ fieldState, description, darkInvert }} />
        </Field>
      )}
    />
  );
};
