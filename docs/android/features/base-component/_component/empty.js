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
    Catalog, MyMeal, MyProducts, Prefrences, PrefrenceSearch, ItemSelector, Favorite, SponsorDetail
<br/>
Note that template would be the same but text action trigger by the button will depend one parent component
</p>"
                    alt="A screenshot of the empty component"
                    caption="Example of custom empty state"
                    imageMaxWidth="250px"
            />
    );
}

export default Empty;