---
sidebar_position: 1
label: "Walkthrough"
---

import TimeIcon from '@site/src/components/TimeIcon';
import Prerequisites from '@site/docs/android/features/_shared/Prerequisites.md';
import LinkToCustomization from '@site/docs/android/features/_shared/LinkToCustomization.md';
import * as CatalogOverviews from '@site/docs/shared/page-overviews/Catalog/';
import * as BasketOverviews from '@site/docs/shared/page-overviews/Basket/';
import * as GeneralOverviews from '@site/docs/shared/page-overviews/GeneralPages/';

# Catalog Walkthrough

The Catalog feature is the bread & butter of Mealz. 
The Catalog is all of our Recipes, with additional features & options to filter, search, add dietary restrictions, & a whole lot more. 

<TimeIcon titleText="Time to read:" timeText="30 minutes" /><br />
<TimeIcon titleText="Time for base implementation:" timeText="8 hours" /><br />
<TimeIcon titleText="Time for full customization:" timeText="2.5 weeks" /><br />

## Prerequisites
<Prerequisites />

## Ingredients

The Catalog is made up of 8 base pages, with an additional 2 more being optional. Each page has its own functionality & is customizable, so that each component fits the appearance of your application.

### Categories Page
<CatalogOverviews.CatalogView platform="android"/>

### Catalog Results
<CatalogOverviews.CatalogResults platform="android"/>

### Filters
<CatalogOverviews.Filters platform="android"/>

### Catalog Search
<CatalogOverviews.CatalogSearch platform="android"/>

### Recipe Details
<GeneralOverviews.RecipeDetails platform="android"/>

### Sponsor Details
<GeneralOverviews.SponsorDetails platform="android"/>

### My Meals
<BasketOverviews.MyMeals platform="android"/>

### Item Selector
<BasketOverviews.ItemSelector platform="android"/>

### Preferences - Optional
<CatalogOverviews.Preferences platform="android"/>

### Preferences Search - Optional
<CatalogOverviews.PreferencesSearch platform="android"/>

[//]: # (## Steps)

[//]: # ()
[//]: # (### 1. Create Files & ViewControllers/Pages)

[//]: # (<Steps.CreateFiles />)

[//]: # ()
[//]: # (### 2. Implement CatalogView)

[//]: # (<Steps.ImplementCatalogView />)

[//]: # ()
[//]: # (### 3. Implement CatalogResults)

[//]: # (<Steps.ImplementCatalogResults />)

[//]: # ()
[//]: # (### 4. Implement Filters)

[//]: # (<SharedSteps.ImplementFilters />)

[//]: # ()
[//]: # (### 5. Implement CatalogSearch)

[//]: # (<Steps.ImplementCatalogSearch />)

[//]: # ()
[//]: # (### 6. Implement RecipeDetails)

[//]: # (<SharedSteps.ImplementRecipeDetails />)

[//]: # ()
[//]: # (### 7. Implement SponsorDetails)

[//]: # (<SharedSteps.ImplementSponsorDetails />)

[//]: # ()
[//]: # (### 8. Implement MyMeals)

[//]: # (<SharedSteps.ImplementMyMeals />)

[//]: # ()
[//]: # (### 9. Implement ItemSelector)

[//]: # (<SharedSteps.ImplementItemSelector />)

[//]: # ()
[//]: # (### 10. Implement Preferences - Optional)

[//]: # (<Steps.ImplementPreferences />)

[//]: # ()
[//]: # (### 11. Implement PreferencesSearch - Optional)

[//]: # (<Steps.ImplementPreferencesSearch />)

## Customization
<LinkToCustomization />

## Next Steps

After integrating Catalog, you have the bulk of the Miam functionality in your android application. 
However, we also have other features & standalones pages. 
You can integrate a standalone `MyMeals` page, `Favorites` page, or our full feature `Meal Planner`.
