import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/shadcn/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select";
import { OptionType } from "@/types/common";
import { ThemedLabel } from "./themed-label";

interface Props {
  label?: string;
  name: string;
  defaultValue?: string;
  options?: OptionType[];
  placeholder?: string;
  required?: boolean;
  darkInvert?: boolean;
  description?: boolean;
  error?: boolean;
}

export const ControlledSelectField = ({
  label,
  name,
  defaultValue = "",
  options = [],
  placeholder,
  darkInvert,
  description,
  error,
  ...props
}: Props) => {
  return (
    <Field className="gap-2">
      {label ? (
        <ThemedLabel
          name={name}
          required={props.required}
          darkInvert={darkInvert}
        >
          {label}
        </ThemedLabel>
      ) : null}
      <Select defaultValue={defaultValue}>
        <SelectTrigger id={name}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map(({ value, label }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {description ? <FieldDescription>{description}</FieldDescription> : null}
      {error ? <FieldError>{error}</FieldError> : null}
    </Field>
  );
};
