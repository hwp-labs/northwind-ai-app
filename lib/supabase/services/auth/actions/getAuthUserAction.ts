"use server";

import { NextResponse, type NextRequest } from "next/server";
import { User } from "@supabase/supabase-js";
// 
import { supabaseAsync } from "@/lib/supabase/server";
import { ApiResponse } from "@/lib/supabase/types";

type RequestDto = never;
type ResponseDto = User;

export const getAuthUserAction = async (): Promise<
  ApiResponse<ResponseDto>
> => {
  const supabase = await supabaseAsync();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return { data: user, error: error?.message };
};

export const getAuthUserMiddlewareAction = async (
  req: NextRequest,
  res: NextResponse<unknown>,
): Promise<User | null> => {
  const supabase = await supabaseAsync();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return user ?? null;
};
