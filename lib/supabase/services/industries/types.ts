import { z, zodUtil } from "@/utils/zod-util";
import { LookupEntity } from "../base/types";

export const TABLE = "industries";

export interface IndustryEntity extends LookupEntity {}

export const industrySchema = z.object({
  name: zodUtil.text({ min: 3, msg: "Industry name is required" }),
});

export type IndustrySchema = z.infer<typeof industrySchema>;
