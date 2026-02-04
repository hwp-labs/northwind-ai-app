import { Controller, FieldValues } from "react-hook-form";
//
import { Field } from "@/components/shadcn/ui/field";
import { Switch } from "@/components/shadcn/ui/switch";
import { CustomFieldLabel } from "./custom-field-label";
import { CustomFieldError } from "./custom-field-error";
import { ControlledInput } from "@/types/common";

interface Props<T extends FieldValues> extends Omit<
  ControlledInput<T>,
  "placeholder" | "description"
> {}

export const ControlledFieldSwitch = <T extends FieldValues>({
  control,
  name,
  ...props
}: Props<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field orientation="horizontal">
          <Switch
            id={name}
            checked={field.value}
            onCheckedChange={field.onChange}
          />
          <div className="grid gap-2">
            <CustomFieldLabel options={{ ...props, name }} />
            <CustomFieldError options={{ fieldState }} />
          </div>
        </Field>
      )}
    />
  );
};
