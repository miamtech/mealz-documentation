import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function Counter({
                           platform
                       }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/counter.png`}
                    text="
<p>
The <code>Counter</code> Component shows in several component sush as: 
<br/>
        Products, RecipeDetail, Preferences
<br/> <br/>

</p>"
                    alt="A screenshot of the counter component"
                    caption="Example of custom counter"
                    imageMaxWidth="250px"
            />
    );
}

export default Counter;