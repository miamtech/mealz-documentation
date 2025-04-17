---
sidebar_position: 6
---

## Changelog

[Fix] reset item selector searched String 

# 5.4.0
  
[FEA] mealz analytics can be disable  
[FEA] Update filtres text  
[FEA] Add analytics to Catalog  
[FEA] Add analytics to Favorites  
[FEA] Add analytics to Categories Results  
[FEA] Update analytics on Recipe Card  
[FEA] Update analytics on MyMeals and MyBasket  
[FEA] Update analytics on Store Locator  
[FEA] Update analytics on Basket Entries  
[FEA] Update analytics lib to 4.2.0, add basket show, filters, and search  
[FIX] correction add many products for marmiton  
[FIX] fix tests libraries declaration  
[FIX] Basket syncro send a copy of the product to push instead of actual one  
[FIX] iOS Test

# 5.3.0
  
[FEA] Add filters title localization  
[FEA] Add recipeIsUpdating to DynamicRecipeDetailVM to centralize loading for footer & cards  
[FEA] Replaced BasketPreviewVM with MyMealRecipeVM  
[FEA] Remove dead BasketPreview code  
[FEA] Mealz handeling discount  
[FIX] Remove recipe with mutual product now remove correctly product  
[FIX] Revert page size & page number parameters  
[FIX] Meal Planner replace recipes filters based on main-dish & price  
[FIX] Meal Planner replace recipes search reverts when search is empty  
[FIX] Changed french wording for order history  
[FIX] Price uses locale  
[FIX] My Meal Number of guest update  
[FIX] Meal Planner footer appears as expected  
[FIX] Meal Planner Recipe shows correct number of recipes in basket  
[FIX] Discounted Product count  
[FIX] Increase time of basket listener debouncers

# 5.2.3
  
[FIX] Adding items that time out will automatically be set to Out of Stock  
[FIX] Upgrade mealz-shared-analytics to v4  
[FEA] Update analytics of recipe detail, products / recipes addition and deletion  
[FEA] Add localisation for MyMeal "See my basket" bottom bar  
[FEA] Update analytics of recipe detail, products / recipes addition and deletion  
[FEA] Prices for products comes from basket entry  
[FEA] Localization for Unavailable Products in Recipe Details  
[FIX] Is Available message accounts for authless user  
[FIX] Remove filter[search] from the recipes/search route  
[FIX] Item Selector VM uses ShouldStopProcessAndRedirectUseCase instead of store selector  
[FIX] Item has price per unit text

# 5.2.1
  
[FEA] Add analytics to order history  
[FIX] update search route parameters  
[FIX] basket synchronization Ignore and add recipe  
[FIX] basket synchro add mutual product  
[FIX] basket synchro transfer basket

# 5.2.0
  
[FEA] Updated empty texts & image  
[FEA] Recipe : Added text assets  
[FEA] Remove recipe Status from model  
[FEA] Remove unnecessary posID from Basket routes  
[FEA] Item now has sponsored attribute  
[FEA] Favorites page has search functionality  
[FEA] Added Order history field to Recipe  
[FEA] Added MealzPage to begin sending path for PageView events  
[FEA] Open Recipe Details function to add all remaining items to the basket  
[FEA] Add search to Order History  
[FEA] Add LOGO to sponsor blocks  
[FEA] Update search endpoint on recipes  
[FEA] Update My Meals Button text  
[FEA] Recipe Details uses current basket to know if recipe has been added  
[FEA] rework on basket synchronization

# 5.1.1
  
[FIX] Avoid deletion in productView model when product is lock  
[FIX] Fix basket Reset after comfirm payment  
[FIX] CI/CD can now recognize alpha versions  
[FIX] Pull request CI/CD didn't trigger  
[FIX] Basket Syncro handle store change  
[FIX] fix ignored product not removed from retailer basket

# 5.1.0
  
[FEA] isInBasket getter on dynamic recipe detail  
[FEA] Added a function on the Recipe Details to check if a redirection is needed, if so the view
model will then execute a callback  
[FEA] New sendBasketToMealz standalone function in Mealz.basket that will manually update the Mealz
basket without needing a subscriber  
[FEA] Order History Feature: Added text assets  
[FEA] Order History Feature: Added image assets  
[FEA] Order History Feature: Added color assets  
[FEA] Unavailble product can be replaced  
[FEA] New setForceStoreUpdateCallBack in Mealz object  
[FEA] Add updatedAt field on basket  
[FEA] Add custom serializer for local date  
[FEA] Fetch tag with recipe, new getter isADrink on Recipe  
[FEA] Use mealz-shared-analytics  
[FEA] Add text asset for recipe flap  
[FEA] Add new relationship recipe-status to recipe  
[FEA] Desactivate recipe are avaliable in history, favorite and current basket  
[FEA] Universal link management to merge external baskets    
[FEA] Remove confirmed attribute from basket  
[FEA] Add affiliation on basket and Getter use case  
[FEA] Auto Transfert Affiliate basket affter getting current  
[FEA] Add companion events to Store Locator  
[FEA] Link affiliation and analytics  
[FEA] Add new OrderHistoryVm  
[FIX] Recipe Details Footer properly loads after changing guest quantity  
[FIX] Recipe Details Footer loads after immediately selecting a store  
[FIX] iOS Works with Euro symbol for price per person  
[FIX] Mealz not init error updated indicating if store not selected yet  
[FIX] ShowRecipeCard button still appeared when Recipe did not exist

# 5.0.0
  
[FEA] Rework recipePricingViewModel  
[FEA] Restructure recipePricingViewModel for GetPriceButton  
[FEA] Remove deprecated selectedBasketEntryItem from BaskeEntry  
[FEA] New RecipeDetailButtonViewModel  
[FEA] Restructure RecipeDetailButtonViewModel for iOS  
[FEA] Remvove direct basket patch  
[FEA] New function to update priceBook  
[FEA] Update version in user agent  
[FIX] Add direct getter for title in Package  
[FIX] Footer state in recipe detail (no longuer continue shopping on init)  
[FIX] Basket Status serialisation  
[FIX] Basket Set pricebook patch  
[FIX] Footer price on Recipe Details shows correct values  
[FIX] Get only needed fields when fetching basket, basketEntries & items  
[FIX] Update fetchPriceUseCase tests  
[FIX] Update ChangePriceBookUseCase tests  
[FIX] Getting a POS with an external id will no longer return null intead of 404

# 4.1.0
  
[FEA] Refactor InitMealzFromBase64KeyUseCase for testing purposes  
[FEA] Refactor UpdateUserAuthInfoUseCase to fit with test system  
[FEA] Add a String extension to remove trailing 0 at the end of Double  
[FEA] Text on item selector adapte if it 's a searche or a replacement  
[FEA] Update Confirm Basket Route  
[FEA] Add language configuration  
[FEA] Basket Entries are cached to prevent duplicate requests  
[FEA] Add PaymentStarted & PaymentFinished functions, depreciating handlePayment  
[FEA] PaymentFinished resets basket comparator  
[FEA] Add use case ConfirmBasketUseCase that sends number of items and mealz items to analytics  
[FEA] Recipe Details updates when Item in Pantry added to basket  
[FEA] Remove Basket Entries caching  
[FEA] Add pom generation  
[FEA] Add isSupplierOnly getter  
[FEA] Add product quantity to Analytics events basket add, delete, and replace  
[FEA] Basket Price refreshed after each update  
[FEA] Add Catalalog toolbar texts ressources  
[FEA] Add Preferences CTA texts ressources  
[FEA] Change Preference Tag behaviors  
[FEA] Update CI  
[FEA] Add Admin icon  
[FEA] Update catalog results search string  
[FEA] Preferences Search defaults to Idle State  
[FEA] Add ingredientMap getter in Recipe model  
[FEA] Add mealzOptionSelectedColor  
[FEA] Get Recipe Price or Redirect fetches recipe sticker price  
[FEA] Item Selector launched from MyProducts page shows selected item  
[FEA] Point Of Sale Notifier now public  
[FEA] Item Selector prompts store selector if user searches without active store  
[FEA] Item Selector selected item always has correct name  
[FEA] Favorite page now listen to filter and preferences  
[TEST] Add tests to UpdateUserAuthInfoUseCase  
[TEST] Add tests to SetLanguageUseCase  
[TEST] Add test for InitMealzFromBase64KeyUseCase  
[TEST] Add test for ShouldStopProcessAndOpenSignInUseCase  
[TEST] Add test for UpdateRecipesUseCase  
[TEST] Add test for UpdateRecipeGuest  
[TEST] Add test for ConfirmBasketUseCase  
[TEST] Update test for HandlePaymentUseCase  
[TEST] Add test for GetBasketEntryFromIngredientUseCase  
[TEST] Add test for SetBasketEntrySelectedItemPriceUseCase  
[TEST] Update test for ReplaceBasketEntryUseCase, AddBasketEntryInRecipe, IgnoreBasketEntryInRecipe,  
[TEST] Update test for AddItemToBasketUseCaseTest, RemoveRecipesUseCaseTest  
[TEST] Add test for PaymentStartedUseCase and PaymentFinishedUseCase  
[TEST] Add test for ReloadBasketIfPreviousAuthlessUserStoredUseCase  
[TEST] Add test for ReloadBasketPassingInPosUseCase, update ReloadBasketWithStoredPosUseCaseTest  
[FIX] Basket entrie canBeAdded was returning true even if product is already added  
[FIX] Correction missing sponsor on shelves  
[FIX] Replacing Basket Entries in a recipe was not updating as expected  
[FIX] Add missing coma in itemSelectorViewModel  
[FIX] Item Selector is Empty State when there are no results  
[FIX] Update localisable Object  
[FIX] Products on MyProducts page always have correct Price per measurement  
[FIX] Fix FetchRecipePriceUseCase didn't use the local price  
[FEA] add transfer basket abort function  
[FIX] fix after cart transfer aborted  
[FIX] When product deleted on client side, analytics event entry.deleted sent instead of quantity
updated  
[FIX] LogHandler logs not return to line at the end of each log  
[FIX] Prevent launching pipeline 'pullrequest'  
[FIX] Fix issue with ASCII exceptions in iOS localization  
[FIX] Capacity only shows factor when number is > 1  
[FIX] Product view model are no longer reloaded if set recipe Id is call a second time  
[FIX] MyBasket fetches current basket if you have an authless user  
[FIX] Price per unit of measure in product model add common unit  
[FIX] Products update when changing store  
[FIX] Opening recipe from MyMeals directly after app launches works as expected  
[FIX] Deleting recipe with other items added to MyProducts no longer causes error  
[FIX] Price per unit of mesure in product model add common unit  
[FIX] Filter factory code refact

# 4.0.1
  
[FIX] it's possible to pass an empty user to disconect and hide mealz
