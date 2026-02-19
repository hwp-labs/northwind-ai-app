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
  const { data, count, error } = await supabase
    .from(table)
    .delete({ count: "exact" })
    .eq("id", id);

  console.log("🚀 ~ deleteAction ~ table:", table, id, data, count, error)
  return { data: count, error: error?.message };
}
