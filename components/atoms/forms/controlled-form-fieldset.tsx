"use client";

import { PropsWithChildren, SubmitEventHandler } from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";
//
import {
  Field,
  FieldDescription,
  FieldLegend,
  FieldSet,
} from "@/components/shadcn/ui/field";

interface Props<T extends FieldValues> extends PropsWithChildren {
  form: UseFormReturn<T>;
  onSubmit?: SubmitEventHandler<HTMLFormElement>;
  disabled?: boolean;
  h1?: string;
  p?: string;
}

export const ControlledFormFieldset = <T extends FieldValues>({
  children,
  form,
  onSubmit,
  disabled,
  h1,
  p,
}: Props<T>) => {
  return (
    <FormProvider {...form}>
      <form
        onSubmit={onSubmit}
        autoComplete="off"
        className="text-background bg-foreground rounded-t-4xl px-6 pt-10 pb-24 lg:rounded-2xl lg:px-10 lg:py-10"
      >
        {h1 ? <FieldLegend>{h1}</FieldLegend> : null}
        {p ? (
          <FieldDescription className="text-muted">{p}</FieldDescription>
        ) : null}
        <FieldSet disabled={disabled} className="mt-8">
          {children}
        </FieldSet>
      </form>
    </FormProvider>
  );
};
