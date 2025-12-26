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
      throw new Error("Missing BASE_URL for server requests");
    }

    return `${BASE_URL}${url}`;
  }
  console.log(url)

  return url;
}

interface HttpRequestOptions extends RequestInit {
  revalidate?: boolean;
}

export async function httpRequest<T>(
  url: string,
  options: HttpRequestOptions = {},
): Promise<T> {
  const finalURL = getFullURL(url);
  const { revalidate, ...fetchOptions } = options;

  const response = await fetch(finalURL, {
    ...fetchOptions,
    headers: {
      "x-api-key": API_KEY ?? "",
      "Content-Type": "application/json",
      ...(fetchOptions.headers || {}),
    },

    /**
     * Revalidation logic
     * - If revalidate === true → revalidate every 60 seconds
     * - Else → no-store (default, dynamic fetch)
     */
    ...(revalidate
      ? { next: { revalidate: 60 } }
      : { cache: fetchOptions.cache ?? "no-store" }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => response.statusText);
    throw new Error(`HTTP Error ${response.status}: ${errorText}`);
  }

  return response.json() as Promise<T>;
}
