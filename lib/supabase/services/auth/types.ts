import { z, zodUtil } from "@/utils/zod-util";

export const loginSchema = z.object({
  username: zodUtil.text({ msg: "Username is required" }),
  password: zodUtil.strongPassword(),
  remember_me: z.boolean().optional(),
});

export type LoginSchema = z.infer<typeof loginSchema>;
