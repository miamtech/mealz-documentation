import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function MyMealButton({
                           platform
                       }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/my-meal-button.png`}
                    text="
<p>
The <code>MyMealButton</code> is use only in main catalog page for now 
<br/>
<br/> 
</p>"
                    alt="My meal Button"
                    caption="Example of custom my meal button"
                    imageMaxWidth="250px"
            />
    );
}

export default MyMealButton;