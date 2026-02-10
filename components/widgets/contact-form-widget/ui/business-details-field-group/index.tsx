"use client";

import { FieldGroup } from "@/components/shadcn/ui/field";
import { ControlledFieldInputDatalist } from "@/components/atoms/forms/controlled-field-input-datalist";
import { ControlledFieldInput } from "@/components/atoms/forms/controlled-field-input";
import { ControlledFieldSelect } from "@/components/atoms/forms/controlled-field-select";
import { IndustryLookup, StateLookup } from "@/constants/LOOKUP";
//
import { useBusinessDetailsFieldGroup } from "./hook";

interface Props {}

export const BusinessDetailsFieldGroup = ({}: Props) => {
  const {
    control,
    showIndustryOtherField,
    fetchingIndustries,
    fetchingLocations,
    industryIdOptions,
    locationOptions,
  } = useBusinessDetailsFieldGroup();

  //
  return (
    <FieldGroup className="gap-5">
      <ControlledFieldInput
        control={control}
        label="Business Name"
        type="search"
        name="business_name"
        placeholder="Ex. VIVID Frozen Food & Drinks"
        required
      />
      <div className="grid gap-5 lg:grid-cols-2">
        <ControlledFieldInputDatalist
          control={control}
          label="Business Location"
          name="location"
          placeholder="Ex. Sapele Road, Benin"
          options={locationOptions}
          required
          disabled={fetchingLocations}
          loading={fetchingLocations}
        />
        <ControlledFieldSelect
          control={control}
          label="Select State"
          name="state_id"
          options={StateLookup}
          placeholder="Ex. Edo"
          required
        />
      </div>
      <div
        className={
          showIndustryOtherField ? "grid gap-5 lg:grid-cols-2" : undefined
        }
      >
        <ControlledFieldSelect
          control={control}
          label="Select Industry"
          name="industry_id"
          placeholder="Ex. Food & Drinks"
          options={[...industryIdOptions, ...IndustryLookup]}
          disabled={fetchingIndustries}
          loading={fetchingIndustries}
          required
        />
        {showIndustryOtherField && (
          <ControlledFieldInput
            control={control}
            label="Other"
            type="search"
            name="industry_other"
            placeholder="Please specify"
          />
        )}
      </div>
    </FieldGroup>
  );
};
