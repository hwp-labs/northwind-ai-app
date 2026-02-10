import { LoginSchema } from "@/lib/supabase/services/auth/types";
import { MOCK } from "@/constants/MOCK";

export const M = MOCK.login;

export const defaultValues: LoginSchema = M.formData
  ? {
      email: process.env.NEXT_PUBLIC_SUPABASE_AUTH_USER!,
      password: process.env.NEXT_PUBLIC_SUPABASE_AUTH_PASSWORD!,
      remember_me: true,
    }
  : {
      email: "",
      password: "",
    };

export const prepareLoginPayload = (formData: LoginSchema) => ({
    ...formData,
    remember_me: formData.remember_me || false,
  })
