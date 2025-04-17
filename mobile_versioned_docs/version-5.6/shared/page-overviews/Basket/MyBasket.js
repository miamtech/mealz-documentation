import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function MyBasket({
                     platform
                 }) {
    return (
        <ImageWithText
            url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/myBasket.png`}
            text="
<p>
The <code>MyBasket</code> Page shows the recipes & products that the user has added to their basket.
</p>"
            alt="A screenshot of the MyBasket page"
            caption="MyBasket page"
            imageMaxWidth="250px"
        />
    );
}

export default MyBasket;