import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function Preferences({
                         platform
                     }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/preferencesSearch.png`}
                    text="
<p>
The <code>PreferencesSearch</code> Page gives the user the option to search up for certain food items they dislike.
For example, they may dislike mushrooms, so they can search for mushrooms & select that option.
From that point forward, recipes with mushrooms will not appear.
<br/> <br/>
After the user selects food item from their search, they will be navigated back to the <code>Preferences</code> page.
Here, they can adjust their other settings.
</p>"
                    alt="A screenshot of the Preferences Search page"
                    caption="Searching for poulet (chicken)"
                    imageMaxWidth="250px"
            />
    );
}

export default Preferences;