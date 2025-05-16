import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function MySpace({
                       platform
                   }) {
    return (
        <ImageWithText
            url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/my-space.png`}
            text="
<p>
The <code>MySpace</code> Page shows the recipes a user has already like & the orders that a particular user has already purchased with Mealz recipes.
<br/> <br/>
This page can be standalone but is automatically included in the Catalog Journey when the user presses the My Space button in the Cataog toolbar.
Additionally, if the user lands on this page without any previous orders, they can navigate to the Catalog Feature.
</p>"
            alt="My Space page"
            caption="MySpace page"
            imageMaxWidth="250px"
        />
    );
}

export default MySpace;