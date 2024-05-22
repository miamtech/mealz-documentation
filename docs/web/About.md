---
sidebar_position: 2
---

import ImageSideBySide from '@site/src/components/ImageSideBySide';

# About our library

## Which features can I add to my website using ngMiam

With ngMiam, Mealz provides you a bundle of features that you can add to your website.

- Recipe cards that you can insert in-between products to inspire the client
- A catalog of recipes so your clients have a page on your website where they can search for inspiration
- Reminders of recipes that you can insert in your basket page so the clients can remember from where the products come from


### The recipe cards

The main Mealz feature is giving you access to a recipe card component that you can insert in between products in any shelf of your website. With those recipes appearing in the shelves among the products that the client came to look for, they may be inspired by the recipe and click on it. They will then see all products needed to make that recipe and discover that they can, in a single click, add to their cart all these products !

Here is an example of a recipe card inserted between two products:
![Recipes between products](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/recipe_between_products.png "Recipes between products")
<br/>

If the user clicks on the main CTA, the title or the image, a drawer will appear (by default on the right side of the page) to display the list of ingredients needed for the recipe:

<ImageSideBySide 
  firstUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/recipeDetail1.png"
  firstAlt="Details top"
  firstCaption="Details top"
  firstImageMaxWidth="600px"
  secondUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/recipeDetail2.png"
  secondAlt="Details bottom"
  secondCaption="Details bottom"
  secondImageMaxWidth="600px"
/>
<br/><br/>
<ImageSideBySide 
  firstUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/recipeDetail1-lg.png"
  firstAlt="Details top on a large screen"
  firstCaption="Details top on a large screen"
  firstImageMaxWidth="600px"
  secondUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/recipeDetail2-lg.png"
  secondAlt="Details bottom on a large screen"
  secondCaption="Details bottom on a large screen"
  secondImageMaxWidth="600px"
/>
<br/><br/>
<ImageSideBySide 
  firstUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/recipeDetail1-sm.png"
  firstAlt="Details top on a small screen"
  firstCaption="Details top on a small screen"
  firstImageMaxWidth="600px"
  secondUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/recipeDetail2-sm.png"
  secondAlt="Details bottom on a small screen"
  secondCaption="Details bottom on a small screen"
  secondImageMaxWidth="600px"
/>
<br/><br/>

The user can then add the products to their cart, either all at once by clicking on the primary CTA, or one by one:
<div>
  <img src="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/recipeDetailAdded.png" title="Details with products added" alt="Details with products added" style={{maxWidth: '600px'}}/>
</div>
<br/>

They can also replace any product they want by another product that would also suit the ingredient needed for the recipe:
<div>
  <img src="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/replaceItems.png" title="Replacing a product" alt="Replacing a product" style={{width: '600px'}}/>
  <img src="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/replaceItems-lg.png" title="Replacing a product large" alt="Replacing a product large" style={{width: '600px'}}/>
  <img src="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/replaceItems-sm.png" title="Replacing a product small" alt="Replacing a product small" style={{width: '600px'}}/>
</div>
<br/>

Once the user has added the recipe to their cart, the component is updated to remind them that the recipe was added:

![Recipe added](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/recipeCardAdded.png "Recipe added")
<br/>

### The recipe catalog 

The other main feature Mealz offers is the [catalog](#the-recipe-catalog):

![Catalog](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/page-overviews/recipeCatalog.png "Catalog")

The catalog displays the recipes available on your website in cards that work exactly the same as the cards you can inject in the shelves of your website. In the catalog, the recipes are grouped in categories, which you can create and arrange in our back-office.

When the user clicks on the title of a category or on the link next to it, they will see the recipes inside the category this time in a list view:

![Catalog list](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/page-overviews/catalogList.png "Catalog list")
<br/>

The same list view is used to display recipes if the user uses the search bar in the header of the catalog, or the filters:

![Catalog list search](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/page-overviews/recipeCatalogSearch.png "Catalog list search")
<br/>

If the user clicks on the top right button "Favorites" ("Favoris"), they will see the list of recipes they have added to their favorites:

![Catalog favorites](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/page-overviews/favorites.png "Catalog favorites")
<br/>

Finally, if any recipes has been added to the user's cart, a button appears at the bottom displaying the number of recipes currently in the cart. When the user clicks on this button, a drawer appears displaying the list of recipes in the cart:

![Basket preview](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/basketPreview.png "Basket preview")
<br/>

### The recipe reminders

To complement the other two features which lets the users add product to their cart through recipes, Mealz gives you another component, the [recipe-tags](#recipe-tags) component, to remind the user why a product is in their basket

Imagine your cart page looks like this:

![alt text](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/fakeCart.png "fake cart")

If you insert the recipe-tags component into each product component of your cart, you may have something that looks like this:

<ImageSideBySide 
  firstUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/fakeCartWithTags.png"
  firstAlt="Fake cart with tags"
  firstCaption="Closed"
  firstImageMaxWidth="600px"
  secondUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/fakeCartWithTagsOpen.png"
  secondAlt="Fake cart with tags open"
  secondCaption="Opened"
  secondImageMaxWidth="600px"
/>
<br/><br/>

If you don't like the look, the component can also be a small tag that could for example look like this:

<ImageSideBySide 
  firstUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/fakeCartWithTagsReduced.png"
  firstAlt="Fake cart with reduced tags"
  firstCaption="Closed"
  firstImageMaxWidth="600px"
  secondUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/fakeCartWithTagsReducedOpen.png"
  secondAlt="Fake cart with reduced tags open"
  secondCaption="Opened"
  secondImageMaxWidth="600px"
/>
<br/><br/>


## How the recipes displayed in the cards are chosen
We have developped the concept of our recipe cards by following this goal:
> Display the right recipe, at the right time, to the right person.

To achieve this, we have developped a solution based on Artificial Intelligence which is capable of finding the best recipes to show to one client, based on their shopping habits and on products displayed next to the recipe card.

So, while you could in theory decide precisely which recipe to display on each and every page of your website, we strongly recommand that, when you will insert our recipe suggestion cards in your code, you tell us which products are positionned next to the recipe, so that the recipe showed is contextualized.

> Typically, if the user goes on the tomatoes shelf and they see a recipe suggested to them in-between products, they will expect the recipe to contain tomatoes, or else, why would it be there ?

So to accomodate with the user's expectations, you can pass to the recipe suggestion card the ids of the products directly next to it, which will indicate to our AI that it should search for a recipe that corresponds to those products.

![alt text](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/explanations/suggestion_how.png "Suggestions diagram")

## Which products will be displayed to the user for a recipe ?

Just like the choice of recipe, the choice of which product to display for a given ingredient of a recipe is based on our AI.

For each ingredient of a recipe, our AI will determine a list of products ordered by pertinence for said ingredient, and will return the first product of the list to be displayed to the user:

![alt text](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/examples/productCards.png "Product cards")

The products are of course selected from the product list for the store chosen by the user. Also, if a user tends to always replace the same product by the same other, our AI will learn over time and the product by which the user tends to replace will progressively rank higher in the list ordered by pertinence for the specific ingredient.
