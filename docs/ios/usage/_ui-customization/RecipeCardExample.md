import ImageSideBySide from '@site/src/components/ImageSideBySide';

Let's look at a more complex example, a new RecipeCard for the Catalog View.
The RecipeCard has data passed into it that you'll need to handle & work with.

## CatalogRecipeCardProtocol

First & foremost, you would create a SwiftUI struct that implements the Miam `CatalogRecipeCardProtocol`.

This is the protocol:

```swift
/**
 A protocol defining the necessary parameters for the CatalogRecipeCard.
 
 - recipeCardDimensions: CGSize -> the width & height of the recipe card
 - recipe: Recipe -> The Recipe object of the current Recipe Card
 - isCurrentlyInBasket: Bool -> Boolean on whether the Recipe is currently in the basket. This can change the CTA text
 - onAddToBasket: (String) -> Void: A closure that executes the function in the "Call To Action" of the recipe card. This is usally "add to basket", so the navigation is to the Basket
 - onShowRecipeDetails: (String) -> Void: A closure that opens the RecipeDetails, passing in the recipeId

 */
@available(iOS 14, *)
public protocol CatalogRecipeCardProtocol {
    associatedtype Content: View
    @ViewBuilder func content(
        recipeCardDimensions: CGSize,
        recipe: Recipe,
        isCurrentlyInBasket: Bool,
        onAddToBasket: @escaping (String) -> Void,
        onShowRecipeDetails: @escaping (String) -> Void
    ) -> Content
}
```

## Extend the protocol

To implement your own version, you'll just need to extend the protocol & conform to it by adding the `content` func.

```swift
import SwiftUI
import MiamIOSFramework
import miamCore // we need this as the Recipe object is defined in miamCore

@available(iOS 14, *)
public struct DemoCatalogRecipeCardView: CatalogRecipeCardProtocol {
    public init() {}
    public func content(
        recipeCardDimensions: CGSize,
        recipe: Recipe,
        isCurrentlyInBasket: Bool,
        onAddToBasket: @escaping (String) -> Void,
        onShowRecipeDetails: @escaping (String) -> Void
    ) -> some View {
        EmptyView() // this will become your imp
    }
}
```

## Let's add some content

Now, instead of showing an EmptyView, we should actually style our `CatalogRecipeCard`.
I've added a very simple implementation with a green background for reference:

```swift
@available(iOS 14, *)
public struct DemoCatalogRecipeCardView: CatalogRecipeCardProtocol {
    public init() {} // if your views are in separate package like ours, make sure you have a public init
    public func content(
        recipeCardDimensions: CGSize,
        recipe: Recipe,
        isCurrentlyInBasket: Bool,
        onAddToBasket: @escaping (String) -> Void,
        onShowRecipeDetails: @escaping (String) -> Void
    ) -> some View {
        VStack {
            ZStack(alignment: .topTrailing) { // image & like button
                AsyncImage(url: recipe.pictureURL) { image in
                    image
                        .resizable()
                        .aspectRatio(contentMode: .fill)
                        .frame(minWidth: 0, maxWidth: recipeCardDimensions.width, maxHeight: 150)
                }
                LikeButton( // there are other parameters you can change to customize
                    likeButtonInfo: LikeButtonInfo(recipeId: recipe.id)
                ).padding(10)
            }
            .frame(height: 150)
            Text(recipe.title)
                .lineLimit(2)
            if !isCurrentlyInBasket { // button to add to basket if not here
                Button {
                    onAddToBasket(recipe.id)
                } label: {
                    Text(Localization.recipe.add.localised)
                }
            }
        }
        .onTapGesture { onShowRecipeDetails(recipe.id) } // tap entire card to see details
        .frame(width: recipeCardDimensions.width, height: recipeCardDimensions.height)
        .background(Color.green).cornerRadius(10)
    }
}
```

## Add it to our CatalogPackageRow on the CatalogView

Next, you would pass that component into the `viewOptions` of the `CatalogPackageRowParameters` for the `CatalogView` page.
The `CatalogPackageRowParameters` is separate than the `CatalogParameters` because we separate out the functionality of the overall page & showing the packages.
`CatalogView` shows packages while `CatalogResults` shows recipes list, so you'd need to implement a similar solution there in the `CatalogRecipesListParameters`.
To pass in your new view, you must pass it inside the `TypeSafeCatalogRecipeCard` object first, like we did previously with background.


```swift
 CatalogPackageRowParameters(
    actions: /* */,
    viewOptions: CatalogPackageRowViewOptions(
        recipeCard: TypeSafeCatalogRecipeCard(DemoCatalogRecipeCardView())
    )
)
```

Here is the result when we run our application.
<ImageSideBySide
firstUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/ios/customization/demoRecipeCard.png"
firstAlt="New CatalogRecipeCard"
firstCaption="New CatalogRecipeCard on Catalog, one already added to cart"
firstImageMaxWidth="250px"
secondUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/ios/customization/demoRecipeCardList.png"
secondAlt="New CatalogRecipeCard"
secondCaption="New CatalogRecipeCard on CatalogResults"
secondImageMaxWidth="250px"
/>
<br /> <br />
