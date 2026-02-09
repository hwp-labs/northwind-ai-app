"use client";

import { FormProvider } from "react-hook-form";
import { CheckIcon } from "lucide-react";
import clsx from "clsx";
//
import { Button } from "@/components/shadcn/ui/button";
import { Spinner } from "@/components/shadcn/ui/spinner";
import {
  Field,
  FieldDescription,
  FieldLegend,
  FieldSet,
} from "@/components/shadcn/ui/field";
import { ControlledFieldInput } from "@/components/atoms/forms/controlled-field-input";
import { ControlledFieldSwitch } from "@/components/atoms/forms/controlled-field-switch";
//
import { useLoginFormWidget } from "./hook";

export const LoginFormWidget = () => {
  const { form, submitting, success, setSuccess, onSubmit, onSubmitted } =
    useLoginFormWidget();
  //
  return (
    <>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          autoComplete="off"
          className="text-background rounded-t-4xl bg-white px-6 pt-10 pb-24 lg:rounded-2xl lg:px-10 lg:py-10"
        >
          <FieldLegend>Welcome back</FieldLegend>
          <FieldDescription className="text-muted">
            Enter your log in details below
          </FieldDescription>
          <FieldSet disabled={submitting} className="mt-8">
            <ControlledFieldInput
              control={form.control}
              label="Username"
              type="search"
              name="username"
              placeholder="Email or telephone"
            />
            <ControlledFieldInput
              control={form.control}
              label="Password"
              type="password"
              name="password"
              placeholder="**** ****"
            />
            <section className="mt-4 grid items-center gap-10 lg:grid-cols-2 lg:gap-0">
              <ControlledFieldSwitch
                control={form.control}
                name="remember_me"
                label="Keep me signed in"
              />
              <div className="_border flex flex-col justify-end lg:flex-row">
                <Button
                  type="submit"
                  className={clsx("h-10 lg:h-9", success && "bg-emerald-600")}
                >
                  {submitting ? <Spinner /> : success ? <CheckIcon /> : null}
                  {submitting ? "Signing in..." : success ? "Signed in!" : "Sign in"}
                </Button>
              </div>
            </section>
          </FieldSet>
        </form>
      </FormProvider>
    </>
  );
};
