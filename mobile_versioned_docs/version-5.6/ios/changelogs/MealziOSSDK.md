---
sidebar_position: 6
---

## Changelog

# 5.4.0
[FEA] Add analytics to Catalog\
[FEA] Add analytics to Favorites\
[FEA] Add analytics to Categories Results\
[FEA] Update analytics on Recipe Card & Like\
[FEA] Update analytics on MyMeals and MyBasket\
[FEA] Update analytics on Store Locator\
[FEA] Update analytics on Basket Entries\
[FEA] Add basket show, filters, and search.results events\
[FEA] Update Mealz Neutral views\
[FIX] Pass redirect into empty Order History page\
[FIX] Dynamic Recipe Details VM does not override recipe\
[FIX] Meal Planner Recipe shows correct number of recipes in basket\
[FIX] Add back button on recipe detail if floating header is empty\
[FIX] Set recipe detail title with recipe title if needed\

# 5.3.0
[FEA] Replaced BasketPreviewVM with MyMealRecipeVM\
[FEA] Mealz handle discount\
[FEA] Update Filters header & make it by default a modal\
[FEA] Use recipeIsUpdating from DynamicRecipeDetailVM to centralize loading for footer & cards\
[FEA] Remove Basket Preview VM\
[FEA] CI automatically updates XCode generated docs\
[FEA] Refactor Recipe Details code blocks\
[FEA] Add order history analytics\
[FEA] Update analytics of recipe detail, products / recipes addition and deletion\
[FEA] Added MyMeals Footer\
[FEA] Add Unavailable Products tag to Recipe Details title \
[FIX] fix setFontStyle duplicate text\
[FIX] Catalog accepts MySpace view config\
[FIX] fix update or remove products in meal planner\
[FIX] Pass redirect into empty Order History page\
[FIX] Dynamic Recipe Details VM does not override recipe\
[FIX] Meal Planner Recipe shows correct number of recipes in basket\

# 5.2.1
[FEA] Add order history analytics\

# 5.2.0
[FEA] Refactor Empty views\
[FEA] Update Recipe Details when opened from Order History page\
[FEA] Add paths to Recipe Details for analytics\
[FEA] Add Recipe Details Order History popup\
[FEA] Update Recipe Details Footer UI\
[FEA] Add Header to Item Selector\
[FEA] Search on Order History\
[FEA] Sponsor now supports logos\
[FEA] Add preferences analytics\
[FIX] CI/CD can now recognize alpha versions\
[FIX] Sponsor Details now does not show errors\
[FIX] Recipe Details & My Space now no longer flashes \
[FIX] load recipe in standalone with criteria\

# 5.1.0
[FEA] Remove depreciated Analytics extension\
[FEA] Recipe Details Header is now dynamic with RecipeDetailsFloatingNavigationProtocol\
[FEA] Order History: Added NowUnavailableProduct\
[FEA] Update UnavailableProduct\
[FEA] Hide Preferences & Filters on Favorites results\
[FEA] Recipe Details Tags now separates Header from Sponsors\
[FEA] Add isADrink tag to Recipe Card for tags\
[FEA] Update Recipe Card code & add isADrink tag\
[FEA] Order History: Added NowUnavailableProduct\
[FEA] Order History: MyMeals Recipe card updated View\
[FEA] Order History: Add tab boilerplate\
[FEA] Order History: Add search bar\
[FEA] Order History: Add previous order card\
[FEA] Order History: Add Order Details page with header\
[FEA] Order History: Order History navigates to Order Details page\
[FEA] Order History: Add Order Details Recipe Card\
[FEA] Order History: Add MySpace\
[FEA] Update Favorites view, add Search bar\
[FIX] MyBasket footer price updates after items are added or replaced\
[FIX] Only when the user arrives on the last recipe in a recipe list will more results be loaded\
[FIX] Catalog refreshes everytime preferences are changed\

# 5.0.0
[FEA] Consolidate UI & NAV modules into this project\
[FEA] GetPriceButton to show price when clicked\
[FEA] ShowRecipeDetailsButton to launch Recipe Details when clicked\
[FEA] Update Recipe card neutral standalone\
[FEA] Update Recipe card neutral loading\
[FIX] Recipe Price properly responds \
[FIX] Pass isExternalId into Mealz Recipe card\


# 4.1.0
[FEA] Text on item selector adapte if it's a search or a replacement\
[FEA] Capacity on Products now formatted as expected\
[FEA] Views on Item Selector Search are now centered\
[FEA] Pressing "Choose a product" on Product in Recipe Details will open Item Selector\
[FEA] MyBasketSwapper default tab is now configurable\
[FEA] Use MyProductData instead of passing BasketEntry\
[FEA] All VMs internal\
[FEA] Toolbar header on Catalog and Catalog Results is now dynamic\
[FEA] Recipe Card now accepts isMealzRecipe for passing in a Recipe Id\
[FEA] Item Selector has custom text for searching for product\
[FIX] Fix concurrency issues between MyProducts and Recipe Details products\
[FIX] Fix issue where product didn't update after replacing\
[FIX] Fix issue where preferences on Catalog did not apply immediately\
[FEA] Update Filters, Preferences, & PreferencesSearch\
[FEA] Catalog Toolbar shows Subtitle of Category\
[FEA] Add mealzOptionSelectedColor\
[FIX] Use Recipe Id to get Recipe Details Footer Price\
[FIX] Title of MyMeals updates as expected\
[FIX] Item Selector uses formatted capacity\
[FEA] After returning from Item Selector, image properly reloads\
[FIX] Item Selector no results title is correct\
[FEA] Add price per unit of mesurement\
