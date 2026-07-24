---
sidebar_position: 5
---

# How recommendations work

## How the recipes displayed in the cards are chosen

We have developed the concept of our recipe cards by following this goal:

> Display the right recipe, at the right time, to the right person.

To achieve this, we have developed a solution based on Artificial Intelligence which is capable of finding the best recipes to show to one client, based on their shopping habits and on products displayed next to the recipe card.

So, while you could in theory decide precisely which recipe to display on each and every page of your website, we strongly recommend that, when you will insert our recipe suggestion cards in your code, you tell us which products are positionned next to the recipe, so that the recipe showed is contextualized.

> Typically, if the user goes on the tomatoes shelf and they see a recipe suggested to them in-between products, they will expect the recipe to contain tomatoes, or else, why would it be there ?

So to accomodate with the user's expectations, you can pass to the recipe suggestion card the ids of the products directly next to it, which will indicate to our AI that it should search for a recipe that corresponds to those products.

![alt text](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/explanations/suggestion_how.png "Suggestions diagram")

## Which products will be displayed to the user for a recipe ?

Just like the choice of recipe, the choice of which product to display for a given ingredient of a recipe is based on our AI.

For each ingredient of a recipe, our AI will determine a list of products ordered by pertinence for said ingredient, and will return the first product of the list to be displayed to the user:

![alt text](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/productCards.png "Product cards")

The products are of course selected from the product list for the store chosen by the user. Also, if a user tends to always replace the same product by the same other, our AI will learn over time and the product by which the user tends to replace will progressively rank higher in the list ordered by pertinence for the specific ingredient.
