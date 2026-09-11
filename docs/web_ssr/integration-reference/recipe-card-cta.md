---
sidebar_position: 4
---

import ImageWithCaption from '@site/src/components/ImageWithCaption';

# Recipe card CTA

## Overview

The recipe card CTA is a minimal add-to-basket component for use in contexts where you want to display **only the call-to-action button** without the full recipe card. It is typically used when you have already rendered a recipe card and need to inject a standalone CTA alongside it (for example, in a shelf where the recipe image is handled separately by your own layout).

<ImageWithCaption
url="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/v3/examples/recipeCardCta.png"
alt="Recipe card CTA"
caption="Recipe card CTA"
imageMaxHeight="200px"
/>
<br/>

The base URL:

```
GET https://MEALZ_SSR_API_URL/API_VERSION/recipe-card-cta
```

:::warning
Do not forget the [mandatory HTTP headers](./pre-rendered-components#http-request-headers).
:::

## Parameters

- `recipe_id: string` **or** `recipe_name: string` 🆕:
  **_(Mandatory — one of the two)_** Identify the recipe by internal Mealz ID (`recipe_id`), or by display name (`recipe_name`) when you only have the title (e.g. retailer catalog). If both are sent, `recipe_id` wins. If resolved by name with no exact match, the route returns an empty body.

- `store_id: string`:
  **_(Mandatory)_** The store ID. Required by the V3 route (also used to show whether the recipe is already in the cart).

- `serves: number = 4`:
  **_(Optional)_** Initial guest/serving count for the CTA.

- `to_basket_on_click: boolean`:
  **_(Optional)_** When `true`, clicking the CTA adds the recipe directly to the basket without opening the details drawer first.

## Response

Returns an HTML fragment containing the CTA component. Inject it directly into your page at the desired location.

## Related

- [Recipe card](./recipe-card) — the full recipe card component
- [Pre-rendered components](./pre-rendered-components) — mandatory request headers and general SSR patterns
