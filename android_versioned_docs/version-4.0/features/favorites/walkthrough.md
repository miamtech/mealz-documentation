---
sidebar_position: 1
label: "Walkthrough"
---

import Favorites from '@site/docs/shared/page-overviews/GeneralPages/Favorites';
import LikeButton from '@site/docs/shared/component-overviews/LikeButton';
import Prerequisites from '../_shared/Prerequisites.md';
import LinkToCustomization from '../_shared/LinkToCustomization.md';
import TimeIcon from '@site/src/components/TimeIcon';

# Favorites Walkthrough

The Favorites feature is the standalone page where users see their liked recipes.

<TimeIcon titleText="Time to read:" timeText="10 minutes" /><br />
<TimeIcon titleText="Time for base implementation:" timeText="2 hours" /><br />
<TimeIcon titleText="Time for full customization:" timeText="4 hours" /><br />

## Prerequisites
<Prerequisites />

#### Enable Like Functionality

Inside your `MealzManager`, you'll need to ensure that the like functionality is enabled. 
By default, `setEnableLike` is set to TRUE.
However, if it was previously turned off, or you would like to be explicit, you can add this code:
```kotlin
Mealz.user.setEnableLike(isEnable: true)
```

## Ingredients

### Favorites Page
<Favorites platform="android"/>

### Like Button
<LikeButton platform="android"/>

[//]: # (## Steps)

[//]: # ()
[//]: # (### 1. Create Standalone page)

[//]: # (<CreateFavoritesPage />)

[//]: # ()
[//]: # (### 2. Add LikeButton to your components)

[//]: # (<AddLikeButton />)

## Customization
<LinkToCustomization />

## Next Steps

After integrating Favorites, you have a standalone page for your users, most likely in their Account.
If you'd like to add another Miam feature to their Account, you can integrate the standalone `MyMeals` page.
Additionally, if you'd like to provide another useful feature for your users, you can add `Meal Planner`.
