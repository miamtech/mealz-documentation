---
sidebar_position: 1
---

import ImageSideBySide from '@site/src/components/ImageSideBySide';

# Recipe cards

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

For routes and parameters, see [Recipe card](../integration-reference/recipe-card) in the Integration reference.
