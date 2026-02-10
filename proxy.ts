import { NextResponse, type NextRequest } from "next/server";
import { getAuthUserMiddlewareAction } from "./lib/supabase/services/auth/actions/getAuthUserAction";
import { PATH, PROTECTED_PATH } from "./constants/PATH";

export async function proxy(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const pathnameIsProtected = Object.values(PROTECTED_PATH).some((p) =>
    pathname.startsWith(p),
  );

  if (!pathnameIsProtected) return NextResponse.next();

  let res = NextResponse.next();
  const data = await getAuthUserMiddlewareAction(req, res);

  if (!data) {
    const url = req.nextUrl.clone();
    url.pathname = PATH.login;
    return NextResponse.redirect(url);
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next|api|login).*)"],
};
