"use server";

import { supabase } from "@/lib/supabase/client";
import { ApiResponse } from "@/lib/supabase/types";
import { TABLE, UpdateVisitorDto, VisitorEntity } from "../types";
import { PrimaryKeyType } from "../../base/types";

type RequestDto = { id: PrimaryKeyType; body: UpdateVisitorDto };
type ResponseDto = VisitorEntity;

export async function updateVisitorAction({
  id,
  body,
}: RequestDto): Promise<ApiResponse<ResponseDto>> {
  const { data, error } = await supabase
    .from(TABLE)
    .update(body)
    .eq("id", id)
    .select()
    .single();

  return { data, error: error?.message };
}
