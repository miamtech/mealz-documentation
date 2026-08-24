---
sidebar_position: 3
---

# Make authenticated requests

Every SSR API call that returns a Mealz component (and `GET /v3/core`) needs the same identity headers. Full detail lives in [HTTP request headers](../integration-reference/pre-rendered-components#http-request-headers).

In this step we will build a few small helpers you can reuse for every Mealz SSR call from your server: assemble the headers, resolve a guest authless id when needed, and fetch the HTML.

You are integrating Mealz into an **existing** website, so treat shopper context as something you already have (or can add next to your current session/auth code). The snippets below call placeholder helpers such as `getLoggedInUserId()` or `getCookie()` — replace them with your own.

## Headers to send

| Header | Value |
|--------|--------|
| `Authorization` **or** `Authless-id` | Logged-in: `user_id <user-token>`. Guest: an authless id from [Generate authless token](../integration-reference/pre-rendered-components#authless-user). Use **one** of these two headers per request. |
| `Supplier-token` | The Base64 supplier token Mealz provided for this environment — store it in configuration, same idea as the API URL/version in [Configure the API](./configure-the-api) |
| `Language-id` | Language code, for example `fr` or `fr-<your-retail-name>` |
| `Session-id` | A stable unique id for the shopper session (for example a UUID) |
| `cookies-consent` | Recommended: `true` when the user accepted cookies that allow Mealz profiling |

:::tip
In V3, these headers also initialize Mealz on the client when the SSR HTML (or `/v3/core`) is injected. You do not need a separate page-load setup call for the normal case.
:::

## 1. Build the headers

Start with a function that creates the headers to pass to every request made to Mealz. This example assume the presence of helpers from you website to fill the headers informations.

```ts
async function buildSsrHeaders() {
  const headers = {
    "Supplier-token": process.env.MEALZ_SUPPLIER_TOKEN!,
    "Language-id": getLanguage(), // e.g. from locale / Accept-Language
    "Session-id": getOrCreateSessionId(), // stable for this shopper visit
    "cookies-consent": hasProfilingCookiesConsent() ? "true" : "false",
  };

  const userId = getLoggedInUserId(); // null / undefined when guest
  if (userId) {
    headers.Authorization = `user_id ${userId}`;
  } else {
    headers["Authless-id"] = await getOrCreateAuthlessId();
  }

  return headers;
}
```

As explained in [Authless user](../integration-reference/pre-rendered-components#authless-user), when there is no user id to pass, Mealz requires an authless id, that you should store to authenticate the guest user. Let's create a helper for that too :

```ts
async function getOrCreateAuthlessId(): Promise<string> {
  // In this example we'll use a cookie for storage
  const existingAuthlessId = getCookie("mealz-authless-id");
  if (existingAuthlessId) {
    return existingAuthlessId;
  }

  const baseUrl = process.env.MEALZ_SSR_API_URL;
  const apiVersion = process.env.MEALZ_API_VERSION; // e.g. "v3"

  const url = `${baseUrl}/${apiVersion}/generate-authless-token`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Supplier-token": process.env.MEALZ_SUPPLIER_TOKEN!,
    },
  });
  if (!response.ok) {
    throw new Error(`Mealz authless token request failed`);
  }

  const payload = (await response.json()) as { authless_id?: string };
  const authlessId = payload.authless_id;
  setCookie("mealz-authless-id", authlessId);
  return authlessId;
}
```

:::note
Don't forget to clear the authless-id from your storage (cookie in this example) when the user logs in
:::

## 2. Fetch the HTML

Next, a function that calls any SSR path with those headers, checks the response, and returns the HTML fragment as text. Build the URL from the environment values you set in [Configure the API](./configure-the-api).

```ts
async function fetchMealzHtml(path: string, query = {}) {
  const baseUrl = process.env.MEALZ_SSR_API_URL;
  const apiVersion = process.env.MEALZ_API_VERSION; // e.g. "v3"

  const url = new URL(`${baseUrl}/${apiVersion}${path}`);
  // Add any queryParams to the request
  for (const [queryKey, queryValue] of Object.entries(query)) {
    if (queryValue !== undefined && queryValue !== null && queryValue !== "") {
      url.searchParams.set(queryKey, String(queryValue));
    }
  }

  const response = await fetch(url, {
    method: "GET",
    headers: await buildSsrHeaders(),
  });
  if (!response.ok) {
    throw new Error(`Mealz SSR request failed)`);
  }

  return response.text();
}
```

In our example, `path` is the part after the version segment, for example `/recipe-card` or `/core`, and `query` is an object containing all queryParams to pass for that request.

You will inject that `html` into your page template in the next steps. These helpers will be helpful to fetch any Mealz SSR API component you need.
