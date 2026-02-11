"use server";

import { supabase } from "@/lib/supabase/client";
import { ApiResponse } from "@/lib/supabase/types";
import { TABLE, ContactEntity } from "../types";

type RequestDto = never;
type ResponseDto = ContactEntity[];

export async function getContactsAction(): Promise<ApiResponse<ResponseDto>> {
  const { data, error } = await supabase.from(TABLE).select("*");
  return { data, error: error?.message };
}
