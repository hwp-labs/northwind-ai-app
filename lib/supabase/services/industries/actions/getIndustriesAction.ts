"use server";

import { supabase } from "@/lib/supabase/client";
import { ApiResponse } from "@/lib/supabase/types";
import { TABLE, IndustryEntity } from "../types";

type RequestDto = null;
type ResponseDto = IndustryEntity[];

export async function getIndustriesAction(): Promise<ApiResponse<ResponseDto>> {
  const { data, error } = await supabase.from(TABLE).select("*");
  return { data, error: error?.message };
}
