---
sidebar_position: 2
---

# Receiving baskets from affiliated websites

If a website is affiliated with you via Mealz, products added from this website can be transfered to your user's cart.

The process is the following:
1. The user is browsing the affiliated website and have the possibility to add recipes and/or individual products to a Mealz basket
2. The user at some point has to choose a store to transfer their basket over to, and they choose one of your stores !
3. The user decides that they can proceed to transfer their basket and clicks on a CTA that redirects them to your website with custom urlParams 
:::warning
  The url is by default the following: `{recipe-catalog-url}?affiliate={affiliate_website_name}&transferred_basket_token={token}&point_of_sale_ext_id={storeId}`

  If you need us to add more params or if some params are in conflict with any of your params, please contact us so we can work it together
:::
4. On your website, the SDK catches the urlParams, removes them from the url and stores them in sessionStorage until the basket is fully transfered 
  :::info
    Params are stored in sessionStorage because we take into account that maybe logging the user or forcing the store could force your website to reload, which would interrupt the process on our side. So in order to continue the process after any reload, we need to store the params temporarily

    Also, because the tokens are single-use, Mealz removes the params after storing them so the user can't come back on the url (by adding it to favorite for example), which would cause errors.
  :::
5. If the user isn't logged, Mealz calls the [hookCallback](../set-up-and-usage/hooks) with params (true, false) (i.e. "*user isn't logged, but we don't care about the store for now*")
  :::note
    This means if your website accepts unlogged carts, the features will take it into account as usual
  :::
6. Once `hookCallback` has returned true, if the current POS in not the one passed in params, Mealz calls [setForcePosCallback](#set-force-pos-callback) with the id of the store the user selected on the affiliated website in param
7. Once `setForcePosCallback` has returned true, Mealz adds all products that were added to the basket on the affiliated website to your cart, as if the user had added them all at the same time on your website
8. Once all products are added, Mealz removes the urlParams stored earlier from sessionStorage
  :::info
    After step 8, **The process is over, products are considered the same as if they were added from your website, and Mealz will behave as usual**
  :::


## Set force POS callback

On the affiliated website, Mealz needs to ask to the user which store they wants to shop in, so we can know which product to present them.

This means that, when they are redirected to your website, they expect to be on the store they chose earlier. But if the last time they were on your website they chose a different store, this store will still be selected on redirection...

**Which means that we need you to provide us a way to override the chosen store !**

Just like hookCallback, Mealz needs a callback that it can call when it needs to override the store.
You can set this callback with `window.miam.hook.setForcePosCallback: (callback: (posExtId: string) => boolean) => void`.

  :::note
    `posExtId` the id (in your database) of the store to force

    The callback should return a boolean that indicates to Mealz if it should proceed with adding the product(s) to the basket
  :::

```javascript
// Example Setup
export class Mealz {
  constructor() {
    window.miam.hook.setForcePosCallback(this.forceStoreCallback)
  }

  forceStoreCallback(storeId) => {
    // Override the store to the store with the ID passed in param
    // Then
    // if (mealzCanSafelyAddProductsToCart) {
      return true
    // }
    // else {
      return false
    // }
  }
}
```
:::info
  **Mealz will not add products until your callback has returned.** For example, perhaps when changing stores you display a confirmation popup to the user because your website has a rule dictating that no products may be added to cart while this popup is displayed. In this case, your callback should only return *after the popup was closed*, or else Mealz will try to add products while the popup is open (which would break your website rules).

  This is only an example, but should be kept in mind so the user experience stays as coherent as possible.
:::