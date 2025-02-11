import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function CatalogSearch({
                     platform
                 }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/catalogSearch.png`}
                    text="
<p>
The <code>CatalogSearch</code> Page gives the user the option to search for specific recipes or ingredients.
<br/> <br/>
After the user selects the CTA, they will be navigated to the <code>CatalogResults</code> page & this page will be deleted from the navigation stack.
</p>"
                    alt="A screenshot of the Catalog Search page"
                    caption="Searching Mozzarella"
                    imageMaxWidth="250px"
            />
    );
}

export default CatalogSearch;