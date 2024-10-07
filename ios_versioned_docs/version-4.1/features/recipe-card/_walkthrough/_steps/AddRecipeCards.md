import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You can add our Standalone Recipe Card into your code like it was any other View or UIView.
We have three different inits, one for a recipeId, Recipe, & SuggestionCriteria.

#### RecipeId: String

When you are displaying one particular recipe & you have the recipeId, you can pass this in:
<Tabs defaultValue="uiKit" groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
import MealzNavModuleIOS

mealzStandaloneRecipeCard = MealzStandaloneRecipeCardUIKit(recipeId: /* your String recipe id */)
// then add it to whatever View you're currently inside
mealzStandaloneRecipeCard.view.addTo(cell, Pin(.all))
```
</TabItem>
<TabItem value="swiftUI">

```swift
import MealzNavModuleIOS

MealzStandaloneRecipeCardSwiftUI(recipeId: /* your String recipe id */)
```
</TabItem>
</Tabs>

#### recipe: Recipe

When you are displaying one particular recipe & you have the Recipe object, you can pass this in:
<Tabs defaultValue="uiKit" groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
import MealzNavModuleIOS
import MiamIOSFramework

mealzStandaloneRecipeCard = MealzStandaloneRecipeCardUIKit(recipe: /* your Recipe object */)
// then add it to whatever View you're currently inside
mealzStandaloneRecipeCard.view.addTo(cell, Pin(.all))
```
</TabItem>
<TabItem value="swiftUI">

```swift
import MealzNavModuleIOS
import MiamIOSFramework

MealzStandaloneRecipeCardSwiftUI(recipe: /* your Recipe object */)
```
</TabItem>
</Tabs>

#### criteria: SuggestionsCriteria

When you want recipes to be generated based on certain criteria, such as other products on the page or the products in your basket, you can use the SuggestionsCriteria.
For example, if you are showing results for the search "Ham", you can take the productIds of the other search results & a recipe including Ham will be shown.

Here's an example of creating a SuggestionsCriteria
```swift
let criteria = SuggestionsCriteria(
    shelfIngredientsIds: [firstProduct.productId ?? "", secondProduct.productId ?? ""], // pass in the productIds of the other items on the page
    currentIngredientsIds: nil, 
    basketIngredientsIds: nil, 
    groupId: nil)
```

<Tabs defaultValue="uiKit" groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
import MealzNavModuleIOS
import MiamIOSFramework

mealzStandaloneRecipeCard = MealzStandaloneRecipeCardUIKit(criteria: /* your SuggestionsCriteria object */)
// then add it to whatever View you're currently inside
mealzStandaloneRecipeCard.view.addTo(cell, Pin(.all))
```
</TabItem>
<TabItem value="swiftUI">

```swift
import MealzNavModuleIOS
import MiamIOSFramework

MealzStandaloneRecipeCardSwiftUI(criteria: /* your SuggestionsCriteria object */)
```
</TabItem>
</Tabs>