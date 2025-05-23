---
sidebar_position: 4
---

# Catalog (SSR)

:::info
  Catalog is currently being migrated into SSR.

  If you want to use the CSR version instead, find the SDK documentation [here](/mealz-documentation/docs/web_sdk/features/recipe-catalog)
:::

## Overview

The catalog is a suite of full pages that you can display inside of blank pages in your website.
It consists of several pages that route to one another:

- The [**home page**](#home-page), the intended starting point of the experience, which displays the categories of your catalog, each categories displaying the first recipes they contain
![alt text](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/page-overviews/recipeCatalog.png "Recipe catalog")
- The **favorite page (WIP)**, which shows the list of recipes added as favorites by a connected user
![Catalog favorites](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/page-overviews/favorites.png "Catalog favorites")
- The **list page (WIP)**, which shows a filtered list of your catalog of recipes
![Catalog list search](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/page-overviews/recipeCatalogSearch.png "Catalog list search")
- The **categories page (WIP)**, which shows the list of recipes in a category
![Catalog list](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/page-overviews/catalogList.png "Catalog list")

All pages display a **toolbar** that has :
- A search bar to search recipes by name which redirects to the **list page** if clicked from the home page, or the current page with additional filters if on the list, favorites or categories page
- A filter button, which opens the filter drawer (which has a CTA "Apply" that redirects to the **list page**)
- A "Preferences" button that opens the Preferences drawer, to set **global preferences** that apply in all Mealz-related features
- A "Favorites" button which redirects to the **favorites page** 

Each pages also displays a floating button showing the number of recipes currently added to the user's cart
On a click on this button, the **"My meals" drawers** appears:
![Basket preview](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/basketPreview.png "My meals")

## Home Page

The base url for the catalog home page is the following:
```
GET https://MEALZ_SSR_API_URL/API_VERSION/catalog
```

- Parameters :

  - `store_id: string`:
  **_(Recommended)_** We need your store ID to display the prices of the recipes, to fetch the recipes in basket informations and to hide recipes with primary ingredients not available in your store, so ideally it should be passed if the user has chosen a store

  - `max_recipes_per_category = 6`:
  **_(Recommended)_** Specify a maximum number of recipes to display per category. In our base design, we have 1 row of recipes per category and recipes should ideally fill the space available. So it is in your interest to fetch exactly the number of recipes that can be displayed on 1 row on the user's screen.

  - `pricebook_key: string = 'DEFAULT'`:
  **_(Optional)_** the pricebook key is needed to retrieve the recipe price corresponding to the pricebook you are currently using. If your website doesn't have multiple pricebooks for the same store, this parameter is not needed.

  - `display_infos: boolean = false`:
  **_(Optional)_** By default, the recipe-cards doesn't show the preparation time and difficulty af the recipe but if you want to display them you can set display_infos to true

  - `display_recipe_variant: number = 1`:
  **_(Optional)_** Select the variant for the display of the cards in the catalog. Default is 1, available values are 1, 2 and 3 (see [here](/docs/web_ssr/main-features/recipe-card#display-variants) for examples)


### Example :

:::warning
Do not forget the [mandatory HTTP headers](./pre-rendered-components#http-request-headers)
:::

```
GET https://MEALZ_SSR_API_URL/API_VERSION/catalog?store_id=max_recipes_per_category=6&display_recipe_variant=2
```

## Category Page (WIP)

The base url for the catalog category page will be the following:
```
GET https://MEALZ_SSR_API_URL/API_VERSION/catalog-category
```

- Parameters :
  
## Favorites Page (WIP)

The base url for the catalog favorites page will be the following:
```
GET https://MEALZ_SSR_API_URL/API_VERSION/catalog-favorites
```

- Parameters :

## List Page (WIP)

The base url for the catalog list page will be the following:
```
GET https://MEALZ_SSR_API_URL/API_VERSION/catalog-list
```

- Parameters :

## Routing

Each page uses links constructed with a base url and a page identifier to route between each page

Those values are stored internally in our API, and are client-dependant.

To ensure that our pages will correctly route between each other you will need to provide us with the urls of the pages on which you will display each page, so we can fill this config file accordingly, both for PROD and UAT environments.

## I18n
The customizable text contents for this component are the following:

```json
{
  "CATALOG_HOME": {
    "TITLE": "Meal ideas in 1 click",
    "CATEGORY": {
      "SEE_ALL": "See all"
    }
  },
  "MY_MEALS_BUTTON": {
    "TEXT": " recipes in your cart",
    "CARET_ALT": "Open the list"
  }
}
```

See [Internationalisation](/docs/web_ssr/customization/internationalization) for more information on how to configure a custom I18n file to override our base texts with your own.
See [the recipe card](/docs/web_ssr/main-features/recipe-card#i18n) to see its customizable text contents 
