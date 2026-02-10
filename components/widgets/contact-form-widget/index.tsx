"use client";

import { FormProvider } from "react-hook-form";
//
import {
  Field,
  FieldDescription,
  FieldLegend,
  FieldSet,
} from "@/components/shadcn/ui/field";
import {
  SubmitButtonGrid,
  SubmitButton,
} from "@/components/atoms/submit-button";
import { ControlledFormFieldset } from "@/components/atoms/forms/controlled-form-fieldset";
import { ControlledFieldSwitch } from "@/components/atoms/forms/controlled-field-switch";
import { APP } from "@/constants/APP";
//
import { PersonalDetailsFieldGroup } from "./ui/personal-details-field-group";
import { BusinessDetailsFieldGroup } from "./ui/business-details-field-group";
import { SuccessModal } from "./ui/success-modal";
import { useContactFormWidget } from "./hook";

export const ContactFormWidget = () => {
  const { form, submitting, success, setSuccess, onSubmit, onSubmitted } =
    useContactFormWidget();
  //
  return (
    <>
      <ControlledFormFieldset
        form={form}
        onSubmit={form.handleSubmit(onSubmit)}
        disabled={submitting}
        h1={`Get started with ${APP.name}`}
        p="Required fields are labelled with asterisk *"
      >
        <PersonalDetailsFieldGroup />
        <BusinessDetailsFieldGroup />
        <SubmitButtonGrid>
          <ControlledFieldSwitch
            control={form.control}
            name="subscribed"
            label="Subscribe for email updates"
          />
          <SubmitButton
            submitting={submitting}
            submittingText="Going..."
            success={success}
            successText="Gone!"
          >
            Let's go
          </SubmitButton>
        </SubmitButtonGrid>
      </ControlledFormFieldset>
      <SuccessModal open={success} onClose={onSubmitted} />
    </>
  );
};
