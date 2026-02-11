"use server";

import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!;

export async function supabaseAsync() {
  const nextCookies = await cookies();
  return createServerClient(URL, KEY, {
    cookies: {
      getAll: () => nextCookies.getAll(),
      setAll: (cookiesArr) => {
        cookiesArr.forEach(({ name, value, options }) => {
          try {
            nextCookies.set({
              name,
              value,
              path: (options as any)?.path,
              httpOnly: (options as any)?.httpOnly,
              sameSite: (options as any)?.sameSite,
              secure: (options as any)?.secure,
              maxAge: (options as any)?.maxAge,
            } as any);
          } catch (e) {
            // best-effort: ignore cookie set failures
          }
        });
      },
    },
  });
}
