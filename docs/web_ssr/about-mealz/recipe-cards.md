---
sidebar_position: 1
---

import ImageSideBySide from '@site/src/components/ImageSideBySide';
import ImageWithCaption from '@site/src/components/ImageWithCaption';

# Recipe cards

The main Mealz feature is giving you access to a recipe card component that you can insert in between products in any shelf of your website. With those recipes appearing in the shelves among the products that the client came to look for, they may be inspired by the recipe and click on it. They will then see all products needed to make that recipe and discover that they can, in a single click, add to their cart all these products !

Here is an example of a recipe card inserted between two products:
<ImageWithCaption
url="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/v3/examples/recipe_between_products.png"
alt="Recipe between products"
caption="Recipe between products"
imageMaxHeight="400px"
/>
<br/>

If the user clicks on the main CTA, the title or the image, a drawer will appear (by default on the right side of the page) to display the list of ingredients needed for the recipe:

<ImageSideBySide
firstUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/v3/examples/recipeDetail1.png"
firstAlt="Details top"
firstCaption="Details top"
firstImageMaxWidth="600px"
secondUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/v3/examples/recipeDetail2.png"
secondAlt="Details bottom"
secondCaption="Details bottom"
secondImageMaxWidth="600px"
/>

The user can then add the products to their cart, either all at once by clicking on the primary CTA, or one by one:

<ImageSideBySide
firstUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/v3/examples/recipeDetailAddedOneProduct.png"
firstAlt="Details with one product added"
firstCaption="Details with one product added"
firstImageMaxWidth="600px"
secondUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/v3/examples/recipeDetailAdded.png"
secondAlt="Details with products added"
secondCaption="Details with products added"
secondImageMaxWidth="600px"
/>
<br/>

They can also replace any product they want by another product that would also suit the ingredient needed for the recipe:

<ImageWithCaption
url="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/v3/examples/replaceItems.png"
alt="Replacing a product"
caption="Replacing a product"
imageMaxHeight="500px"
/>

Once the user has added the recipe to their cart, the component is updated to remind them that the recipe was added:

<ImageWithCaption
url="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/v3/examples/recipeCardAdded.png"
alt="Recipe added"
caption="Recipe added"
imageMaxHeight="400px"
/>
<br/>

For routes and parameters, see [Recipe card](../integration-reference/recipe-card) in the Integration reference.
