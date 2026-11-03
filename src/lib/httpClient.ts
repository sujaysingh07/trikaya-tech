// src/lib/httpClient.ts
//
// Backend calls are disabled: this site must not fetch any backend service.
// httpRequest keeps its signature so callers compile, but it never touches
// the network. It resolves with an empty list payload, so pages render
// their empty / "not found" states.

interface HttpRequestOptions extends RequestInit {
  revalidate?: boolean;
}

export async function httpRequest<T>(
  _url: string,
  _options: HttpRequestOptions = {},
): Promise<T> {
  return {
    data: [],
    message: "Backend requests are disabled",
    status: "disabled",
  } as unknown as T;
}
