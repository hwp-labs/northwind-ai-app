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
        required
        darkInvert
      />
      <div className="grid lg:grid-cols-2 gap-5">
        <ControlledInputField
          label="Contact Email"
          type="email"
          name="email"
          placeholder="Ex. person@dmain.com"
          required
          darkInvert
        />
        <ControlledInputField
          label="Contact Telephone"
          type="tel"
          name="telephone"
          placeholder="+234"
          required
          darkInvert
        />
      </div>
    </FieldGroup>
  );
};
