import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

`MealPlannerRecipePicker` expects `params: MealPlannerRecipePickerParameters` where you can pass in the default `MealPlannerRecipePickerParameters.`
The `MealPlannerRecipePickerParameters` expects navigation functions & has optional `viewOptions` for customizing views.

The next parameter is the gridConfig, which sets the number of columns. recipe dimensions, & spacing.
It is an instance of `CatalogRecipesListGridConfig.`

The last parameter is the `indexOfReplacedRecipe`, which will set the recipe that will be replaced upon being selected.
For example, if the user selects the second recipe in the `MealPlannerResults` to replace, this recipe will replaced by the new recipe.

You will get this Int from the `MealPlannerResults` page.

#### PreferencesParameters

<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
PreferencesParameters(
    onClosed: { [weak self] in
        guard let strongSelf = self else { return }
        strongSelf.navigationController?.popViewController(animated: true)
    },
    onGoToSearch: { [weak self] in
        guard let strongSelf = self else { return }
        strongSelf.navigationController?.pushViewController(PreferencesSearchViewController(), animated: true)
    })
```
</TabItem>
<TabItem value="swiftUI">

[//]: # (TODO)
```swift
// TODO
```
</TabItem>
</Tabs>

#### CatalogRecipesListGridConfig
If you have already integrated the Catalog Feature, you can reuse the one you've already created for the `CatalogView` & `CatalogResults`.

Of course, if you'd like this page to look different, you can define a new one like below:
```swift
CatalogRecipesListGridConfig(
    numberOfColumns: 2,
    spacing: CGSize(width: 6, height: 6),
    recipeCardDimensions: CGSize(width: 300, height: 340),
    recipeCardFillMaxWidth: true)
```

#### Putting it all together

Now we have all the parameters we need for the `MealPlannerRecipePicker`.

```swift
MealPlannerRecipePicker(
    params: /* the MealPlannerRecipePickerParameters we just made */,
    gridConfig: /* the CatalogRecipesListGridConfig we just made */,
    indexOfReplacedRecipe: indexOfRecipe)
```