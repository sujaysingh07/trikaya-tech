import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Public base URL of the site; used for canonical, Open Graph and sitemap URLs.
export const SITE_URL = "https://trikaya-tech.vercel.app";

export function generateCanonical(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}