"use client";

import { useState } from "react";
import { CheckIcon, ChevronLeftIcon } from "lucide-react";
//
import { Field, FieldSet } from "@/components/shadcn/ui/field";
import { Button } from "@/components/shadcn/ui/button";
import { Spinner } from "@/components/shadcn/ui/spinner";
import { PromptTerminal } from "../prompt-terminal";
import { sleep } from "@/utils";
//
import { PersonalDetailsFieldGroup } from "./ui/personal-details-field-group";
import { BusinessDetailsFieldGroup } from "./ui/business-details-field-group";

export const ContactForm = () => {
  const [stepper, setStepper] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleSubmit = async () => {
    setSubmitting(true);
    await sleep();
    setSubmitting(false);
    setSuccess(true);
    await sleep(1.5);
    setStepper(0);
    setSuccess(false);
  };
  //
  return (
    <form className="bg-foreground text-background w-full max-w-lg rounded-2xl px-0 pt-10 pb-8">
      <PromptTerminal>
        Enter your {stepper ? "business" : "personal"} details
      </PromptTerminal>
      <FieldSet disabled={false} className="mt-6 px-6 lg:px-16 dark:invert">
        {stepper ? (
          <BusinessDetailsFieldGroup />
        ) : (
          <PersonalDetailsFieldGroup />
        )}
        <Field orientation="horizontal" className="flex-center-between gap-4 mt-4 lg:mt-0">
          {stepper ? (
            <Button
              type="button"
              onClick={() => setStepper(0)}
              variant="link"
              className="px-0"
            >
              <ChevronLeftIcon />
              Back
            </Button>
          ) : (
            <div />
          )}
          {stepper ? (
            <Button
              type="button"
              onClick={handleSubmit}
              className={
                success ? "bg-emerald-600 text-white dark:invert" : undefined
              }
            >
              {submitting && <Spinner />}
              {success && <CheckIcon />}
              Save
            </Button>
          ) : (
            <Button type="button" onClick={() => setStepper(1)}>
              Continue
            </Button>
          )}
        </Field>
      </FieldSet>
    </form>
  );
};