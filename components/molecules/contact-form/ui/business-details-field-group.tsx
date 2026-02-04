import { FieldGroup } from "@/components/shadcn/ui/field";
import { ControlledInputDatalistField } from "@/components/atoms/forms/controlled-input-datalist-field";
import { ControlledInputField } from "@/components/atoms/forms/controlled-input-field";
import { ControlledSelectField } from "@/components/atoms/forms/controlled-select-field";
import { industrySeeder } from "@/lib/supabase/seeders/industry-seeder";

interface Props {}

export const BusinessDetailsFieldGroup = ({}: Props) => {
  const showOtherField = true;
  //
  return (
    <FieldGroup className="gap-5">
      <ControlledInputField
        label="Business Name"
        type="search"
        name="businessName"
        placeholder="Ex. VIVID Frozen Food & Drinks"
        required
        darkInvert
      />
      <div className="grid lg:grid-cols-2 gap-5">
        <ControlledSelectField
          label="Select Industry"
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
      </div>
      <ControlledInputDatalistField
        label="Business Location"
        name="location"
        options={["Apapa, Lagos"]}
        placeholder="Ex. Sapele Road, Benin"
        required
        darkInvert
      />
    </FieldGroup>
  );
};
