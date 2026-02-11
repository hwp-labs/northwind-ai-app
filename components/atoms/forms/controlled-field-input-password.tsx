import { useState } from "react";
import { Controller, FieldValues } from "react-hook-form";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { IconEyeCancel, IconEyeSpark } from "@tabler/icons-react";
//
import { Field } from "@/components/shadcn/ui/field";
import { Input } from "@/components/shadcn/ui/input";
import { InputSkeleton } from "./input-skeleton";
import { CustomFieldLabel } from "./custom-field-label";
import { CustomFieldError } from "./custom-field-error";
import { ControlledInput } from "@/types/common";

interface Props<T extends FieldValues> extends ControlledInput<T> {}

export const ControlledFieldInputPassword = <T extends FieldValues>({
  control,
  name,
  label = "Password",
  placeholder = "**** ****",
  required,
  disabled,
  loading,
  description,
}: Props<T>) => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword((prev) => !prev);
  //
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field className="gap-2">
          <CustomFieldLabel options={{ name, label, required }} />
          {loading ? (
            <InputSkeleton />
          ) : (
            <div className="relative">
              <Input
                id={name}
                type={showPassword ? "text" : "password"}
                placeholder={placeholder}
                disabled={disabled}
                {...field}
              />
              <i
                onClick={toggleShowPassword}
                title={showPassword ? "Hide" : "Show"}
                className="text-muted absolute top-2 right-3 cursor-pointer"
              >
                {showPassword ? (
                  <IconEyeCancel size={20} />
                ) : (
                  <IconEyeSpark size={20} />
                )}
              </i>
            </div>
          )}
          <CustomFieldError options={{ fieldState, description }} />
        </Field>
      )}
    />
  );
};
