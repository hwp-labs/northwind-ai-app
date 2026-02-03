import {
  Field,
  FieldGroup,
  FieldDescription,
  FieldSet,
  FieldLegend,
  FieldSeparator,
} from "../shadcn/ui/field";
import { Button } from "../shadcn/ui/button";
import { Spinner } from "../shadcn/ui/spinner";
import { ControlledInputField } from "../atoms/forms/controlled-input-field";
import { ControlledSelectField } from "../atoms/forms/controlled-select-field";
import { ControlledInputDatalistField } from "../atoms/forms/controlled-input-datalist-field";
import { ControlledSwitchField } from "../atoms/forms/controlled-switch-field";
import { industrySeeder } from "@/lib/supabase/seeders/industry-seeder";

export const ContactForm = () => {
  return (
    <form className="bg-foreground text-background space-y-6 rounded-2xl p-10">
      <FieldSet disabled={false} className="dark:invert">
        <FieldLegend className="dark:invert">Personal Details</FieldLegend>
        <FieldDescription>
          All transactions are secure and encrypted
        </FieldDescription>
        <FieldGroup>
          <ControlledInputField
            label="Contact Name"
            type="search"
            name="name"
            placeholder="Full name"
            darkInvert
          />
          <ControlledInputField
            label="Email"
            type="email"
            name="email"
            placeholder="Ex. person@dmain.com"
            darkInvert
          />
          <ControlledInputField
            label="Telephone"
            type="tel"
            name="telephone"
            placeholder="+234"
            darkInvert
          />
        </FieldGroup>
        <FieldSeparator />
        <FieldGroup>
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
          <ControlledInputField
            label="Other"
            type="search"
            name="industryOtherValue"
            placeholder="Please specify"
            darkInvert
          />
          <ControlledInputDatalistField
            label="Location"
            name="location"
            options={["Apapa, Lagos"]}
            placeholder="Ex. Sapele Road, Benin"
            darkInvert
          />
        </FieldGroup>
        <ControlledSwitchField
          name="subscribed"
          label="Subscribe to email updates"
          darkInvert
        />
        <Field orientation="horizontal" className="flex-center-end gap-4">
          <Button type="submit">
            <Spinner />
            Send
          </Button>
        </Field>
      </FieldSet>
    </form>
  );
};
