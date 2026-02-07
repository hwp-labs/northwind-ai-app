import { z } from "zod";
import { isValidIp } from "@/utils";
import { BaseEntity } from "@/lib/supabase/types";

export const TABLE = "visitors";

export interface VisitorEntity extends BaseEntity {
  ip_address?: string;
  pathname?: string;
  visited_on?: string; // Date only
  visits?: number;
  platform?: string;
  user_agent?: string;
  screen?: ScreenDto;
  geolocation?: IpWhoIsResponse;
}

export enum DeviceEnum {
  MOBILE = "mobile",
  TABLET = "tablet",
  DESKTOP = "desktop",
}

export interface ScreenDto {
  width: number;
  height: number;
  device: DeviceEnum;
}

export interface GeolocationDto {
  longitude: number;
  latitude: number;
  accuracy: number;
}

export type CreateVisitorDto = Required<
  Omit<VisitorEntity, keyof BaseEntity | "visited_on" | "visits">
>;

export type UpdateVisitorDto = Partial<
  Omit<
    VisitorEntity,
    keyof BaseEntity | "ip_address" | "pathname" | "visited_on"
  >
>;

export const visitorSchema = z.object({
  ip_address: z.string().refine(isValidIp, { message: "Invalid IP address" }),
  pathname: z.string(),
  visits: z.number().int().nonnegative().optional(),
  screen: z.object({
    width: z.number().int().positive(),
    height: z.number().int().positive(),
    device: z.enum(DeviceEnum),
  }),
  platform: z.string(),
  user_agent: z.string(),
  geolocation: z
    .object({
      latitude: z.number(),
      longitude: z.number(),
      // accuracy: z.number().nonnegative(),
    })
    .optional(),
});

export type VisitorSchema = z.infer<typeof visitorSchema>;
