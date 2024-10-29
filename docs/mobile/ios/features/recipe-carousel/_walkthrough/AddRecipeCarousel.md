import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The `RecipeCarousel` has two potential mandatory parameters, a `productId` or `criteria` of type `SuggestionsCriteria`.
Additionally, it expects `RecipeCarouselParameters` that implements navigation functions & has optional `viewOptions` for customizing views.

`RecipeCarousel` also expects a `RecipesCarouselGridConfig` which defines the number of rows, recipe card sizes, & spacing.
The last parameter is `numberOfResults` that the Recipe Carousel should show.

#### RecipeCarouselParameters

<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
RecipeCarouselParameters(
    onShowRecipeDetails: { [weak self] recipeId in
        guard let strongSelf = self else { return }
        strongSelf.navigationController?.pushViewController(RecipeDetailsViewController(recipeId), animated: true)
    }, onRecipeCallToActionTapped: { [weak self] recipeId in
        guard let strongSelf = self else { return }
        strongSelf.navigationController?.pushViewController(MyMealsViewController(), animated: true)
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

#### RecipesCarouselGridConfig
```swift
RecipesCarouselGridConfig(
    numberOfRows: 1,
    spacing: CGSize(width: 6, height: 6),
    recipeCardDimensions: CGSize(width: 200, height: 320))
```

#### Putting it all together

Now we have all the parameters we need for the `RecipeCarousel`.

##### ProductID

When you would like to show recipes relating to a certain product, such as peanut butter, you can pass in just the `productId`.
This will be a String.

```swift
RecipeCarousel(
    params: /* RecipeCarouselParameters we just created */,
    gridConfig: /* RecipesCarouselGridConfig we just created */,
    numberOfResults: 10,
    productId: productId
)
```


##### SuggestionsCriteria

When you would like to show recipes based on the result of a search, such as 'chicken' or products in the user's basket.

For example, all of these products are currently in your basket:
```swift
 let criteria = SuggestionsCriteria(
    shelfIngredientsIds: nil, // ingredients on the shelf, great for search results & lists 
    currentIngredientsIds: nil, // very simialar to shelfIngredientsIds, used for generated recipes from smaller lists of products 
    basketIngredientsIds: ["5319173", "53755728", "53755778", "53755841", "53755837"], // products in basket
    groupId: nil // depreciated, will always be nil
)
```
so 
```swift
RecipeCarousel(
    params: /* RecipeCarouselParameters we just created */,
    gridConfig: /* RecipesCarouselGridConfig we just created */,
    numberOfResults: 10,
    criteria: criteria
)
```

If there is no Recipes returned the default (or your custom) `EmptyProtocol` will appear.