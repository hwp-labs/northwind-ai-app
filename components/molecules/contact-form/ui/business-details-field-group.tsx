"use client";

import { useFormContext, useWatch } from "react-hook-form";
import clsx from "clsx";
//
import { FieldGroup } from "@/components/shadcn/ui/field";
import { ControlledFieldInputDatalist } from "@/components/atoms/forms/controlled-field-input-datalist";
import { ControlledFieldInput } from "@/components/atoms/forms/controlled-field-input";
import { ControlledFieldSelect } from "@/components/atoms/forms/controlled-field-select";
import { industrySeeder } from "@/lib/supabase/seeders/industry-seeder";
//
import { FormSchema } from "../hook";

interface Props {}

export const BusinessDetailsFieldGroup = ({}: Props) => {
  const { control } = useFormContext<FormSchema>();
  const watchedIndustryId = useWatch({ control, name: "industryId" });
  const showIndustryOtherValueField = watchedIndustryId === "other";
  const industryIdOptions = [
    ...industrySeeder.map((label, i) => ({
      label,
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
          showIndustryOtherValueField ? "grid gap-5 lg:grid-cols-2" : undefined
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
        {showIndustryOtherValueField && (
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
