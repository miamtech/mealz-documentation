---
sidebar_position: 3
---

# No-supplier add-to-cart CTA

## Overview

The `no-supplier-add-to-cart-cta` is the only pre-rendered component you need as a non-retailer. It replaces the regular [recipe-card](../integration-reference/recipe-card) in your integration: since you already display the recipe on your own page (title, image, ingredients, steps...), all you need from Mealz is a CTA that lets the user add the recipe's ingredients to a Mealz basket.

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
  **_(Optional)_** sets the **initial** number of guests when the HTML is rendered. After hydration, the CTA keeps using the same guest count as the rest of Mealz on the page (for example when the user changes guests with a Mealz guest control). If you drive guest count from **your own** UI, see [Guest count after load](#guest-count-after-load).

### Example

:::warning
Do not forget the [mandatory HTTP headers](../integration-reference/pre-rendered-components#http-request-headers)
:::

Minimal call (the usual case for a non-retailer):

```
GET https://MEALZ_SSR_API_URL/API_VERSION/no-supplier-add-to-cart-cta?recipe_id=12345
```

With an explicit guest count:

```
GET https://MEALZ_SSR_API_URL/API_VERSION/no-supplier-add-to-cart-cta?recipe_id=12345&guests=6
```

## Guest count after load

The CTA uses the guest count when adding the recipe to the Mealz basket (same behaviour as the regular recipe card). The count is **not limited** to the value from the initial SSR request: it **follows updates** from other Mealz UI on the page that change the number of guests.

If your site maintains its own guest selector next to the recipe, push changes into the custom element so Mealz stays in sync:

```js
document.querySelector('mealz-no-supplier-add-to-cart-cta')
  ?.setAttribute('guests', String(nextCount));
```

:::info
Non-numeric `guests` attribute values are ignored (Mealz falls back to its default behaviour for an unset count).
:::

:::warning
Other Mealz guest controls in the components still update the guest count. If yours should be the only source of truth, hide Mealz guest inputs — for example using [Styling](../styling) overrides with `display: none` rules.
:::

## Custom CTA content by basket state

If you need to change the CTA label or inner content in JavaScript (rather than via CSS), the host element exposes the current basket state in two ways you can read at any time — including **before hydration**:

- the `in-basket` attribute (`"true"` or `"false"`)
- the `in-basket` class on `<mealz-no-supplier-add-to-cart-cta>`

Both are set during SSR and kept in sync after hydration. When the status changes (for example after the user adds the recipe to the basket), the component also dispatches an `inBasketStatus` event whose `detail` is a boolean (`true` or `false`).

Apply your content on load, then re-apply whenever the status changes:

```js
const cta = document.querySelector('mealz-no-supplier-add-to-cart-cta');

function applyCustomContent(cta) {
  const inBasket = cta.getAttribute('in-basket') === 'true';
  // or: cta.classList.contains('in-basket')
  // update the static and fixed buttons inside `cta`…
}

applyCustomContent(cta);
cta.addEventListener('inBasketStatus', () => applyCustomContent(cta));
```

:::info
Since the component renders two buttons (static and fixed), do not apply the same customization to both if you override their content.
:::

## How to integrate it

The integration is the same as for any other [pre-rendered custom element](../integration-reference/pre-rendered-components):

1. Call the route above from your server with the [mandatory HTTP headers](../integration-reference/pre-rendered-components#http-request-headers).
2. Inject the returned HTML wherever you want the CTA to appear on your recipe page (typically next to the recipe title/image).
3. Let the [setup](./setup) you did earlier handle the rest: hydration, opening the drawer, adding ingredients to the Mealz basket, and transferring the basket to an affiliated retailer.


:::tip
You can customize the styling of the CTA the same way as any other Mealz component. See [Styling](../styling) for details on how to override our default styles to match your site's design.
:::
