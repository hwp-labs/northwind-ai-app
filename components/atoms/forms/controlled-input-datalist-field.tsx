import {
  Field,
  FieldDescription,
  FieldError,
} from "@/components/shadcn/ui/field";
import { Input } from "@/components/shadcn/ui/input";
import { ThemedLabel } from "./themed-label";

interface Props {
  label?: string;
  name: string;
  options?: string[];
  placeholder?: string;
  required?: boolean;
  darkInvert?: boolean;
  description?: boolean;
  error?: boolean;
}

export const ControlledInputDatalistField = ({
  label,
  name,
  options = [],
  darkInvert,
  description,
  error,
  ...props
}: Props) => {
  const listName = `${name}-datalist`;
  //
  return (
    <Field>
      {label ? (
        <ThemedLabel
          name={name}
          required={props.required}
          darkInvert={darkInvert}
        >
          {label}
        </ThemedLabel>
      ) : null}
      <Input type="search" id={name} list={listName} {...props} />
      <datalist id={listName}>
        {options.map((item) => (
          <option key={item} value={item} />
        ))}
      </datalist>
      {description ? <FieldDescription>{description}</FieldDescription> : null}
      {error ? <FieldError>{error}</FieldError> : null}
    </Field>
  );
};
