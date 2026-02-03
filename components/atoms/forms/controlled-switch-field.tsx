import { Field } from "@/components/shadcn/ui/field";
import { Switch } from "@/components/shadcn/ui/switch";
import { ThemedLabel } from "./themed-label";

interface Props {
  label: string;
  name: string;
  required?: boolean;
  darkInvert?: boolean;
}

export const ControlledSwitchField = ({ label, name, required, darkInvert }: Props) => {
  return (
    <Field orientation="horizontal">
      <Switch id={name} />
      <ThemedLabel
        name={name}
        required={required}
        darkInvert={darkInvert}
      >
        {label}
      </ThemedLabel>
    </Field>
  );
};
