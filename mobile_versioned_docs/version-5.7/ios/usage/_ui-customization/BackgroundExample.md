import ImageSideBySide from '@site/src/components/ImageSideBySide';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You would like to implement a new background, let's say just the color Pink.
First & foremost, you would create a SwiftUI struct that implements the Miam `BackgroundProtocol`.

```swift
import SwiftUI
import MealziOSSDK

@available(iOS 14, *)
public struct DemoBackgroundView: BackgroundProtocol {
    public init() {}
    public func content() -> some View {
        Color.pink
    }
}
```

Next, you would pass that component into the `background` of the `baseViews`.
To pass in your new view, you must pass it inside the `TypeSafeBackground` object first.
This is because each object needs to be known as run time, so to be to support defaults, we wrap our views in an instance of `TypeSafe_`.
This allows for full customizability while still supporting defaults.
Each view will have a corresponding `TypeSafe_`, & the name should correspond to the component (like Background).

```swift
let customBaseViews = BaseViewOptions( // pass new instance of BaseViewOptions
    background: TypeSafeBackground(DemoBackgroundView()) // wrap DemoBackgroundView() in TypeSafe
)
```

Next, we need to pass it to the Catalog Feature

<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
import MealziOSSDK

let customBase = MealzBaseNavCoordinator.Constructor(
    navigationController: navController,
    baseViews: customBaseViews // your new base Views
)

MealPlannerFeatureNavCoordinator(
    baseConstructor: customBase
)
```
</TabItem>
<TabItem value="swiftUI">

```swift
import MealziOSSDK

MealzCatalogFeatureSwiftUI(baseViews: customBaseViews)
```
</TabItem>
</Tabs>

Here is the result when we run our application.
<ImageSideBySide 
firstUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/ios/customization/background.png"
firstAlt="New Background"
firstCaption="New Background on Catalog while loading"
firstImageMaxWidth="250px"
secondUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/ios/customization/background_with_meals.png"
secondAlt="New Background"
secondCaption="New Background on Catalog with Recipes"
secondImageMaxWidth="250px"
/>
<br /> <br />

If you want to see what options you have, you can read our documentation, or directly view the parameters in XCode documentation.
You can hold `option` & select on an object to see the parameters & definition.
For example:

![Show Object Definition](https://storage.googleapis.com/assets.miam.tech/kmm_documentation/ios/customization/object_definition.png "Option with press")
