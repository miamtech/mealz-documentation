import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function MealPlannerRecap({
                               platform
                           }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/mealPlannerRecap.png`}
                    text="
<p>
The <code>MealPlannerRecap</code> Page shows the total financial amount for the recipes that the user added to their basket.
<br/> <br/>
The Call To Action should navigate to their Basket or back to the Catalog Feature.
</p>"
                    alt="MealPlannerRecap"
                    caption="Miam Neutral Meal Planner Recap page"
                    imageMaxWidth="250px"
            />
    );
}

export default MealPlannerRecap;