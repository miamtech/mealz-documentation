import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function Favorites({
                           platform
                       }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/favorites.png`}
                    text="
<p>
The <code>Favorites</code> Page shows the recipes that a particular user has liked, or hearted.
These recipes are displayed in a list, where you can determine how many columns.
<br/> <br/>
This page is usually standalone, like a tab by itself or in the user's Account Settings.
Additionally, if the user lands on this page without any recipes liked, they can navigate to the Catalog Feature.
</p>"
                    alt="Favorites page"
                    caption="Favorites page with liked recipes"
                    imageMaxWidth="250px"
            />
    );
}

export default Favorites;