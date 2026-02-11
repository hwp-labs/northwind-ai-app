"use server";

import { supabaseAsync } from "@/lib/supabase/server";
import { ApiResponse, SupabaseAuthResponse } from "@/lib/supabase/types";
import { LoginSchema } from "../types";

type RequestDto = LoginSchema;
type ResponseDto = {
  signUp: Omit<SupabaseAuthResponse, "weakPassword">;
  signIn: SupabaseAuthResponse;
};

export async function signUpAction(
  body: RequestDto,
): Promise<ApiResponse<ResponseDto["signUp"]>> {
  const supabase = await supabaseAsync();
  const { data, error } = await supabase.auth.signUp(body);
  return { data, error: error?.message };
}

export async function signInAction(
  body: RequestDto,
): Promise<ApiResponse<ResponseDto["signIn"]>> {
  const supabase = await supabaseAsync();
  const { data, error } = await supabase.auth.signInWithPassword(body);
  return { data, error: error?.message };
}

export async function signOutAction(): Promise<ApiResponse<ResponseDto>> {
  const supabase = await supabaseAsync();
  const { error } = await supabase.auth.signOut();
  return { data: null, error: error?.message };
}
