---
sidebar_position: 6
---

import ImageSideBySide from '@site/src/components/ImageSideBySide';

# Recipe tags

## Overview

The recipe-tags feature lets you display a small label on each product in the user's cart reminding them which recipe that product came from.

A cart page without tags:

![Cart without recipe tags](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/fakeCart.png "Cart without recipe tags")

With recipe tags injected next to each product:

<ImageSideBySide
firstUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/fakeCartWithTagsReduced.png"
firstAlt="Cart with recipe tags"
firstCaption="Closed"
firstImageMaxWidth="600px"
secondUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/fakeCartWithTagsReducedOpen.png"
secondAlt="Cart with recipe tags open"
secondCaption="Opened"
secondImageMaxWidth="600px"
/>

Call the route below with the product IDs in the basket, then inject each entry's `html` next to the matching product line on your cart page. The returned markup uses the `<mealz-recipe-tag>` web component.

The base URL:

```
GET https://MEALZ_SSR_API_URL/API_VERSION/recipe-tags
```

:::warning
Do not forget the [mandatory HTTP headers](./pre-rendered-components#http-request-headers).
:::

## Parameters

- `store_id: string`:
  **_(Mandatory)_** The store ID to contextualize the recipe-tag data.

- `product_ids: string[]`:
  **_(Mandatory)_** A JSON array of product IDs for which to fetch recipe-tag markup (passed as a query parameter, for example `product_ids=["productId1","productId2"]`).

## Response

Returns a JSON object with a `data` array. Each entry corresponds to one product ID:

```json
{
  "data": [
    { "productId": "productId1", "html": "<...>" },
    { "productId": "productId2", "html": "<...>" }
  ]
}
```

If a product has no associated recipe tag, the `html` value is an empty string.

## Related

- [Pre-rendered components](./pre-rendered-components) — mandatory request headers and general SSR patterns
- [Migrating from V2 to V3](../migration-v2-v3) — if you previously used client-side recipe tags
