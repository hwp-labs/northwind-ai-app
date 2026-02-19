"use server";

import { supabase } from "@/lib/supabase/client";
import { ApiResponse } from "@/lib/supabase/types";

type RequestDto = { table: string; updatedAtGte: string };
type ResponseDto = number[];

export async function resetUpdatedAtAction({
  table,
  updatedAtGte,
}: RequestDto): Promise<ApiResponse<ResponseDto>> {
  const updatedIds: ResponseDto = [];

  const { data: selected, error } = await supabase
    .from(table)
    .select("id, created_at, updated_at")
    .gte("updated_at", updatedAtGte)
    .order("id", { ascending: false });
  // console.log("🚀 ~ resetUpdatedAtAction ~ selected:", selected);

  if (selected && selected.length > 0) {
    const queries = selected.map(({ id, created_at }) =>
      supabase
        .from(table)
        .update({ updated_at: created_at })
        .eq("id", id)
        .select("id"),
    );

    const updated = await Promise.all(queries);
    updated.forEach((res) => {
      if (res.data && res.data.length) updatedIds.push(res.data[0].id);
    });
    // console.log("🚀 ~ resetUpdatedAtAction ~ updatedIds:", updatedIds);
  }

  return { data: updatedIds, error: error?.message };
}
