---
sidebar_position: 3
---

# No-supplier add-to-cart CTA

## Overview

The `no-supplier-add-to-cart-cta` is the only pre-rendered component you need as a non-retailer. It replaces the regular [recipe-card](../main-features/recipe-card) in your integration: since you already display the recipe on your own page (title, image, ingredients, steps...), all you need from Mealz is a CTA that lets the user add the recipe's ingredients to a Mealz basket.

The component has two visual states:

- When the recipe is **not yet in the basket**: a primary button labeled *"Acheter les ingrédients"* ("Buy the ingredients").
- When the recipe **is already in the basket**: a secondary button labeled *"Voir les ingrédients"* ("See the ingredients").

When the user clicks on it, Mealz' drawer opens and shows the list of ingredients, exactly like when clicking on a regular recipe-card. From there, the user can add/remove/replace ingredients and eventually transfer the basket to an affiliated retailer.

:::note
The component renders two copies of the button: one **static** (displayed where you insert the component in your page) and one **fixed** at the bottom of the viewport (shown with an animation when the static one scrolls out of view). Both behave identically, they are handled by the web component itself.
:::

## Route

The base url for the no-supplier-add-to-cart-cta is the following:

```
GET https://MEALZ_SSR_API_URL/API_VERSION/no-supplier-add-to-cart-cta
```

- Parameters :

  - `recipe_id: string`:
  **_(Mandatory)_** the id of the recipe in your database. Our backend resolves it to the matching Mealz recipe via its external id, so you can just pass whichever id you already use for that recipe on your side.

  - `guests: number`:
  **_(Optional)_** override the default number of guests for the recipe.

### Example

:::warning
Do not forget the [mandatory HTTP headers](../main-features/pre-rendered-components#http-request-headers)
:::

Minimal call (the usual case for a non-retailer):

```
GET https://MEALZ_SSR_API_URL/API_VERSION/no-supplier-add-to-cart-cta?recipe_id=22509
```

With an explicit guest count:

```
GET https://MEALZ_SSR_API_URL/API_VERSION/no-supplier-add-to-cart-cta?recipe_id=22509&guests=6
```

## How to integrate it

The integration is the same as for any other [pre-rendered custom element](../main-features/pre-rendered-components):

1. Call the route above from your server with the [mandatory HTTP headers](../main-features/pre-rendered-components#http-request-headers).
2. Inject the returned HTML wherever you want the CTA to appear on your recipe page (typically next to the recipe title/image).
3. Let the [setup](./setup) you did earlier handle the rest: hydration, opening the drawer, adding ingredients to the Mealz basket, and transferring the basket to an affiliated retailer.


:::tip
You can customize the styling of the CTA the same way as any other Mealz component. See [Styling](../styling) for details on how to override our default styles to match your site's design.
:::
