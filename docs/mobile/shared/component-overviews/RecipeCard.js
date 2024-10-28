import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function RecipeCard({
                        platform
                    }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/recipeCard.png`}
                    text="
<p>
The <code>Recipe Card</code> is displayable button that launches the Recipe Details page when pressed.
It is used on the Catalog & other features, but can also be used standalone.
<br/> <br/>
The Standalone Recipe Card is ideal for product search results as well as your product catalog.
</p>"
                    alt="Recipe Card"
                    caption="Recipe Card"
                    imageMaxWidth="300px"
            />
    );
}

export default RecipeCard;