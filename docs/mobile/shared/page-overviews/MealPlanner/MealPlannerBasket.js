import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function MealPlannerBasket({
                                     platform
                                 }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/mealPlannerBasket.png`}
                    text="
<p>
The <code>MealPlannerBasket</code> Page is a traditional Basket page (like <code>MyMeals</code>) where the user can update the ingredients for the recipes.
<br/> <br/>
There are two Call To Actions, one labeled for navigating to a Recap page, the other for navigating to the user's Basket.
Of course, where the buttons navigate to (& if both are shown) is completely up to the implementation team.
</p>"
                    alt="MealPlannerBasket"
                    caption="Miam Neutral Meal Planner Basket page"
                    imageMaxWidth="250px"
            />
    );
}

export default MealPlannerBasket;