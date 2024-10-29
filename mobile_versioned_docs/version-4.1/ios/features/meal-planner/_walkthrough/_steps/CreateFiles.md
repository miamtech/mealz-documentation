When beginning the integration, we advise creating all the pages first to make the navigation implementation easier.
Each page will have navigation actions (navigate to new page, go back, etc), so having all the ViewControllers or Pages prebuilt will save you some headache.
The files are as follows:

```plaintext
project/
│
└── Miam/
    ├── MealPlanner/
    │   ├── MealPlannerCTAViewController (or MealPlannerCTAViewPage, etc)
    │   ├── MealPlannerFormViewController
    │   ├── MealPlannerResultsViewController
    │   ├── MealPlannerRecipePickerViewController
    │   ├── MealPlannerBasketViewController
    │   └── MealPlannerRecapViewController
// The below should already be implemented if you have added Catalog Feature
    ├── Basket/
    │   └── ItemSelectorViewController
    ├── Catalog/
    │   └── FiltersViewController
    └── General/
        ├── SponsorDetailsViewController
        └── RecipeDetailsViewController
```

With these ViewControllers, its important to know that some pages will need parameters. For example:

<Tabs
defaultValue="uiKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'uiKit' },
{ label: 'SwiftUI', value: 'swiftUI' },
]}>

<TabItem value="uiKit">
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

```swift
class MealPlannerRecipePickerViewController: UIViewController {
    private let indexOfRecipe: Int
    
    init(_ indexOfRecipe: Int) {
        self.indexOfRecipe = indexOfRecipe
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
```
</TabItem>
<TabItem value="swiftUI">

```swift
struct MealPlannerRecipePickerViewController: View {
    private let indexOfRecipe: Int
```
</TabItem>
</Tabs>

Here's a list of the Pages with the parameters needed

```
MealPlannerRecipePickerViewController( indexOfRecipe: Int )
FiltersViewController( filterInstance: FilterInstance, isForMealPlanner: Bool = false ) // We implement this to make navigation easier
RecipeDetailsViewController( recipeId: String, isForMealPlanner: Bool = false ) // We implement this for the guest count
SponsorDetailsViewController( sponsor: Sponsor )
ItemSelectorViewController( recipeId: String )

The other Pages do NOT need parameters
```
