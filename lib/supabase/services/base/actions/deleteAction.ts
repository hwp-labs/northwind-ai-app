"use server";

import { supabase } from "@/lib/supabase/client";
import { ApiResponse } from "@/lib/supabase/types";
import { PrimaryKeyType } from "../types";

type RequestDto = { table: string; id: PrimaryKeyType };
type ResponseDto = number;

export async function deleteAction({
  table,
  id,
}: RequestDto): Promise<ApiResponse<ResponseDto>> {
  const { count, error } = await supabase
    .from(table)
    .delete({ count: "exact" })
    .eq("id", id);

  return { data: count, error: error?.message };
}
