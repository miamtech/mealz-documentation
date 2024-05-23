---
sidebar_position: 8
---

# Customization

## For more customization

None of the components and methods listed in this section are necessary if the previously mentionned features are good enough for your implementation. But if you want more customization, you may need to implement some of these components or call some of those methods.

### window.miam

The window.miam object still has a lot more methods and attributes that can make a big difference for customizing your experience. Some of them will not be useful to you right off the bat, but can be at some point.

`window.miam.`

- `analytics.`

  - `eventSent$: Observable<string>` Each time Mealz sends an analytics event, emits its content as a stringified JSON of the following format:

  ```javascript
  {
  name: 'eventName',
  path: 'https://www.yourdomain.com/thepath',
  props: {aString: 'foo bar', aNumber: 5}
  }
  ```

- `basket.`

  - `basketIsReady$: Observable<boolean>`: Emits true when Mealz's basket has successfully loaded for the first time. Does not emit anything before or after that.
  - `initialize: () => void`: Fetch the first Basket early (before any action requires it on Mealz's side), so you can start the [basket-sync](./set-up-and-usage/basket-synchronization) earlier
  - `reset: () => void`: Resets Mealz' basket : empties all products & recipes added by the user.
    > :warning: We heavily recommend not to use this method except in the console for testing purposes :warning:
  - `updatePricebook: (pricebookName: string) => Observable<void>`: If you have different price tables (or pricebooks) for the same point of sale, you can call this method to let Mealz know which pricebook you are using. For example, prices could be different depending on if the user chose home delivery or drive-in
  - `recipeCount: () => Observable<number>`: A BehaviorSubject that emits the current number of recipes in Mealz' Basket once (it waits for the Basket to be initialized to emit).
  - `openPreview: () => void`: Opens the recipe-modal in basket preview mode to display the recipes currently in the basket

- `basketSync.` (see [basket synchronization](./set-up-and-usage/basket-synchronization))

  - `definePushProductsToBasket: (pushProductsToBasket: (products: ComparableProduct[]) => void) => void`: The callback parameter is called when Mealz's basket changes to update the user's cart accordingly
    - pushProductsToBasket: a method that updates the user's cart with the products passed in parameter, by adding products if their quantity is positive, and removing them if their quantity is negative
  - `retailerBasketChanged: (comparableProducts: ComparableProduct[]) => void`: Call to notify Mealz that the user's cart has been updated
    - comparableProducts: The products in the user's cart
  - `handlePayment: (total: number) => void`: Call to notify Mealz that the user's cart was paid. Mealz then refreshes the groceries-list and basket for the next user's cart
    - total: The total price of the cart paid

- `features.`

  - `enableVideoRecipes: () => void`: Call to enable recipes to display a video instead of their picture, if the recipe has a video
  - `enableArticlesInCatalog: () => void`: Enable having Mealz's articles appearing in a dedicated category in the recipe-catalog component
  - `enableGuestsInputOnMyMeals: () => void`: Call to enable guests input on My Meals view
    ![Recipe tag more recipes](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/guestsInputOnMyMeals.png "Recipe tag more recipes")
  - `enableUserPreferences: () => void`: Enable asking and setting user's preferences for more precision in the algorithm
  - `enableTagsOnRecipes: () => void`: Enable displaying tags on recipe-details
  - `setPersonnalRecipe: (isEnable: boolean) => void`: Call to enable personal recipes on recipe-catalog

- `hook.`

  - `setHookCallback(callback: (isLogged, isPosValid) => boolean)`: [Set up hook callback](./set-up-and-usage/hooks)

- `recipes.`

  - `hidden: Observable<boolean>`: An observable that emits true when the recipe-modal is closed. You can subscribe on it if you want to do something just after Mealz's modal closes.
  - `addAllIngredientsCTAWasClicked: EventEmitter<{ ingredientsAdded: number; ingredientsTotal: number }>`: An observable that emits when the "Add all ingredients" CTA on recipe-details is clicked. It emits `ingredientsAdded`, the number of ingredients added to cart, and `ingredientsTotal`, the total number of ingredients in the recipe. You can subscribe on it to display a toaster after ingredients were added for example. :warning: It doesn't sends the number of products because the SDK has no way of knowing in which quantities the product not added would be added
  - `shouldDisplayIngredientPicturesOnRecipeCard: (should: boolean) => void`: If true is passed, recipe-cards will diplay pictures of the ingredients.
  - `setDefaultIngredientPicture: (url: string) => void`: If you have set ingredients pictures to be displayed on recipes, set a default url for if there aren't any picture for an ingredient
  - `setDefaultRecipePicture: (url: string) => void`: Set a default url for if there aren't any picture for a recipe
  - `setDifficultyLevels: (levels: { value: number, label: string }[]) => void`: Override default labels for difficulty levels
    - levels: The list of labels to override for each difficulty (difficulties are respectively 1: Easy, 2: Medium, 3: Hard). For example : `[{value: 1, label: "Beginner"}]` will update the label of easy recipes to "Beginner"
  - `showConfirmationToaster: () => void`: If called, adding any product to the cart from any of Mealz's features will display a confirmation toaster

- `router.`

  - `setRecipeCatalogUrl: (url: string) => void`: Inform Mealz of the url where the catalog is for the redirection link of recipe-details
  - `setRecipeInfoLink: (url: string) => void`: Inform Mealz of the url where the onboarding section of the catalog should redirect
  - `setRetailerCartUrl: (url: string) => void`: Inform Mealz of the url of your cart page if Mealz needs to redirect there
  - `setPromotionsUrl: (url: string) => void`: Inform Mealz of the url where the promotions are

- `supplier.`

  - `setupWithToken: (token: string) => void`: [Inform the library of who you are](./set-up-and-usage/inform-the-library#inform-the-library-of-who-you-are)

- `user.`

  - `loadWithExtId: (id, forbidProfiling = false) => void`: [Log in user](./set-up-and-usage/login-and-logout#handle-user-login-and-logout-optional)
  - `reset: () => void`: [Log out user](./set-up-and-usage/login-and-logout#handle-user-login-and-logout-optional)
  - `setFavoriteItems: (favoriteProductIds: string[]) => Observable<object>`: If your website has a "favorite products" feature, you can pass the ids of all products which the user has marked as favorites, so they can be prioritized when adding a recipe to their cart, if one of them is returned as a matching product for the recipe.
    - favoriteProductIds: an array of product ids, passed as string
  - `setLocation: (coords: Coordinates) => void`: You can provide the user location if they allowed it in order to send it to our `store-locator`, the `Coordinates` interface requires a `longitude` (number), a `latitude` (number) and optionally an `accuracy` (number), you can refer to [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/GeolocationCoordinates) for those specific attributes

- `events.`
  - `storeLocatorOpened: () => Observable<boolean>` Return either `true` if the store locator is opened or `false`if it's closed

* `paymentStarted: (totalPrice: number) => void`: It is possible that we ask you to use this method if you have trouble sending us the cart paid event. This method is meant to be called when the user begins the payment procedure (typically when they click on a "Confirm my cart" button).

* `setStickyHeaderHeight: (height: number) => void`: **Heavily recommended** Call setStickyHeaderHeight method to update your sticky header height in px. You need to call the method everytime it changes with its new height. Default value is 0 (0px for no header). This setter is mandatory for our catalog-header to get fixed at the right position when scrolling. Without it, our header might get fixed on top / behind your header

* `setDefaultScrollElementGetter: (callback: () => HTMLElement) => void`: **Heavily recommended** Pass a callback that returns the default scroll container of the page so mealz modal can block the scroll when opened. Default callback returns document.body. Call setDefaultScrollElementGetter(() => null) if you don't want the modal to block scroll on background.
