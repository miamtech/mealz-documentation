import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function MealPlannerResults({
                             platform
                         }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/mealPlannerResults.png`}
                    text="
<p>
The <code>MealPlannerResults</code> Page shows the user the results of their recent query.
All of the options will in total meet their criteria of budget based on the number of people.
<br/> <br/>
If the user selects the 'replace' (remplacer) button, they will be navigated to the <code>MealPlannerRecipePicker</code>.
When the user selects the CTA, they will be navigated to the <code>MealPlannerBasket</code> page where the recipes will be added to their basket.
</p>"
                    alt="MealPlannerResults"
                    caption="Miam Neutral Meal Planner Results page"
                    imageMaxWidth="250px"
            />
    );
}

export default MealPlannerResults;