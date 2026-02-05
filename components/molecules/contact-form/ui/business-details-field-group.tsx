import { Control, FieldValues } from "react-hook-form";
//
import { FieldGroup } from "@/components/shadcn/ui/field";
import { ControlledFieldInputDatalist } from "@/components/atoms/forms/controlled-field-input-datalist";
import { ControlledFieldInput } from "@/components/atoms/forms/controlled-field-input";
import { ControlledFieldSelect } from "@/components/atoms/forms/controlled-field-select";
import { industrySeeder } from "@/lib/supabase/seeders/industry-seeder";
import { ContactModel } from "@/lib/supabase/models/contact";

interface Props {
  control: Control<ContactModel>;
}

export const BusinessDetailsFieldGroup = ({ control }: Props) => {
  const showOtherField = true;
  //
  return (
    <FieldGroup className="gap-5">
      <ControlledFieldInput
        control={control}
        label="Business Name"
        type="search"
        name="businessName"
        placeholder="Ex. VIVID Frozen Food & Drinks"
        required
        darkInvert
      />
      <div className="grid gap-5 lg:grid-cols-2">
        <ControlledFieldSelect
          control={control}
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
            control={control}
            label="Other"
            type="search"
            name="industryOtherValue"
            placeholder="Please specify"
            darkInvert
          />
        )}
      </div>
      <ControlledFieldInputDatalist
        control={control}
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
