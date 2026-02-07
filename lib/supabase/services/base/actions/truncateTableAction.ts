"use server";

import { supabase } from "@/lib/supabase/client";
import { ApiResponse } from "@/lib/supabase/types";

type RequestDto = string;
type ResponseDto = number;

export async function truncateTableAction(
  table: RequestDto,
): Promise<ApiResponse<ResponseDto>> {
  const { count, error } = await supabase
    .from(table)
    .delete({ count: "exact" })
    .neq("id", 0);
    
  return { data: count, error: error?.message };
}
