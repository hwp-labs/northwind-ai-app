import { FieldGroup } from "@/components/shadcn/ui/field";
import { ControlledInputField } from "@/components/atoms/forms/controlled-input-field";

interface Props {}

export const PersonalDetailsFieldGroup = ({}: Props) => {
  return (
    <FieldGroup className="gap-5">
      <ControlledInputField
        label="Contact Name"
        type="search"
        name="name"
        placeholder="Full name"
        darkInvert
      />
      <ControlledInputField
        label="Email"
        type="email"
        name="email"
        placeholder="Ex. person@dmain.com"
        darkInvert
      />
      <ControlledInputField
        label="Telephone"
        type="tel"
        name="telephone"
        placeholder="+234"
        darkInvert
      />
    </FieldGroup>
  );
};
