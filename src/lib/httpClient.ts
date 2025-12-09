// src/lib/httpClient.ts

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL; 

function getFullURL(url: string) {
  // Client-side: relative URL works
  if (typeof window !== "undefined") {
    return url;
  }
  
  // Server-side requires ABSOLUTE URL
  if (!url.startsWith("http")) {
    if (!BASE_URL) {
      throw new Error("Missing NEXT_PUBLIC_BASE_URL for server requests");
    }
    return `${BASE_URL}${url}`;
  }

  return url;
}

export async function httpRequest<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const finalURL = getFullURL(url);

  const response = await fetch(finalURL, {
    ...options,
    headers: {
      "x-api-key": API_KEY ?? "",
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    cache: options.cache ?? "no-store",
  });


  if (!response.ok) {
    const errorText = await response.text().catch(() => response.statusText);
    throw new Error(`HTTP Error ${response.status}: ${errorText}`);
  }

  return response.json() as Promise<T>;
}
