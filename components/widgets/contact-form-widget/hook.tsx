import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
//
import { createContactAction } from "@/lib/supabase/services/contacts/actions/createContactAction";
import { sleep } from "@/utils";
import {
  contactSchema,
  ContactSchema,
} from "@/lib/supabase/services/contacts/types";
import { PATH } from "@/constants/PATH";
import { MOCK } from "@/constants/MOCK";

export function useContactFormWidget() {
  const router = useRouter();
  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues,
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const onSubmit = async (formData: ContactSchema) => {
    // console.log("🚀 ~ onSubmit ~ formData:", formData);
    setSubmitting(true);
    const { data, error } = await createContactAction({
      ...formData,
      industry_id:
        formData.industry_id === "other" ? null : Number(formData.industry_id),
      industry_other: formData.industry_other || null,
      state_id: Number(formData.state_id),
      subscribed: formData.subscribed || false,
    });

    if (error) {
      toast.error(error);
      setSubmitting(false);
      return;
    }

    setSubmitting(false);
    setSuccess(true);
    await sleep(1.5);
    setSuccess(false);

    MOCK.getStarted.router
      ? toast.success("Contact created!")
      : router.replace(PATH.home);
  };

  return { form, onSubmit, submitting, success };
}

const defaultValues: ContactSchema = MOCK.getStarted.formData
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
    };
