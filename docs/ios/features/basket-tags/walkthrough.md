---
sidebar_position: 1
label: "Walkthrough"
---

import BasketTags from '@site/docs/shared/component-overviews/BasketTags';
import RecipeDetails from '@site/docs/shared/page-overviews/GeneralPages/RecipeDetails';
import SponsorDetails from '@site/docs/shared/page-overviews/GeneralPages/SponsorDetails';
import Prerequisites from '@site/docs/ios/features/_shared/Prerequisites.md';
import LinkToCustomization from '@site/docs/ios/features/_shared/LinkToCustomization.md';
import TimeIcon from '@site/src/components/TimeIcon';
import AddBasketTags from './_walkthrough/AddBasketTags.md'
import ImplementSponsorDetails from '@site/docs/ios/features/_shared/_steps/ImplementSponsorDetails.md';
import ImplementRecipeDetails from '@site/docs/ios/features/_shared/_steps/ImplementRecipeDetails.md';

# Basket Tags Walkthrough

Basket Tags are used on a product in the user's basket to show the recipes associated to that product.

<TimeIcon titleText="Time to read:" timeText="10 minutes" /><br />
<TimeIcon titleText="Time for base implementation:" timeText="1 hour" /><br />
<TimeIcon titleText="Time for full customization:" timeText="1 day" /><br />

## Prerequisites
<Prerequisites />

## Ingredients

### BasketTag
<BasketTags platform="ios"/>

### RecipeDetails
<RecipeDetails platform="ios"/>

### SponsorDetails
<SponsorDetails platform="ios"/>

## Steps

### 1. Add Basket Tag to your product
<AddBasketTags />

### 2. Create Recipe Details page
Again, if you've already completed the Catalog Feature, you'll already have the ViewController or page set up.
You have nothing more to do for this.

The first thing to be done is to create a RecipeDetailsViewController or RecipeDetailsView standalone page.
The only parameters this page may expect are those related to navigating back to the MyMeals page.
The navigation to the basket can be ignored as that Call To Action will not be shown as the product is already in the basket.
<ImplementRecipeDetails />

### 3. Create Sponsor Details page
Again, if you've already completed the Catalog Feature, you'll already have the ViewController or page set up.
You have nothing more to do for this.

The first thing to be done is to create a SponsorDetailsViewController or SponsorDetailsView standalone page.
The only parameters this page may expect are those related to navigating back to the MyMeals page.
<ImplementSponsorDetails />

## Customization
<LinkToCustomization />

## Next Steps

After integrating Basket Tags, you can show the recipes associted with your ingredients.
If you'd like to provide another useful feature for your users, you can add the `Recipe Carousel`.
