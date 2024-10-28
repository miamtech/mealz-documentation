import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Now, you'll need to add a LikeButton to your custom components. 
If you are only using MiamNeutral custom components, you can ignore this part. 
MiamNeutral already implements LikeButton on all of it's components.

#### LikeButton Component

The LikeButton component takes many parameters, but only one is mandatory, the `recipeId`.
On all pages that have a LikeButton (RecipeCard, RecipeDetails, etc), this will be freely available.

To create a LikeButton, here is all you need to do:

```swift
LikeButton(
    likeButtonInfo: LikeButtonInfo(recipeId: recipe.id)
)
```

#### LikeButtonInfo

Realistically, it is one line, but if you would like to customize the LikeButton, these are your options:

```swift
public struct LikeButtonInfo {
    public let recipeId: String // id of the current Recipe
    public let likedIcon: Image // Icon to pass if isLiked is true
    public let unlikedIcon: Image // Icon to pass if isLiked is false
    public let iconSize: CGSize // size of the icons
    public let backgroundSize: CGSize // size of the entire button
    public let backgroundColor: Color // color of the background
    public let backgroundShape: AnyShape // Shape that the background is
```

#### Sample Customized LikeButton

Here's an (ugly) example of a custom LikeButton.
```swift
LikeButton(
    likeButtonInfo: LikeButtonInfo(
        recipeId: recipe.id,
        likedIcon: Image.miamImage(icon: .caret),
        unlikedIcon: Image.miamImage(icon: .cart),
        iconSize: CGSize(width: 20, height: 20),
        backgroundSize: CGSize(width: 25, height: 25),
        backgroundColor: Color.red,
        backgroundShape: AnyShape(Rectangle())
    )
).padding(10)
```

![Custom LikeButton](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/ios/customization/customLikeButton.png)
