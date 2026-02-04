import {
  Field,
  FieldDescription,
  FieldError,
} from "@/components/shadcn/ui/field";
import { Input } from "@/components/shadcn/ui/input";
import { ThemedLabel } from "./themed-label";

interface Props {
  label?: string;
  type?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  darkInvert?: boolean;
  description?: boolean;
  error?: boolean;
}

export const ControlledInputField = ({
  label,
  type = "text",
  name,
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
      <Input id={name} {...props} />
      {description ? <FieldDescription>{description}</FieldDescription> : null}
      {error ? <FieldError>{error}</FieldError> : null}
    </Field>
  );
};
