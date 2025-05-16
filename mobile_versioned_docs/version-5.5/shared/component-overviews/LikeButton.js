import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function LikeButton({
                       platform
                   }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/likeButton.png`}
                    text="
<p>
The <code>Like Button</code> is togglable button that allows the user to add the recipe to their 'favorites'.
When the button is pressed, the icon will be full.
<br/> <br/>
This component is displayed on the Catalog & Meal Planner Recipe Cards, as well as Recipe Details.
Additionally, it can also be added to the Basket Recipe Cards (recipes with ingredients).
</p>"
                    alt="Like Button"
                    caption="Like Button untoggled & toggled"
                    imageMaxWidth="200px"
            />
    );
}

export default LikeButton;