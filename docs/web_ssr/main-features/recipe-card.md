---
sidebar_position: 3
---

# Recipe card (SSR)

## Overview

The recipe card is the base of Mealz' whole experience. This card fetches and shows a recipe based on the items that are displayed around it (see [here](../about/features#how-the-recipes-displayed-in-the-cards-are-chosen) to see how the process of fetching the best recipe works).

The primary CTA on the card is the "Basket icon" button. When clicked, Mealz's drawer opens and shows the recipe's details. Clicking on the picture or title has the same effect.

Finally, by clicking on the heart icon the user can add the recipe to Mealz's favorite recipes list. This icon only appears if the user is connected.

![Recipe card](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/recipeCard.png "Recipe card")

The base url for the recipe-card is the following:
```
GET https://MEALZ_SSR_API_URL/API_VERSION/recipe-card
```

- Parameters :

  - `surrounding_products_ids: string[]`:
  **_(Mandatory if no `recipe_id` provided)_** an array of productIds around the place where you want to put the recipe card, the goal is to find a recipe matching the products
  _eg: if the recipe is surrounded by milk, we want to show a recipe that needs milk_

  - `recipe_id: string`:
  **_(Mandatory if no `surrounding_products_ids` provided)_** load a recipe from its id

  - `store_id: string`:
  **_(Recommended)_** We need your store ID to display the price of the recipe, so ideally it should be passed if the user has chosen a store

  - `pricebook_key: string = 'DEFAULT'`:
  **_(Optional)_** the pricebook key is needed to retrieve the recipe price corresponding to the pricebook you are currently using. If your website doesn't have multiple pricebooks for the same store, this parameter is not needed.

  - `display_variant: number = 1`:
  **_(Optional)_** Select the variant for the display of the card. Default is 1, available values are 1, 2 and 3 (see below for examples)

  - `orientation: 'vertical' | 'horizontal' = 'vertical'`:
  **_(Optional)_** Select the orientation for the display of the card (see below for examples)

  - `current_products_ids: string[]`:
  **_(Optional)_** takes an array of product ids with a high priority on the suggestion. Does not have any effect if not paired with surrounding_products_ids

  - `serves: number`
  **_(Optional)_** Override the default number of guests set for the recipe

> Displaying a fixed recipe can be tempting if you want to have control on the content appearing on your website, but it also means that the users will always see the same recipes at the same places and may not stay interested, while our algorithm has some random elements to it that makes the content vary between sessions, giving the user more inspiration.

### Example :

:::warning
Do not forget the [mandatory HTTP headers](./pre-rendered-components#http-request-headers)
:::

A recipe contextualized with surrounding products **_(Recommended)_**:

```
GET https://MEALZ_SSR_API_URL/API_VERSION/recipe-card?surrounding_products_ids=["214086","1254022"]&store_id=2817&pricebook_key=DEFAULT&serves=4&profiling=true&display_variant=3&orientation=horizontal
```

A fixed recipe:

```
GET https://MEALZ_SSR_API_URL/API_VERSION/recipe-card?recipe_id=15123&store_id=2817&pricebook_key=DEFAULT&serves=4&profiling=true&display_variant=3&orientation=horizontal
```

### Display variants

**Variant 1 Vertical (default):**
![Recipe card variant 1 Vertical](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/CardsVariant1.png "Recipe card variant 1 Vertical")

**Variant 1 Horizontal:**
![Recipe card variant 1 Horizontal](../../../static/img/RecipeCardVariant1Horizontal.png "Recipe card variant 1 Horizontal")

**Variant 2 Vertical:**
![Recipe card variant 2 Vertical](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/CardsVariant2.png "Recipe card variant 2 Vertical")

**Variant 2 Horizontal:**
![Recipe card variant 2 Horizontal](../../../static/img/RecipeCardVariant2Horizontal.png "Recipe card variant 2 Horizontal")

**Variant 3 Vertical:**
![Recipe card variant 3 Vertical](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/CardsVariant3.png "Recipe card variant 3 Vertical")

**Variant 3 Horizontal:**
![Recipe card variant 3 Horizontal](../../../static/img/RecipeCardVariant3Horizontal.png "Recipe card variant 4 Horizontal")


**The second and third variants are ideal for the cards you display in your shelves**, because of the badge in the upper-left corner (that you can easily replace by an image of your design that corresponds better to your website's design). **The third variant is better if your products have their "add to favorite" CTA next to the price**.

**The first variant is better for our catalog**, because displaying the badge on each card would be redundant, which is why we use this variant by default.


### I18n
The customizable text contents for this component are the following:

```json
{
  "RECIPE_PRICING": {
    "PER_GUESTS": "/pers."
  },
  "RECIPE_CARD_CTA": {
    "IN_BASKET_ICON_ALT": "See the products currently in basket",
    "NOT_IN_BASKET_ICON_ALT": "See the products"
  }
}
```

See [Internationalisation](/docs/web_ssr/customization/internationalization) for more information on how to configure a custom I18n file to override our base texts with your own.

## Fetching multiple recipe cards at once

For performance purposes, we have created another route for the recipe-cards that you can call to fetch multiple cards at once. Whereas the single card route has multiple "modes" (with a recipeId or with the surrounding products Ids), this route is only intended to be used with surrounding products ids.

The base url for the multiple recipe cards route is the following:
```
POST https://MEALZ_SSR_API_URL/API_VERSION/recipe-card/multiple
```

- Parameters :
  - `store_id: string`:
  **_(Recommended)_** We need your store ID to display the price of the recipe, so ideally it should be passed if the user has chosen a store

  - `pricebook_key: string = 'DEFAULT'`:
  **_(Optional)_** the pricebook key is needed to retrieve the recipe price corresponding to the pricebook you are currently using. If your website doesn't have multiple pricebooks for the same store, this parameter is not needed.

  - `display_variant: number = 1`:
  **_(Optional)_** Select the variant for the display of the card. Default is 1, available values are 1, 2 and 3 (see below for examples)

  - `orientation: 'vertical' | 'horizontal' = 'vertical'`:
  **_(Optional)_** Select the orientation for the display of the card (see above for examples)

  - `serves: number`
  **_(Optional)_** Override the default number of guests set for the recipe

:::important
  This request is a POST, because the data of the product-ids we need is a little too complex to pass via queryParams, and as such it is more practical to pass them via the body.
:::

The expected format for the body is as follow

```json
{
  "contexts": [
    {
      "productIds": ["productId1", "productId2"],
      "position": 0
    },
    {
      "productIds": ["productId3", "productId4"],
      "position": 1
    },
    ...
    {
      "productIds": ["productIdX", "productIdY"],
      "position": n
    }
  ]
}
```

- `contexts` is an array of "contexts", couples of productIds and positions that will each be used to fetch 1 recipe
- `productIds: string[]` is the equivalent of `surrounding_products_ids` for the single recipe-card route: ids of the products (in your database) between which you will insert the corresponding recipe-card
- `position: number`: is the position in which you intend to insert the card, and we use it to make sure the correct card can be mapped to the ids that were used to generate it. It can be for example 0,1,2,3,... (the position of the card relative to each other) or 4,8,11,... (the position of the card relative to the other products in the shelf). The positions can also represent something else if you need, as long as you can use them to match the productIds whith the correct card HTML, since we will return it as-is along with each card's html.

:::warning
  Because the body is in JSON format, this route needs to be called with a `'Content-Type': 'application/json'` header, in addition to the usual headers needed fo all API requests
:::

For example, instead of calling:
```
GET https://MEALZ_SSR_API_URL/API_VERSION/recipe-card?surrounding_products_ids=["id1","id2"]
GET https://MEALZ_SSR_API_URL/API_VERSION/recipe-card?surrounding_products_ids=["id3","id4"]
```
You can call:
```
GET https://MEALZ_SSR_API_URL/API_VERSION/recipe-card/multiple?surrounding_products_ids=[["id1","id2"],["id3","id4"]]
body: "{
  "contexts": [
    {
      "productIds": ["productId1", "productId2"],
      "position": 0
    },
    {
      "productIds": ["productId3", "productId4"],
      "position": 1
    },
  ]
}"
```

Unlike all other routes, this route returns a JSON object and not a HTML string. The response format is as follow:

```json
{
  "data": [
    {
      "html": "<...>",
      "position": 0
    },
    {
      "html": "<...>",
      "position": 1
    },
    ...
    {
      "html": "<...>",
      "position": n
    }
  ]
}
```

In the `data` array, each element will have an attribute `html`, containing the same HTML as would be contained in the single recipe-card route, and an attribute `position`, with the same value as the `position` attribute linked to the product ids that were used to generate the card, so you can easily know where to insert each card in your page.

:::info
  The cards will be returned sorted by ascending position, and not necessarily in the order the product-ids were passed.
:::

Here is an example of request:
```
curl --location 'https://ssr-api-uat.mealz.ai/v1/recipe-card/multiple?store_id=#STORE_ID' \
--header 'authorization: user_id #USER_ID' \
--header 'language-id: fr' \
--header 'supplier-token: #SUPPLIER_TOKEN' \
--header 'session-id: #SESSION_ID' \
--header 'Content-Type: application/json' \
--data '{
    "contexts": [
        {
            "position": 0,
            "productIds": ["#PRODUCT_ID_1", "#PRODUCT_ID_2"]
        },
        {
            "position": 1,
            "productIds": ["#PRODUCT_ID_3", "#PRODUCT_ID_4"]
        },
        {
            "position": 2,
            "productIds": ["#PRODUCT_ID_5", "#PRODUCT_ID_6"]
        },
        {
            "position": 3,
            "productIds": ["#PRODUCT_ID_7", "#PRODUCT_ID_8"]
        }
    ]
}'

// RESPONSE

{
  "data": [
    {
      "html": "<...>",
      "position": 0
    },
    {
      "html": "<...>",
      "position": 1
    },
    {
      "html": "<...>",
      "position": 2
    },
    {
      "html": "<...>",
      "position": 3
    }
  ]
}
```
