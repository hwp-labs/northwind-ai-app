"use client";

import { Controller, FieldValues } from "react-hook-form";
//
import { Spinner } from "@/components/shadcn/ui/spinner";
import { Switch } from "@/components/shadcn/ui/switch";
import { CustomFieldLabel } from "./custom-field-label";
import { CustomFieldError } from "./custom-field-error";
import { ControlledInput } from "@/types/common";

interface Props<T extends FieldValues> extends Omit<
  ControlledInput<T>,
  "placeholder"
> {}

export const ControlledFieldSwitch = <T extends FieldValues>({
  control,
  name,
  label,
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
        <div className="_border flex gap-2.5">
          {loading ? (
            <Spinner />
          ) : (
            <Switch
              id={name}
              checked={field.value}
              onCheckedChange={field.onChange}
              disabled={disabled}
            />
          )}
          <div className="grid gap-0">
            <CustomFieldLabel options={{ name, label, required }} />
            <CustomFieldError options={{ fieldState, description }} />
          </div>
        </div>
      )}
    />
  );
};
