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
  label,
  placeholder,
  options = [],
  required,
  disabled,
  loading,
  description,
}: Props<T>) => {
  const listName = `${name}-datalist`;
  //
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
              type="search"
              placeholder={placeholder}
              disabled={disabled}
              list={listName}
              {...field}
            />
          )}
          <datalist id={listName}>
            {options.map((item) => (
              <option key={item} value={item} />
            ))}
          </datalist>
          <CustomFieldError options={{ fieldState, description }} />
        </Field>
      )}
    />
  );
};
