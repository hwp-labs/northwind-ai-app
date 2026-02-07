import { NextResponse, type NextRequest } from "next/server";
import { getAuthUser } from "./lib/supabase/middleware";
import { PATH, PROTECTED_PATH } from "./constants/PATH";

export async function proxy(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const pathnameIsProtected = Object.values(PROTECTED_PATH).some((p) =>
    pathname.startsWith(p),
  );

  if (!pathnameIsProtected) return NextResponse.next();

  let res = NextResponse.next();
  const { user } = await getAuthUser(req, res);

  if (!user) {
    const url = req.nextUrl.clone();
    url.pathname = PATH.login;
    return NextResponse.redirect(url);
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next|api|login).*)"],
};
