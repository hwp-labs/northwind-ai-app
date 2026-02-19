"use server";

import { supabase } from "@/lib/supabase/client";
import { ApiResponse, defaultApiQueryParams } from "@/lib/supabase/types";
import { QueryVisitorDto, TABLE, VisitorEntity } from "../types";

type RequestDto = QueryVisitorDto;
type ResponseDto = VisitorEntity[];

export async function getVisitorsAction(
  req?: RequestDto,
): Promise<ApiResponse<ResponseDto>> {
  const { page, pageSize, sortBy, orderBy, filterByScreen } = {
    ...defaultApiQueryParams,
    ...req,
  };

  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order(sortBy, { ascending: false });

  return { data, error: error?.message };
}
