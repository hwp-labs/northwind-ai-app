"use server";

import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export const getAuthUser = async (
  req: NextRequest,
  res: NextResponse<unknown>,
) => {
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

  const { data } = await supabase.auth.getUser();
  return data;
};
