"use client";

import {
  SubmitButtonGrid,
  SubmitButton,
} from "@/components/atoms/submit-button";
import { ControlledFieldInput } from "@/components/atoms/forms/controlled-field-input";
import { ControlledFieldInputPassword } from "@/components/atoms/forms/controlled-field-input-password";
import { ControlledFieldSwitch } from "@/components/atoms/forms/controlled-field-switch";
//
import { useLoginFormWidget } from "./hook";
import { ControlledFormFieldset } from "@/components/atoms/forms/controlled-form-fieldset";

export const LoginFormWidget = () => {
  const { form, submitting, success, setSuccess, onSubmit, onSubmitted } =
    useLoginFormWidget();
  //
  return (
    <ControlledFormFieldset
      form={form}
      onSubmit={form.handleSubmit(onSubmit)}
      disabled={submitting}
      h1="Welcome back"
      p="Enter your log in details below"
    >
      <ControlledFieldInput
        control={form.control}
        label="Username"
        type="search"
        name="username"
        placeholder="Email or telephone"
      />
      <ControlledFieldInputPassword control={form.control} name="password" />
      <SubmitButtonGrid>
        <ControlledFieldSwitch
          control={form.control}
          name="remember_me"
          label="Keep me signed in"
        />
        <SubmitButton
          submitting={submitting}
          submittingText="Sign in..."
          success={success}
          successText="Signed in!"
        >
          Sign in
        </SubmitButton>
      </SubmitButtonGrid>
    </ControlledFormFieldset>
  );
};
