"use server";

import { supabase } from "@/lib/supabase/client";
import { ApiResponse } from "@/lib/supabase/types";
import { TABLE, IndustryEntity } from "../types";

type RequestDto = never;
type ResponseDto = IndustryEntity[];

export async function getIndustriesAction(): Promise<ApiResponse<ResponseDto>> {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("name");

  return { data, error: error?.message };
}
