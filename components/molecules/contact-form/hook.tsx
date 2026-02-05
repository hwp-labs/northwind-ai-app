import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
//
import { sleep } from "@/utils";
import { z, zodUtil } from "@/utils/zod-util";
import { PATH } from "@/constants/PATH";
import { MOCK } from "@/constants/MOCK";

export type FormSchema = z.infer<typeof formSchema>;

export function useContactForm() {
  const router = useRouter();
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues,
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (formData: FormSchema) => {
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

const formSchema = z
  .object({
    name: zodUtil.text({ msg: "Contact name is required" }),
    email: zodUtil.email(),
    telephone: zodUtil.tel(),
    businessName: zodUtil.text({ min: 3, msg: "Business name is required" }),
    industryId: z.string().nullable().optional(),
    industryOtherValue: z.string().nullable().optional(),
    location: z.string().min(2, "Location is required"),
    subscribed: z.boolean().optional(),
  })
  .refine((v) => v.industryId !== "other" || !!v.industryOtherValue, {
    message: "Please specify your industry",
    path: ["industryOtherValue"],
  });

const defaultValues: FormSchema = MOCK.demo.formData
  ? {
      name: "Emmanuel Tugbeh",
      email: "dehphantom@yahoo.com",
      telephone: "+2348169960927",
      businessName: "HWP Labs",
      location: "Sapele Road, Benin",
      subscribed: true,
    }
  : {
      name: "",
      email: "",
      telephone: "",
      businessName: "",
      location: "",
    };
