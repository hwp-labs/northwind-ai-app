import { LoginSchema } from "@/lib/supabase/services/auth/types";
import { MOCK } from "@/constants/MOCK";

export const M = MOCK.login;

export const defaultValues: LoginSchema = M.formData
  ? {
      username: "dehphantom@yahoo.com",
      password: "+2348169960927",
      remember_me: true,
    }
  : {
      username: "",
      password: "",
    };

export const prepareLoginPayload = (formData: LoginSchema) => ({
    ...formData,
    subscribed: formData.remember_me || false,
  })
