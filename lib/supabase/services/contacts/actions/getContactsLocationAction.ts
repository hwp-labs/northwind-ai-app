"use server";

import { supabase } from "@/lib/supabase/client";
import { ApiResponse } from "@/lib/supabase/types";
import { TABLE, ContactEntity } from "../types";

type RequestDto = null;
type ResponseDto = Required<Pick<ContactEntity, "location">>[];

export async function getContactsLocationAction(): Promise<
  ApiResponse<ResponseDto>
> {
  const { data, error } = await supabase.from(TABLE).select("location");
  return { data, error: error?.message };
}
