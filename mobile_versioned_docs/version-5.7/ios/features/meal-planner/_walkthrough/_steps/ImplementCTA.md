import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

First things first, you'll need a Call To Action to launch the Meal Planner.
You can create your own button, or implement our protocol `MealPlannerCTA`.
`MealPlannerCTA` expects a navigation function that takes you to the MealPlannerForm.

#### MealPlannerCTA

```swift
@available(iOS 14, *)
public protocol MealPlannerCTAProtocol {
    associatedtype Content: View
    @ViewBuilder func content(
        onTapGesture: @escaping () -> Void
    ) -> Content
}
```

<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">

```swift
MiamNeutralMealPlannerCallToAction() { [weak self] in
    guard let strongSelf = self else { return }
    strongSelf.navigationController?.pushViewController(MealPlannerFormViewController(), animated: true)
}
```
</TabItem>
<TabItem value="swiftUI">

[//]: # (TODO)
```swift
// TODO
```
</TabItem>
</Tabs>

#### CatalogView

Additionally, the `CatalogView` has infrastructure to support launching the Meal Planner.
To add the MiamNeutral CTA, or your custom CTA, it is quite simple. 

First, you'll need to add a callback to the `onLaunchMealPlanner` parameter in the `CatalogParameters`.
For example:

```swift
...
onPreferencesTapped: /* your existing code */,
onLaunchMealPlanner: {
    navigationController?.pushViewController(MealPlannerFormViewController(), animated: true)
},
onMealsInBasketButtonTapped: /* your existing code */,
```

Next, you'll need to update the `viewOptions` of the `CatalogParameters` to support the Meal Planner.

```swift
...
onMealsInBasketButtonTapped: /* your existing code */,
viewOptions: CatalogViewOptions(useMealPlanner: true)
```

To add your custom CTA, you can ensure that it implements `MealPlannerCTAProtocol` & pass it into the `viewOptions`.

```swift
...
onMealsInBasketButtonTapped: /* your existing code */,
viewOptions: CatalogViewOptions(
    useMealPlanner: true,
    mealPlannerCTA: TypeSafeMealPlannerCTA(YourCustomCTA())
)
```
