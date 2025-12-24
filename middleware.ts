import { NextResponse } from "next/server";

export function middleware() {
  const res = NextResponse.next();

  if (process.env.TRIKAYA_NODE_ENV !== "production") {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return res;
}
