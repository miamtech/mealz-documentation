import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function CatalogView({
platform
}) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/catalogView.png`}
                    text="
<p>
The Categories Page, or <code>CatalogView</code>, is the landing page for our Catalog Feature.
This page shows different categories of recipes that are set & defined by your or our team in the Miam Studio.
A category is a list of recipes that have some theme, such as Halloween recipes or Vegetarian recipes.
Each list of recipes has a See All button that will navigate to that category in the CatalogResults Page.
<br/> <br/>
Additionally, being the landing page, the header of the <code>CatalogView</code> contains the navigation to the other pages.
There are buttons to the <code>Filters</code> & <code>CatalogSearch</code> Page, & optionally the <code>Preferences</code> & <code>PreferencesSearch</code> Pages.
There is also a button to search for all the Recipes the user has favorited that are available at this specific location.
Because the recipes shown in the Catalog are only available at this store, these results will be different from the independent Favorites page.
<br/> <br/>
A Call to Action for Mealz's <code>Meal Planner</code> feature can also be added to this page. 
</p>"
                    alt="A screenshot of the CatalogView"
                    caption="CatalogView showing various recipe categories"
                    imageMaxWidth="250px"
            />
    );
}

export default CatalogView;