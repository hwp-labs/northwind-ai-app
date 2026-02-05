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
import { CustomFieldLabel } from "./custom-field-label";
import { CustomFieldError } from "./custom-field-error";
import { ControlledInput, OptionItem } from "@/types/common";

interface Props<T extends FieldValues> extends ControlledInput<T> {
  options?: OptionItem[];
}

export const ControlledFieldSelect = <T extends FieldValues>({
  control,
  name,
  options = [],
  placeholder,
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
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger
              id={name}
              className={darkInvert ? "text-gray-300" : undefined}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
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
          <CustomFieldError options={{ fieldState, description, darkInvert }} />
        </Field>
      )}
    />
  );
};
