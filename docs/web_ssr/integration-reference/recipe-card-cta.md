---
sidebar_position: 4
---

# Recipe card CTA

## Overview

The recipe card CTA is a minimal add-to-basket component for use in contexts where you want to display **only the call-to-action button** without the full recipe card. It is typically used when you have already rendered a recipe card and need to inject a standalone CTA alongside it (for example, in a shelf where the recipe image is handled separately by your own layout).

<!-- TODO: add screenshot -->

The base URL:

```
GET https://MEALZ_SSR_API_URL/API_VERSION/recipe-card-cta
```

:::warning
Do not forget the [mandatory HTTP headers](./pre-rendered-components#http-request-headers).
:::

## Parameters

- `recipe_id: string`:
  **_(Mandatory)_** The internal Mealz ID of the recipe for which to render the CTA.

- `store_id: string`:
  **_(Recommended)_** The store ID. Required to show basket state (whether the recipe is already in the cart).

- `recipe_name: string` 🆕:
  **_(Optional)_** The display name of the recipe. Used for accessibility labels and confirmation messages on the CTA button.

- `to_basket_on_click: boolean`:
  **_(Optional)_** When `true`, clicking the CTA adds the recipe directly to the basket without opening the details drawer first.

## Response

Returns an HTML fragment containing the CTA component. Inject it directly into your page at the desired location.

## Related

- [Recipe card](./recipe-card) — the full recipe card component
- [Pre-rendered components](./pre-rendered-components) — mandatory request headers and general SSR patterns
