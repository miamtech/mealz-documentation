---
sidebar_position: 6
---

# Add-to-cart CTA (no-supplier)

## Overview

In **no-supplier** scenarios (e.g. recipe websites that redirect to a retailer), you can display a dedicated **“Add to cart” CTA** that lets users:

- Add a specific recipe to the basket for a given number of guests.
- Open the no-supplier drawer with the matching products, ready to be sent to the retailer.

This CTA is available as a WebComponent:

```html
<webc-miam-no-supplier-add-to-cart-cta></webc-miam-no-supplier-add-to-cart-cta>
```

Mealz takes care of:

- Loading the required scripts and styles from the **Mealz SSR API**.
- Fetching the HTML for the CTA from SSR and hydrating it with Mealz Web Components.
- Integrating with the existing basket state and analytics.

## Inputs

You configure the CTA by setting properties on the WebComponent:

- `recipeId: string` (required)  
  The Mealz recipe id to add to the basket.

- `guests?: number` (optional)  
  Number of guests for which the recipe should be added.  
  When set and greater than 0, it is forwarded to Mealz so quantities can be adjusted server‑side.

### Example

```html
<webc-miam-no-supplier-add-to-cart-cta></webc-miam-no-supplier-add-to-cart-cta>
<script>
  const cta = document.querySelector('webc-miam-no-supplier-add-to-cart-cta');
  cta.recipeId = '14989';
  cta.guests = 8;
</script>
```

When the CTA is loaded, it:

- Fetches the rendered CTA from the Mealz SSR API (including the correct button state).
- Opens the no-supplier drawer and prepares the basket when the user confirms.

## Angular wrapper (optional)

If you use the Angular library, an equivalent wrapper exists:

```html
<ng-miam-no-supplier-add-to-cart-cta
  [recipeId]="14989"
  [guests]="8">
</ng-miam-no-supplier-add-to-cart-cta>
```

Both variants (Angular component or `webc-miam-*` WebComponent) rely on the same underlying SSR route and scripts.  
From the client point of view, you only need to pass the correct `recipeId` (and optionally `guests`); the internal SSR logic is fully managed by Mealz.