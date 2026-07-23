---
sidebar_position: 1
---

# Introduction

Most of this documentation describes how to integrate Mealz into a **retailer** website, where the user browses products, adds them to a cart, and eventually pays for that cart on your site. A whole other category of clients does not fit that model:

- Recipe websites
- Food blogs and editorial/content sites
- Any site that wants to display recipes to its users but does not sell the ingredients itself

We call those **non-retailer** clients, and offer them a lighter integration path to let their users build a Mealz basket out of a recipe's ingredients, and then transfer that basket to one of our affiliated retailers to add the products to their cart.

Non-retailer mode is called **`no-supplier`** in code and routes (`no-supplier-add-to-cart-cta`, `noSupplier` in your token). See [Note about terminology](../main-features/pre-rendered-components#note-about-terminology) for how **supplier** relates to **retailer** in Mealz naming.

## How the integration works

The user flow involves two different websites:

1. On **your site** (the non-retailer), the user opens one of your recipe pages.
2. You display the recipe's content as you already do (title, image, ingredients, steps...) and insert one Mealz component next to it: the [no-supplier-add-to-cart-cta](./no-supplier-add-to-cart-cta).
3. When the user clicks on that CTA, Mealz prompts the user to pick one of our affiliated retailers.
4. A store-locator then opens so the user can pick one of that retailer's stores.
5. Mealz' drawer opens on the recipe's ingredients, and the user can add them (all at once, or one by one) to a Mealz basket.
6. Once the user is satisfied with the basket, they confirm the transfer. Mealz then redirects them to the retailer's website with the correct URL parameters.
7. On the retailer's side, their integration picks up the transferred basket and adds all products to the user's cart (this is the flow described in [Receiving baskets from affiliated websites](../customization/affiliated-websites)).

After step 7, **the experience continues on the retailer's website as usual**, and the user finalizes their purchase there. On your side, Mealz displays a modal to confirm that the transfer has started, and - if the user comes back to your site before completing the transfer on the retailer - a follow-up modal asking them whether they want to *continue* or *abandon* the ongoing transfer. And that is all.


## What is different compared to a retailer integration

A non-retailer integration is significantly lighter than the standard one. You can think of it as the retailer setup minus everything that depends on stores and carts:

- **No point-of-sale to load**: you do not need to pass `store_id` params.
- **No basket synchronization**: since you do not have a cart of your own, you do not have to implement any of the `window.mealz.basketSync.*` methods described in [Basket synchronization](../set-up-and-usage/basket-synchronization).
- **No `setForcePosCallback`**: that callback is required by the retailer that *receives* a transferred basket, not by the non-retailer that *sends* it.

The `noSupplier` flag that enables this lighter behavior is encoded in your **`Supplier-token`** (see [HTTP request headers](../main-features/pre-rendered-components#http-request-headers)), so you do not have to configure anything specific on your side to switch into this mode.

## Next steps

- Go through the simplified [Setup](./setup) to initialize the library on your site.
- Integrate the [no-supplier-add-to-cart-cta](./no-supplier-add-to-cart-cta) component next to your recipes.
