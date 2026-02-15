"use server";

import { supabase } from "@/lib/supabase/client";
import { ApiResponse } from "@/lib/supabase/types";
import { CreateContactDto, TABLE, ContactEntity } from "../types";
import { ERROR_COPY } from "@/constants/LOCALE";

type RequestDto = CreateContactDto;
type ResponseDto = ContactEntity;

export async function createContactAction(
  body: RequestDto,
): Promise<ApiResponse<ResponseDto>> {
  const { data, error } = await supabase
    .from(TABLE)
    .insert(body)
    .select()
    .single();

  if (error?.code === "23505") {
    return { data: null, error: ERROR_COPY.duplicateContactEmail };
  }

  return { data, error: error?.message };
}
