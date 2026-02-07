import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//
import { contactSchema, ContactSchema } from "@/lib/supabase/services/contacts/types";
import { sleep } from "@/utils";
import { PATH } from "@/constants/PATH";
import { MOCK } from "@/constants/MOCK";

const defaultValues: ContactSchema = MOCK.getStarted.formData
  ? {
      name: "Emmanuel Tugbeh",
      email: "dehphantom@yahoo.com",
      telephone: "+2348169960927",
      businessName: "HWP Labs",
      industryId: "38",
      location: "Sapele Road, Benin",
      stateId: "12",
      subscribed: true,
    }
  : {
      name: "",
      email: "",
      telephone: "",
      businessName: "",
      location: "",
      stateId: "",
    };

export function useContactFormWidget() {
  const router = useRouter();
  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues,
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (formData: ContactSchema) => {
    console.log("🚀 ~ onSubmit ~ formData:", formData);
    return;
    setSubmitting(true);
    await sleep();
    setSubmitting(false);
    setSuccess(true);
    await sleep(1.5);
    setSuccess(false);
    // router.replace(PATH.home);
  };

  return { form, onSubmit, submitting, success };
}


