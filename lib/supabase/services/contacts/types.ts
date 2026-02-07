import { z, zodUtil } from "@/utils/zod-util";
import { BaseEntity, PrimaryKeyType } from "../../types";

export const TABLE = "contacts";

export interface ContactEntity extends BaseEntity {
  name?: string;
  email: string;
  telephone?: string;
  //
  businessName?: string;
  industryId?: PrimaryKeyType | null;
  industryOther?: string | null;
  location?: string;
  stateId?: PrimaryKeyType;
  //
  subscribed?: boolean;
}

export const contactSchema = z
  .object({
    name: zodUtil.text({ msg: "Contact name is required" }),
    email: zodUtil.email(),
    telephone: zodUtil.tel(),
    businessName: zodUtil.text({ min: 3, msg: "Business name is required" }),
    industryId: z.string().nullable().optional(),
    industryOther: z.string().nullable().optional(),
    location: z.string().min(2, "Location is required"),
    stateId: z.string(),
    subscribed: z.boolean().optional(),
  })
  .refine((v) => v.industryId !== "other" || !!v.industryOther, {
    message: "Please specify your industry",
    path: ["industryOther"],
  });

export type ContactSchema = z.infer<typeof contactSchema>;
