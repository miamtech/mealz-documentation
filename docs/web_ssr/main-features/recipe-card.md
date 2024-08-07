---
sidebar_position: 2
---

# Recipe card (SSR)

## Overview

The recipe card is the base of Mealz' whole experience. This card fetches and shows a recipe based on the items that are displayed around it (see [here](../about/features#how-the-recipes-displayed-in-the-cards-are-chosen) to see how the process of fetching the best recipe works).

The primary CTA on the card is the "Baskets icon" button. When clicked, Mealz' drawer opens and shows the recipes' details component. Clicking on the picture or title has the same effect.

Finally, by clicking on the heart icon the user can add the recipe to Mealz' favorite recipes list. This icon only appears if the user is connected

![Recipe card](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/recipeCard.png "Recipe card")

> You need to have loaded the **token** to display recipes and the library needs a valid **store** to add products to cart

- Parameters :

  - `supplier_id: string`:
  **_(Mandatory)_** Your supplier ID
  
  - `store_id: string`:
  **_(Mandatory)_** Your store ID

  - `pricebook_key: string = 'DEFAULT'`:
  **_(Optional)_** the pricebook key is needed to retrieve the recipe price

  - `profiling: boolean = true`:
  **_(Optional)_** set to false if user refused profiling

  - `display_variant: number = 1`:
  **_(Optional)_** Select the variant for the display of the card. Default is 1, available values are 1, 2 and 3. See below for examples.

  - `orientation: 'vertical' | 'horizontal' = 'vertical'`:
  **_(Optional)_** Select the orientation for the display of the card. See below for examples.

  - `recipe_id: string`:
  **_(Optional)_** load a recipe from its id

  - `surrounding_products_ids: string[]`:
  **_(Mandatory if no `recipeId` provided)_** an array of productIds around the place where you want to put the recipe card, the goal is to find a recipe matching the products
    _eg: if the recipe is surrounded by milk, we want to show a recipe that needs milk_

  - `current_products_ids: string[]`:
  **_(Optional)_** takes an array of product ids with a high priority on the suggestion

  - `serves: number = 4`
  **_(Optional)_** serves parameter indicate the number of people the meal will serve.

> As mentioned earlier, while you have the possibility to display a random recipe, we heavily recommend you to pass the products ids, because while a user would be interested by a chocolate cake recipe between chocolate bars, they could find it weird to have for instance a burger recipe between 2 bottles of milk.
> On the same note, displaying a fixed recipe can be tempting if you want to have control on the content appearing on your website, but it also means that the users will always see the same recipes at the same places and may not be interested, while our algorithm has some random components that makes the content vary between sessions, giving the user more inspiration.

### Example :

A recipe contextualized with surrounding products **_(Recommended)_**:

```
http://MEALZ_SSR_API_URL/recipe-card?supplier_id=7&surrounding_products_ids=["214086","1254022"]&store_id=2817&pricebook_key=DEFAULT&serves=4&profiling=true&display_variant=3&orientation=horizontal
```

A fixed recipe:

```html
http://MEALZ_SSR_API_URL/recipe-card?supplier_id=7&recipe_id=15123&store_id=2817&pricebook_key=DEFAULT&serves=4&profiling=true&display_variant=3&orientation=horizontal
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
