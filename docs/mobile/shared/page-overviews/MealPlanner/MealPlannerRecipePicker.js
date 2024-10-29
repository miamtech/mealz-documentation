import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function MealPlannerRecipePicker({
                                platform
                            }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/mealPlannerRecipePicker.png`}
                    text="
<p>
The <code>MealPlannerRecipePicker</code> Page grants the user the opportunity to replace a recipe that was generated for them.
Additionally, they can filter or search on this page.
<br/> <br/>
When the user selects a new recipe, they will be navigated back to the <code>MealPlannerResults</code> page.
</p>"
                    alt="MealPlannerRecipePicker"
                    caption="Miam Neutral Meal Planner Picker page"
                    imageMaxWidth="250px"
            />
    );
}

export default MealPlannerRecipePicker;