import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function ItemSelector({
                           platform
                       }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/itemSelector.png`}
                    text="
<p>
The <code>ItemSelector</code> Page shows other products that the user can replace their current product for.
<br/> <br/>
When the user selects the product they are selecting, they should be navigated back to where they launched from.
</p>"
                    alt="A screenshot of the Item Selector page"
                    caption="Item Selector for Menguy's Peanut Butter"
                    imageMaxWidth="250px"
            />
    );
}

export default ItemSelector;