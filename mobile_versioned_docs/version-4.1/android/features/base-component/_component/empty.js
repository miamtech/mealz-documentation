import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function Empty({
                           platform
                       }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/empty.png`}
                    text="
<p>
The <code>Empty</code> Component shows in several component sush as: 
<br>
    Catalog, MyMeal, MyProducts, Preferences, PreferenceSearch, ItemSelector, Favorite, SponsorDetail
<br/>
Note that the template may be the same but the existence of the button depends on the parent component.
</p>"
                    alt="A screenshot of the empty component"
                    caption="Example of custom empty state"
                    imageMaxWidth="250px"
            />
    );
}

export default Empty;