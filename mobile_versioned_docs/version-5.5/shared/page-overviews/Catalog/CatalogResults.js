import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function CatalogResults({
                         platform
                     }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/catalogResults.png`}
                    text="
<p>
The <code>CatalogResults</code> Page shows the recipe results from some sort of user action.
These actions are filtering, searching, or selecting a category.
<br/> <br/>
The <code>CatalogResults</code> Page also has a header, but the Favorites Button is removed.
This is because the Favorites button also navigates to the Results page & we don't wish to provide a double navigation.
</p>"
                    alt="A screenshot of the CatalogResults"
                    caption="CatalogResults showing Halloween Recipes"
                    imageMaxWidth="250px"
            />
    );
}

export default CatalogResults;