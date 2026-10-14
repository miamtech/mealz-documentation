---
sidebar_position: 5
---

# Render your first feature

We will render a **recipe card**, the building block of most Mealz integrations. Full parameters: [Recipe card](../integration-reference/recipe-card).

Using the helpers from [Make authenticated requests](./make-authenticated-requests) and [Load Mealz assets](./load-mealz-assets), fetch the card HTML and its styles from your server. Pass surrounding product ids (recommended) and your store id when the shopper has chosen a store:

```ts
const productIds = ["...", "..."]; // Paste two product ids here
const query = {
  surrounding_products_ids: JSON.stringify(productIds),
  store_id: getCurrentStore().id,
};

const html = await fetchMealzHtml("/recipe-card", query);
await fetchMealzStyles("/styles/recipe-card");
```

The HTML response is a fragment: scripts plus a `<mealz-recipe-card>` (and related tags) with server-rendered markup. If you use a `variant` on the recipe-card request, pass the same `variant` on the styles call.

Place that `html` in your server-rendered template where the card should appear on the shelf. Once the page loads, the module scripts register the custom elements, and they will be hydrated.
