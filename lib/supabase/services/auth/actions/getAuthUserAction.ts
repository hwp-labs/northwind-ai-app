"use server";

import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { User } from "@supabase/supabase-js";
//
import { supabase } from "@/lib/supabase/client";
import { ApiResponse } from "@/lib/supabase/types";

type RequestDto = never;
type ResponseDto = User;

export const getAuthUserAction = async (): Promise<
  ApiResponse<ResponseDto>
> => {
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
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => req.cookies.getAll(),
        setAll: (cookies) => {
          cookies.forEach(({ name, value, options }) => {
            res.cookies.set(name, value, options);
          });
        },
      },
    },
  );

  const { data } = await getAuthUserAction();
  return data;
};
