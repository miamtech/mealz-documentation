import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function RecipeCarousel({
                        platform
                    }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/recipeCarousel.png`}
                    text="
<p>
The <code>Recipe Carousel</code> is horizontal scrollable list of recipes that are connected to a product or a criteria.
For example, the Recipe Carousel could be used when a user searches up 'tomato', or it could be used with one item (like peaunut butter).
</p>"
                    alt="Recipe Carousel"
                    caption="Recipe Carousel for Mozzarella"
                    imageMaxWidth="300px"
            />
    );
}

export default RecipeCarousel;