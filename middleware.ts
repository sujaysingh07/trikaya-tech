import { NextResponse } from "next/server";

// Crawlers must be allowed everywhere: never send X-Robots-Tag: noindex.
export function middleware() {
  return NextResponse.next();
}
