When beginning the integration, we advise creating all the pages first to make the navigation implementation easier.
Each page will have navigation actions (navigate to new page, go back, etc), so having all the ViewControllers or Pages prebuilt will save you some headache.
The files are as follows:

```plaintext
project/
│
└── Miam/
    ├── Catalog/
    │   ├── CatalogViewController (or CatalogViewPage, etc)
    │   ├── CatalogResultsViewController
    │   ├── FiltersViewController
    │   ├── CatalogSearchViewController
    │   ├── ? PreferencesViewController ?
    │   └── ? PreferencesSearchViewController ?
    ├── Basket/
    │   ├── MyMealsViewController
    │   └── ItemSelectorViewController
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
class ItemSelectorViewController: UIViewController {
    private let recipeId: String
    
    init(_ recipeId: String) {
        self.recipeId = recipeId
        super.init(nibName: nil, bundle: nil)
    }
    
    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
```
</TabItem>
<TabItem value="swiftUI">

```swift
struct ItemSelectorView: View {
    private let recipeId: String
```
</TabItem>
</Tabs>

Here's a list of the Pages with the parameters needed

```
CatalogResultsViewController( categoryId: String?, categoryTitle: String? )
CatalogSearchViewController( filterInstance: FilterInstance )
SponsorDetailsViewController( sponsor: Sponsor )
ItemSelectorViewController( recipeId: String )
// if you DON'T plan on adding Meal Planner Feature in the Future
FiltersViewController( filterInstance: FilterInstance )
RecipeDetailsViewController( recipeId: String )
// if you DO plan on adding Meal Planner Feature in the Future
FiltersViewController( filterInstance: FilterInstance, isForMealPlanner: Bool = false )
RecipeDetailsViewController( recipeId: String, isForMealPlanner: Bool = false )

The other Pages do NOT need parameters
```
