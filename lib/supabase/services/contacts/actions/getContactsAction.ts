"use server";

import { supabase } from "@/lib/supabase/client";
import { ApiResponse } from "@/lib/supabase/types";
import { TABLE, ContactEntity } from "../types";

type RequestDto = never;
type ResponseDto = ContactEntity[];

export async function getContactsAction(): Promise<ApiResponse<ResponseDto>> {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("id", { ascending: false });
    
  return { data, error: error?.message };
}

export async function getContactsCountAction(): Promise<ApiResponse<number>> {
  const { count, error } = await supabase
    .from(TABLE)
    .select("id", { count: "estimated" });

  return { data: count, error: error?.message };
}
