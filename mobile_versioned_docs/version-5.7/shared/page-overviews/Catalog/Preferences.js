import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function Preferences({
                          platform
                      }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/preferences.png`}
                    text="
<p>
The <code>Preferences</code> Page gives the user the option to set restrictions on recipes based on certain criteria.
They can select by dietary restrictions, equipment, certain food items they dislike, & how many people they're cooking for.
<br/> <br/>
After the user selects the CTA with their settings, they will be navigated back to the <code>CatalogView</code> page.
The page will reload with their settings & they will see the recipes corresponding to their settings.
</p>"
                    alt="A screenshot of the Preferences page"
                    caption="Preferences"
                    imageMaxWidth="250px"
            />
    );
}

export default Preferences;