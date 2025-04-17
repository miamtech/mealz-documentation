import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function Filters({
                            platform
                        }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/filters.png`}
                    text="
<p>
The <code>Filters</code> Page gives the user the option to sort by recipe difficulty, price per person, & time to cook.
As the user selects different options, the Call To Action button will update with the corresponding number of recipes available.
<br/> <br/>
After the user selects the CTA, they will be navigated to the <code>CatalogResults</code> page & this page will be deleted from the navigation stack.
</p>"
                    alt="A screenshot of the Filters page"
                    caption="Filters options"
                    imageMaxWidth="250px"
            />
    );
}

export default Filters;