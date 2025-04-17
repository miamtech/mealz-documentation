---
sidebar_position: 1
label: "Walkthrough"
---

import RecipeCarousel from '@site/docs/mobile/shared/component-overviews/RecipeCarousel';
import RecipeDetails from '@site/docs/mobile/shared/page-overviews/GeneralPages/RecipeDetails';
import SponsorDetails from '@site/docs/mobile/shared/page-overviews/GeneralPages/SponsorDetails';
import Prerequisites from '../_shared/Prerequisites.md';
import LinkToCustomization from '../_shared/LinkToCustomization.md';
import TimeIcon from '@site/src/components/TimeIcon';

# Recipe Carousel Walkthrough

Recipe Carousels are used to show Recipes in a horizontal list.
They are be shown to have recipes based off of one product or a criteria of items.

<TimeIcon titleText="Time to read:" timeText="5 minutes" /><br />
<TimeIcon titleText="Time for base implementation:" timeText="1 hour" /><br />
<TimeIcon titleText="Time for full customization:" timeText="2 hours" /><br />

## Prerequisites
<Prerequisites />

## Ingredients

### RecipeCarousel
<RecipeCarousel platform="android"/>

### RecipeDetails
<RecipeDetails platform="android"/>

### SponsorDetails
<SponsorDetails platform="android"/>

[//]: # (## Steps)

[//]: # ()
[//]: # (### 1. Add Recipe Carousel)

[//]: # (<AddRecipeCarousel />)

[//]: # ()
[//]: # (### 2. Create Recipe Details page)

[//]: # (Again, if you've already completed the Catalog Feature, you'll already have the ViewController or page set up.)

[//]: # (You have nothing more to do for this.)

[//]: # ()
[//]: # (The first thing to be done is to create a RecipeDetailsViewController or RecipeDetailsView standalone page.)

[//]: # (The only parameters this page may expect are those related to navigating back to the MyMeals page.)

[//]: # (The navigation to the basket can be ignored as that Call To Action will not be shown as the product is already in the basket.)

[//]: # (<ImplementRecipeDetails />)

[//]: # ()
[//]: # (### 3. Create Sponsor Details page)

[//]: # (Again, if you've already completed the Catalog Feature, you'll already have the ViewController or page set up.)

[//]: # (You have nothing more to do for this.)

[//]: # ()
[//]: # (The first thing to be done is to create a SponsorDetailsViewController or SponsorDetailsView standalone page.)

[//]: # (The only parameters this page may expect are those related to navigating back to the MyMeals page.)

[//]: # (<ImplementSponsorDetails />)

## Customization
<LinkToCustomization />

## Next Steps
If you'd like to provide another useful feature for your users, you can add the `Meal Planner`.
