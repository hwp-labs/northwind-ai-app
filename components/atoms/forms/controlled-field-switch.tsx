"use client";

import { Controller, FieldValues } from "react-hook-form";
//
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
  description,
  ...props
}: Props<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <div className="_border flex gap-2.5">
          <Switch
            id={name}
            checked={field.value}
            onCheckedChange={field.onChange}
          />
          <div className="grid gap-0">
            <CustomFieldLabel options={{ ...props, name }} />
            <CustomFieldError
              options={{
                fieldState,
                description,
                darkInvert: props.darkInvert,
              }}
            />
          </div>
        </div>
      )}
    />
  );
};
