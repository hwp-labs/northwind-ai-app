"use server";

import { supabase } from "@/lib/supabase/client";
import { ApiResponse } from "@/lib/supabase/types";
import { LoginSchema } from "../types";

type RequestDto = LoginSchema;
type ResponseDto = string;

export async function signInWithGitHubAction(
  body: RequestDto,
): Promise<ApiResponse<ResponseDto>> {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
  });

  return { data: data.url, error: error?.message };
}
