import { ContactSchema } from "@/lib/supabase/services/contacts/types";
import { MOCK } from "@/constants/MOCK";

export const M = MOCK.getStarted;

export const defaultValues: ContactSchema = M.formData
  ? {
      name: "Emmanuel Tugbeh",
      email: "dehphantom@yahoo.com",
      telephone: "+2348169960927",
      business_name: "HWP Labs",
      industry_id: "other", // 38
      industry_other: "AI Automation",
      location: "Sapele Road, Benin",
      state_id: "12",
      subscribed: true,
    }
  : {
      name: "",
      email: "",
      telephone: "",
      business_name: "",
      location: "",
      state_id: "",
      industry_id: "",
    };

export const prepareCreateContactPayload = (formData: ContactSchema) => ({
    ...formData,
    industry_id:
      formData.industry_id === "other" ? null : Number(formData.industry_id),
    industry_other: formData.industry_other || null,
    state_id: Number(formData.state_id),
    subscribed: formData.subscribed || false,
  })
