---
sidebar_position: 4
---

# Load Mealz assets

Mealz HTML and Mealz CSS are fetched separately on purpose: styles belong in your page `<head>` as normal stylesheets. Full options are in [Fetching the components stylesheets](../integration-reference/fetching-style).

## Styles

Mealz returns stylesheet URLs as JSON (`links`, plus a ready-made `html` string of `<link>` tags). In this step we will build a helper in the same spirit as `fetchMealzHtml`: call a styles path, check the response, then hand the links to your page head.

The simplest path loads every Mealz stylesheet in one call (`/styles`). For a lighter page, use the performant routes (`/styles/base`, `/styles/recipe-card`, and so on). When you pass a `variant` (or `recipe_card_variant`) on a component request, pass the **same** parameter on the matching styles request.

```ts
async function fetchMealzStyles(path: string, query = {}) {
  const baseUrl = process.env.MEALZ_SSR_API_URL;
  const apiVersion = process.env.MEALZ_API_VERSION; // e.g. "v3"

  const url = new URL(`${baseUrl}/${apiVersion}${path}`);
  // Add any queryParams to the request
  for (const [queryKey, queryValue] of Object.entries(query)) {
    if (queryValue !== undefined && queryValue !== null && queryValue !== "") {
      url.searchParams.set(queryKey, String(queryValue));
    }
  }

  const response = await fetch(url, { method: "GET" });
  if (!response.ok) {
    throw new Error(`Mealz styles request failed`);
  }

  const payload = (await response.json()) as { links?: string[] };
  const links = payload.links;
  appendStylesToHead(links);
}
```

`appendStylesToHead` is yours to implement: take the stylesheet URLs and ensure each one is present in the page `<head>` as a `<link rel="stylesheet">` (skip duplicates if the link is already there).

A call then looks like this:

```ts
// All styles at once
await fetchMealzStyles("/styles");

// Or only what the recipe card needs (keep variant in sync with the HTML request)
await fetchMealzStyles("/styles/recipe-card", { variant: 1 });
```

Call this on every page that shows a Mealz component, before or alongside injecting the HTML fragment.
