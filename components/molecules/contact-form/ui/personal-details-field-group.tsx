import { FieldGroup } from "@/components/shadcn/ui/field";
import { ControlledFieldInput } from "@/components/atoms/forms/controlled-field-input";

interface Props {}

export const PersonalDetailsFieldGroup = ({}: Props) => {
  return (
    <FieldGroup className="gap-5">
      <ControlledFieldInput
        label="Contact Name"
        type="search"
        name="name"
        placeholder="Full name"
        required
        darkInvert
      />
      <div className="grid gap-5 lg:grid-cols-2">
        <ControlledFieldInput
          label="Contact Email"
          type="email"
          name="email"
          placeholder="Ex. person@dmain.com"
          required
          darkInvert
        />
        <ControlledFieldInput
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
