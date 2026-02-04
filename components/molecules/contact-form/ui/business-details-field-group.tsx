import { FieldGroup } from "@/components/shadcn/ui/field";
import { ControlledFieldInputDatalist } from "@/components/atoms/forms/controlled-field-input-datalist";
import { ControlledFieldInput } from "@/components/atoms/forms/controlled-field-input";
import { ControlledFieldSelect } from "@/components/atoms/forms/controlled-field-select";
import { industrySeeder } from "@/lib/supabase/seeders/industry-seeder";

interface Props {}

export const BusinessDetailsFieldGroup = ({}: Props) => {
  const showOtherField = true;
  //
  return (
    <FieldGroup className="gap-5">
      <ControlledFieldInput
        label="Business Name"
        type="search"
        name="businessName"
        placeholder="Ex. VIVID Frozen Food & Drinks"
        required
        darkInvert
      />
      <div className="grid gap-5 lg:grid-cols-2">
        <ControlledFieldSelect
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
          <ControlledFieldInput
            label="Other"
            type="search"
            name="industryOtherValue"
            placeholder="Please specify"
            darkInvert
          />
        )}
      </div>
      <ControlledFieldInputDatalist
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
