import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function MyMeals({
                           platform
                       }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/myMeals.png`}
                    text="
<p>
The <code>MyMeals</code> Page shows the recipes that the user has added to their basket.
Additionally, it includes the products that make up that recipe.
They can change the amount of products, change the product, or even change the number of guests.
<br/> <br/>
The user just navigates back to the Page they launched from.
</p>"
                    alt="A screenshot of the My Meals page"
                    caption="My Meals with a recipe & ingredients"
                    imageMaxWidth="250px"
            />
    );
}

export default MyMeals;