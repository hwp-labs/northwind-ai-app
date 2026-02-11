import { MOCK } from "@/constants/MOCK";
import { ContactSchema } from "@/lib/supabase/services/contacts/types";
import mockData from "@/lib/supabase/services/contacts/data.json";

export const M = MOCK.getStarted;

export const defaultValues: ContactSchema = M.formData
  ? mockData
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
});
