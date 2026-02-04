import { FieldGroup } from "@/components/shadcn/ui/field";
import { ControlledInputDatalistField } from "@/components/atoms/forms/controlled-input-datalist-field";
import { ControlledInputField } from "@/components/atoms/forms/controlled-input-field";
import { ControlledSelectField } from "@/components/atoms/forms/controlled-select-field";
import { ControlledSwitchField } from "@/components/atoms/forms/controlled-switch-field";
import { industrySeeder } from "@/lib/supabase/seeders/industry-seeder";

interface Props {}

export const BusinessDetailsFieldGroup = ({}: Props) => {
  const showOtherField = false;
  //
  return (
    <FieldGroup className="gap-5">
      <ControlledInputField
        label="Business Name"
        type="search"
        name="businessName"
        placeholder="Ex. VIVID Frozen Food & Drinks"
        darkInvert
      />
      <ControlledSelectField
        label="Industry"
        name="industryId"
        options={[
          ...industrySeeder.map((label, i) => ({
            label,
            value: String(i + 1),
          })),
          { label: "Other", value: "other" },
        ]}
        placeholder="Ex. Food & Drinks"
        darkInvert
      />
      {showOtherField && (
        <ControlledInputField
          label="Other"
          type="search"
          name="industryOtherValue"
          placeholder="Please specify"
          darkInvert
        />
      )}
      <ControlledInputDatalistField
        label="Location"
        name="location"
        options={["Apapa, Lagos"]}
        placeholder="Ex. Sapele Road, Benin"
        darkInvert
      />
      <ControlledSwitchField
        name="subscribed"
        label="Subscribe to email updates"
        darkInvert
      />
    </FieldGroup>
  );
};
