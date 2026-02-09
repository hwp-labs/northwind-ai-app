import { Controller, FieldValues } from "react-hook-form";
//
import { Field } from "@/components/shadcn/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import { ScrollArea } from "@/components/shadcn/ui/scroll-area";
import { InputSkeleton } from "./input-skeleton";
import { CustomFieldLabel } from "./custom-field-label";
import { CustomFieldError } from "./custom-field-error";
import { ControlledInput, OptionItem } from "@/types/common";

interface Props<T extends FieldValues> extends ControlledInput<T> {
  options?: OptionItem[];
}

export const ControlledFieldSelect = <T extends FieldValues>({
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
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field className="gap-2">
          <CustomFieldLabel options={{ name, label, required }} />
          <Select
            value={field.value}
            onValueChange={field.onChange}
            disabled={disabled}
          >
            {loading ? (
              <InputSkeleton />
            ) : (
              <SelectTrigger id={name}>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            )}
            <SelectContent>
              <ScrollArea className="h-[320px]">
                {options.map(({ value, label }) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </ScrollArea>
            </SelectContent>
          </Select>
          <CustomFieldError options={{ fieldState, description }} />
        </Field>
      )}
    />
  );
};
