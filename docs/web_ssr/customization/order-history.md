---
sidebar_position: 4 
---

# Enable order history

Our library provides the capability to enable order history, offering users to easily track their past orders directly within the catalog. This feature introduces a redesigned "My Space" section, which includes two dedicated tabs: **Favorites** and **History**.

![alt text](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/9.1/my-space-history.png "History tab")

## Activating Order History

1. To begin, please contact our team to receive the required token for enabling order history functionality.

2. Replace your existing `mealzToken` with the new token and configure the user's language settings. Use the following code snippet:

  ```js
    window.mealz.supplier.setupWithToken('newMealzToken');
    window.mealz.user.setLanguage('en');
  ```

3. Once the order history feature is enabled, you can fetch data for the "My Space" page using the following API base URL:

```
GET http://MEALZ_SSR_API_URL/API_VERSION/catalog/my-space
```

- Parameters :
  - `store_id: string`:
  **_(Recommended)_** We need your store ID to display the prices of the recipes, to fetch the recipes in basket informations and to hide recipes with primary ingredients not available in your store, so ideally it should be passed if the user has chosen a store

  - `tab: 'favorites' | 'history' = 'favorites'`:
  **_(Optional)_** Specify the tab to display: favorites (default) or history

  - `pricebook_key: string = 'DEFAULT'`:
  **_(Optional)_** the pricebook key is needed to retrieve the recipe price corresponding to the pricebook you are currently using. If your website doesn't have multiple pricebooks for the same store, this parameter is not needed.

  - `display_infos: boolean = false`:
  **_(Optional)_** By default, the recipe-cards doesn't show the preparation time and difficulty af the recipe but if you want to display them you can set display_infos to true

  - `display_recipe_variant: number = 1`:
  **_(Optional)_** Select the variant for the display of the cards in the catalog. Default is 1, available values are 1, 2 and 3 (see [here](/docs/web_ssr/main-features/recipe-card#display-variants) for examples)

  - `search: string`:
  **_(Optional)_** This parameter should be specified if the user has used the search bar. The search term should be retrieved from the URL parameter search and passed unaltered to refine the recipe results based on the search input.

## Feature updates 

Once order history is enabled, the following updates will be applied:

The "Favorites" page in the catalog will be renamed to "My Space", featuring two tabs:
- **Favorites Tab**: Displays the list of recipes saved as favorites by a connected user

![alt text](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/9.1/my-space-favorites.png "Favorites tab")

- **History Tab**: Displays the order history of a connected user

![alt text](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/9.1/my-space-history.png "History tab")
![alt text](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/9.1/my-space-empty-history.png "History tab with no history")

Clicking on an order in the History tab opens a drawer providing informations about the recipes included in the selected order.

![alt text](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/9.1/my-space-history-drawer.png "Order details drawer")


You can further customize the appearance of the order history components to match your website’s design.
