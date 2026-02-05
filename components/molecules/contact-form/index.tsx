"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CheckIcon } from "lucide-react";
import { useForm } from "react-hook-form";
//
import {
  Field,
  FieldDescription,
  FieldLegend,
  FieldSet,
} from "@/components/shadcn/ui/field";
import { Button } from "@/components/shadcn/ui/button";
import { Spinner } from "@/components/shadcn/ui/spinner";
import { sleep } from "@/utils";
import { APP } from "@/constants/APP";
import { PATH } from "@/constants/PATH";
//
import { PersonalDetailsFieldGroup } from "./ui/personal-details-field-group";
import { BusinessDetailsFieldGroup } from "./ui/business-details-field-group";
import { ControlledFieldSwitch } from "@/components/atoms/forms/controlled-field-switch";
import { ContactModel } from "@/lib/supabase/models/contact";

export const ContactForm = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm<ContactModel>();

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmitAsync = async () => {
    setSubmitting(true);
    await sleep();
    setSubmitting(false);
    setSuccess(true);
    await sleep(1.5);
    setSuccess(false);
    router.replace(PATH.home);
  };

  const onSubmit = async (data: any) => {
    console.log("🚀 ~ onSubmit ~ data:", data);
  };
  //
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-foreground text-background rounded-t-4xl px-6 pt-10 pb-24 lg:rounded-2xl lg:px-10 lg:py-10"
    >
      <FieldLegend>Get started with {APP.name}</FieldLegend>
      <FieldDescription className="lg:text-gray-500">
        {/* Required fields are labeled with asterisk (*) */}
        Enter your details below, and we'll reach out shortly to discuss how{" "}
        {APP.name} can help automate your business. Cool?
      </FieldDescription>
      <FieldSet disabled={false} className="mt-8 dark:invert">
        <PersonalDetailsFieldGroup control={control} />
        <BusinessDetailsFieldGroup control={control} />
        <section className="mt-4 grid gap-10 lg:grid-cols-2 lg:gap-0 items-center">
          <ControlledFieldSwitch
            control={control}
            name="subscribed"
            label="Subscribe for email updates"
            // description="Required fields are labeled with asterisk"
            darkInvert
          />
          <div className="flex flex-col justify-end _border lg:flex-row">
            <Button
              type="button"
              size="lg"
              onClick={handleSubmitAsync}
              className={
                success ? "bg-emerald-600 text-white dark:invert" : undefined
              }
            >
              {submitting ? <Spinner /> : success ? <CheckIcon /> : null}
              {submitting ? "Going..." : success ? "Gone!" : "Let's go"}
            </Button>
          </div>
        </section>
      </FieldSet>
    </form>
  );
};
