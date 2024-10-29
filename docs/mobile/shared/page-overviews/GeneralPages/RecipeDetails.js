import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function RecipeDetails({
                           platform
                       }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/recipeDetails.png`}
                    text="
<p>
The <code>RecipeDetails</code> Page shows the information, ingredients, & steps for the recipe.
Optionally, the user can add the item to their basket from the footer.
<br/> <br/>
If the user adds the recipe to their basket, they are navigated to their Miam <code>MyMeals</code> or Basket.
Otherwise, they can just navigate back to the Page they launched from.
</p>"
                    alt="A screenshot of the Recipe Details page"
                    caption="Recipe Details of Carrot Soup"
                    imageMaxWidth="250px"
            />
    );
}

export default RecipeDetails;