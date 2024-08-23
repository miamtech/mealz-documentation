import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function Loading({
                           platform
                       }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/loader.png`}
                    text="
<p>
The <code>Loader</code> Component shows in several component such as: 
<br/>
MyMeal, MyProduct, Catalog, Favorite, BasketPreview, Preference, PreferenceSearch, RecipeDetail, SponsorDetail
<br/> <br/>

</p>"
                    alt="A screenshot of the counter component"
                    caption="Example of custom empty state"
                    imageMaxWidth="250px"
            />
    );
}

export default Loading;