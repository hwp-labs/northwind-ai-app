"use client";

import { useFormContext } from "react-hook-form";
//
import { FieldGroup } from "@/components/shadcn/ui/field";
import { ControlledFieldInput } from "@/components/atoms/forms/controlled-field-input";
// 
import { ContactSchema } from "@/lib/supabase/services/contacts/types";

interface Props {}

export const PersonalDetailsFieldGroup = ({}: Props) => {
  const { control } = useFormContext<ContactSchema>();
  //
  return (
    <FieldGroup className="gap-5">
      <ControlledFieldInput
        control={control}
        label="Contact Name"
        type="search"
        name="name"
        placeholder="Full name"
        required
        darkInvert
      />
      <div className="grid gap-5 lg:grid-cols-2">
        <ControlledFieldInput
          control={control}
          label="Contact Email"
          type="email"
          name="email"
          placeholder="Ex. person@domain.com"
          required
          darkInvert
        />
        <ControlledFieldInput
          control={control}
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
