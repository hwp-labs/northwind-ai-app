"use server";

import { supabase } from "@/lib/supabase/client";
import { ApiResponse } from "@/lib/supabase/types";
import { CreateVisitorDto, TABLE, VisitorEntity } from "../types";

type RequestDto = CreateVisitorDto;
type ResponseDto = VisitorEntity;

export async function createVisitorAction(
  body: RequestDto,
): Promise<ApiResponse<ResponseDto>> {
  const { data, error } = await supabase
    .from(TABLE)
    .insert(body)
    .select()
    .single();

  return { data, error: error?.message };
}
