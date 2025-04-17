import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function MealPlannerForm({
                            platform
                        }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/mealPlannerForm.png`}
                    text="
<p>
The <code>MealPlannerForm</code> Page gives the user the option to set their budget, number of guests, & number of meals.
When selected, the Mealz API will be queried & the available recipes will be returned to the following page.
<br/> <br/>
After the user selects the CTA, they will be navigated to the <code>MealPlannerResults</code> page where they can see the results.
</p>"
                    alt="MealPlannerForm"
                    caption="Miam Neutral Meal Planner Form page"
                    imageMaxWidth="250px"
            />
    );
}

export default MealPlannerForm;