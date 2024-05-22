import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function Like({
                           platform
                       }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/like.png`}
                    text="
<p>
The <code>Like</code> Component shows in several component sush as: 
<br>
    RecipeCar, RecipeDetail
<br/>
</p>"
                    alt="A screenshot of the like button component"
                    caption="like button"
                    imageMaxWidth="250px"
            />
    );
}

export default Like;