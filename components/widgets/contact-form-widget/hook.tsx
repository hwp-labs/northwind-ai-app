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
//
import { M, defaultValues, prepareCreateContactPayload } from "./utils";

export function useContactFormWidget() {
  const router = useRouter();
  const form = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues,
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmitted = async () => {
    setSuccess(false);
    M.router ? null : router.replace(PATH.home);
  };

  const onSubmit = async (formData: ContactSchema) => {
    // console.log("🚀 ~ onSubmit ~ formData:", formData);
    setSubmitting(true);
    if (M.action) {
      await sleep();
    } else {
      const payload = prepareCreateContactPayload(formData);
      const { data, error } = await createContactAction(payload);

      if (error) {
        toast.warning(error, {
          style: { background: "oklch(0.577 0.245 27.325)" },
        });
        setSubmitting(false);
        return;
      }
    }

    setSubmitting(false);
    setSuccess(true);
  };

  return {
    form,
    submitting,
    success,
    setSuccess,
    onSubmit,
    onSubmitted,
  };
}
