"use server";

import { supabase } from "@/lib/supabase/client";
import { ApiResponse } from "@/lib/supabase/types";
import { TABLE, VisitorEntity } from "../types";

type RequestDto = never;
type ResponseDto = VisitorEntity[];

export async function getVisitorsAction(): Promise<ApiResponse<ResponseDto>> {
  const { data, error } = await supabase.from(TABLE).select("*");
  return { data, error: error?.message };
}
