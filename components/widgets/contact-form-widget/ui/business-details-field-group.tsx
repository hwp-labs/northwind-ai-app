"use client";

import { useFormContext, useWatch } from "react-hook-form";
//
import { FieldGroup } from "@/components/shadcn/ui/field";
import { ControlledFieldInputDatalist } from "@/components/atoms/forms/controlled-field-input-datalist";
import { ControlledFieldInput } from "@/components/atoms/forms/controlled-field-input";
import { ControlledFieldSelect } from "@/components/atoms/forms/controlled-field-select";
import { StateLookup } from "@/constants/LOOKUP";
import industrySeeder from "@/lib/supabase/services/industries/seeder.json";
//
import { ContactSchema } from "@/lib/supabase/services/contacts/types";

interface Props {}

export const BusinessDetailsFieldGroup = ({}: Props) => {
  const { control } = useFormContext<ContactSchema>();
  const watchedIndustryId = useWatch({ control, name: "industryId" });
  const showIndustryOtherField = watchedIndustryId === "other";
  const industryIdOptions = [
    ...industrySeeder.map(({ name }, i) => ({
      label: name,
      value: String(i + 1),
    })),
    { label: "Other", value: "other" },
  ];
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
      <div
        className={
          showIndustryOtherField ? "grid gap-5 lg:grid-cols-2" : undefined
        }
      >
        <ControlledFieldSelect
          control={control}
          label="Select Industry"
          name="industryId"
          options={industryIdOptions}
          placeholder="Ex. Food & Drinks"
          darkInvert
        />
        {showIndustryOtherField && (
          <ControlledFieldInput
            control={control}
            label="Other"
            type="search"
            name="industryOther"
            placeholder="Please specify"
            darkInvert
          />
        )}
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <ControlledFieldInputDatalist
          control={control}
          label="Business Location"
          name="location"
          placeholder="Ex. Sapele Road, Benin"
          required
          darkInvert
        />
        <ControlledFieldSelect
          control={control}
          label="Select State"
          name="stateId"
          options={StateLookup}
          placeholder="Ex. Edo"
          required
          darkInvert
        />
      </div>
    </FieldGroup>
  );
};
