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
  const URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!;

  const supabase = createServerClient(URL, KEY, {
    cookies: {
      getAll: () => req.cookies.getAll(),
      setAll: (cookies) => {
        cookies.forEach(({ name, value, options }) => {
          res.cookies.set(name, value, options);
        });
      },
    },
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return session?.user ?? null;
};
