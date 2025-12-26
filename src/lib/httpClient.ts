// src/lib/httpClient.ts

const API_KEY = process.env.API_KEY;
const BASE_URL = process.env.BASE_URL;

function getFullURL(url: string) {
  if (typeof window !== "undefined") return url;

  if (!url.startsWith("http")) {
    if (!BASE_URL) {
      throw new Error("Missing BASE_URL for server requests");
    }
    return `${BASE_URL}${url}`;
  }

  return url;
}

interface HttpRequestOptions extends RequestInit {
  revalidate?: number; // ISR seconds
  fresh?: boolean; // force latest data
  tags?: string[]; // cache tags (future-proof)
}

export async function httpRequest<T>(
  url: string,
  options: HttpRequestOptions = {},
): Promise<T> {
  const finalURL = getFullURL(url);
  const { revalidate, fresh, tags, ...fetchOptions } = options;

  const response = await fetch(finalURL, {
    ...fetchOptions,

    headers: {
      "x-api-key": API_KEY ?? "",
      "Content-Type": "application/json",
      ...(fetchOptions.headers || {}),
    },

    // ✅ Cache strategy
    ...(fresh
      ? { cache: "no-store" }
      : revalidate
        ? { next: { revalidate, tags } }
        : { cache: "force-cache" }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => response.statusText);
    throw new Error(`HTTP ${response.status}: ${errorText}`);
  }

  return response.json() as Promise<T>;
}
