import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function BasketTags({
                        platform
                    }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/basketTags.png`}
                    text="
<p>
The <code>Basket Tags</code> is button that shows the recipes that a product is associated with.
It is scrollable, either vertically or horizontally, & when users press on it, the Recipe Details page should launch.
<br/> <br/>
This component is displayed on the products in a user's basket.
</p>"
                    alt="Basket Tag"
                    caption="Basket Tags"
                    imageMaxWidth="300px"
            />
    );
}

export default BasketTags;