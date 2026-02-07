"use server";

import { supabase } from "@/lib/supabase/client";
import { ApiResponse } from "@/lib/supabase/types";
import { TABLE, VisitorEntity } from "../types";
import { CUR_DATE } from "@/constants/LOCALE";

type RequestDto = Required<Pick<VisitorEntity, "ip_address" | "pathname">>;
type ResponseDto = Required<Pick<VisitorEntity, "id" | "visits">>;

export async function getVisitorByIpAddressPathnameTodayAction({
  ip_address,
  pathname,
}: RequestDto): Promise<ApiResponse<ResponseDto>> {
  const { data, error } = await supabase
    .from(TABLE)
    .select("id, visits")
    .eq("ip_address", ip_address)
    .eq("pathname", pathname)
    .gte("visited_on", CUR_DATE)
    .maybeSingle();

  return { data, error: error?.message };
}
