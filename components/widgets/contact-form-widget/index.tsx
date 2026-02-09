"use client";

import { FormProvider } from "react-hook-form";
//
import {
  Field,
  FieldDescription,
  FieldLegend,
  FieldSet,
} from "@/components/shadcn/ui/field";
import { ControlledFieldSwitch } from "@/components/atoms/forms/controlled-field-switch";
import { APP } from "@/constants/APP";
//
import { PersonalDetailsFieldGroup } from "./ui/personal-details-field-group";
import { BusinessDetailsFieldGroup } from "./ui/business-details-field-group";
import { SubmitButton } from "./ui/submit-button";
import { SuccessModal } from "./ui/success-modal";
import { useContactFormWidget } from "./hook";

export const ContactFormWidget = () => {
  const { form, submitting, success, setSuccess, onSubmit, onSubmitted } =
    useContactFormWidget();
  //
  return (
    <>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          autoComplete="off"
          className="bg-white text-background rounded-t-4xl px-6 pt-10 pb-24 lg:rounded-2xl lg:px-10 lg:py-10"
        >
          <FieldLegend>Get started with {APP.name}</FieldLegend>
          <FieldDescription className="text-muted">
            We'll reach out shortly to discuss how {APP.name} can help automate
            your business. Cool?
          </FieldDescription>
          <FieldSet disabled={submitting} className="mt-8">
            <PersonalDetailsFieldGroup />
            <BusinessDetailsFieldGroup />
            <section className="mt-4 grid items-center gap-10 lg:grid-cols-2 lg:gap-0">
              <ControlledFieldSwitch
                control={form.control}
                name="subscribed"
                label="Subscribe for email updates"
              />
              <SubmitButton options={{ submitting, success }} />
            </section>
          </FieldSet>
        </form>
      </FormProvider>
      <SuccessModal open={success} onClose={onSubmitted} />
    </>
  );
};
