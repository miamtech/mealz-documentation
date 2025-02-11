import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function MealPlannerCTA({
                            platform
                        }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/mealPlannerCTA.png`}
                    text="
<p>
The <code>MealPlannerCTA</code> is a simple button for launching the MealPlanner Feature.
Of course, you can implement your own custom button or navigation link for launching this feature as well.
<br/> <br/>
</p>"
                    alt="MealPlannerCTA"
                    caption="Miam Neutral Meal Planner Call To Action"
                    imageMaxWidth="300px"
            />
    );
}

export default MealPlannerCTA;