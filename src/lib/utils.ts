import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateCanonical(path: string) {
  const base = "https://www.trikaya.io";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}