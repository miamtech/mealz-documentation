---
sidebar_position: 6
---

## Changelog

# 5.4.0  
[FEA] Update steps template    
[FEA] update like button template  
[FEA] Update filtres text  
[FEA] Update Catalog Toolbar & Preferences  
[FEA] Update empty page  
[FEA] Add header to MySpace  
[FEA] Update Shelf Recipe Card  
[FEA] Add analytics to Catalog  
[FEA] Add analytics to Favorites  
[FEA] Add analytics to Categories Results  
[FEA] Update analytics on Recipe Card and Like Button  
[FEA] Update analytics on MyMeals and MyBasket  
[FEA] Update analytics on Store Locator Button  
[FEA] Update analytics on Basket Entries  
[FEA] Add basket show, filters, and search.results events

# 5.3.0  
[FEA] Added Explore Our Catalog button to empty Order History  
[FEA] Use recipeIsUpdating from DynamicRecipeDetailVM to centralize loading for footer & cards  
[FEA] Replaced BasketPreviewVM with MyMealRecipeVM  
[FEA] Discount handleling  
[FEA] Discount button template on catalog  
[FEA] New discount page on catalog  
[FIX] Price uses locale  
[FIX] Recipe detail footer neutral new template neutral  
[FIX] Recipe added to basket are now updated with a flap   
[FIX] Product in basket preview are no longer stuck to 0 and are deleted  
[FIX] 4 recipes are showed in order history instead of three before overflow on order history list  
[FIX] Last product quantity counter in Recipe Details works as expected  
[FIX] Meal Planner Recipe shows correct number of recipes in basket  
[FIX] Meal Planner products only listen & dispose once

# 5.2.3  
[FIX] Catalog Success Toolbar properly resizes  
[FIX] Catalog Success Toolbar hides Preferences with correct setting  
[FIX] Meal Planner Basket Preview shows correct number of ingredients  
[FIX] Already in the pantry products have correct text  
[FIX] Ensure Order History Card guest count does not show 0  
[FIX] Removing a product in the pantry with the counter

# 5.2.1  
[FIX] Catalog Success Toolbar has customizable MySpace button  
[FIX] Catalog Journey supports onRedirectToClientBasket  
[FEA] Update analytics of recipe detail, products / recipes addition and deletion  
[FEA] Add Unavailable Products tag to Recipe Details title  
[FEA] Add "See my basket" bottom bar on My Meal  
[FEA] Recipe detail footer height can be configure  
[FIX] All Lazy lists create composite key with index to prevent duplicate keys  
[FIX] Loading recipes & loaded recipes are same size  
[FIX] Recipe Details fetches most recent products when it appears  
[FIX] GuestBadge public  
[FIX] use isInShelf parameter instead of open from in recipe journey

# 5.2.0  
[FEA] New template OrderHistorySuccessOrderDetailRecipeCard  
[FEA] New template OrderHistorySuccessSearch  
[FEA] New template OrderHistorySuccessOrder  
[FEA] New template OrderHistorySuccessOrderDetailHeader  
[FEA] New OrderHistory Component  
[FEA] New generic Swapper Template  
[FEA] Use generic Swapper in MyBasket  
[FEA] Use generic Swapper in RecipeDetail  
[FEA] New template reOrderBottomSheet   
[FEA] New template MySpaceHeader  
[FEA] New ReOrderSectionTemplate  
[FEA] New template product out of stock  
[FEA] Use and expose product out of stock template  
[FEA] Add Searchbar to Favorites page  
[FEA] Change recipe detail behaviour on history  
[FEA] Add recipe detail alredy order info and cta  
[FEA] Replace warning tag by a generic tag  
[FEA] Favorites page is now 2 columns  
[FEA] UI Recipe card move Like Button to top right  
[FEA] UI update Meals in Basket button  
[FEA] Add floating button to MySpace  
[FEA] Header to MyMeal  
[FEA] Update Product Cards on Recipe Details page  
[FEA] Use MealzPage in Recipe Details  
[FEA] Sponsor now supports logos  
[FEA] Add analytics on preferences  
[FIX] Recipe detail fill max size when opening

# 5.1.1  
[FEA] Update core dependnecy to 5.1.1  
[FEA] Update core dependnecy to 5.1.1-alpha  
[FIX] CI/CD can now recognize alpha versions  
[FIX] Counter on product can't go under 0  
[FIX] Recipe can be delete in my meal even if title is too long

# 5.1.0  
[FEA] Mealz neutral product update  
[FEA] MyMeal recipe card now show number of unavailable products  
[FEA] Remove preference and filter from favorite page in catalog  
[FEA] Add drink idea flap and parameter to recipe card  
[FEA] Update AGP to 8.2.2  
[FIX] Fix analytic dev dependency    
[FEA] Rework unavailable product in recipe detail can now be replaced  
[FIX] Infinite loading after coming from POS selector without selecting a valid store

# 5.0.0  
[FEA] Add new RecipePriceEmpty template  
[FEA] Add MyBasketJourney, MyBasket with navigation  
[FEA] Add static function View to MyMealButton  
[FEA] Add new RecipePriceError template  
[FEA] Add new RecipePriceLoading template  
[FEA] Add new RecipePriceSuccess template  
[FEA] New RecipePrice component handle external recipe Id check   
[FEA] Recipe journey working with external Id  
[FIX] Change colors of circle chip in recipe detail steps  
[FIX] Remove unneeded parameter from catalogSuccessSearchParameter  
[FIX] Remove dead code RecipePrice composable

# 4.1.0  
[FEA] Add nested scroll in my basket  
[FEA] Add a default template for ItemSelector CTA factorise code   
[FEA] Text on item selector adapte if it 's a searche or a replacement  
[FEA] Add pom generation  
[FEA] Add gear icon, prefix all other resources with ic_mealz to avoid conflict  
[FEA] New catalog header neutral design  
[FEA] Graphic rework of catalog toolbar  
[FEA] Add generic composable collapsable header   
[FEA] Graphic rework of preference ingredient section  
[FEA] Graphic rework of preference diet section  
[FEA] Graphic rework of preference equipement section  
[FEA] Graphic rework of preference header, footer and guest section   
[FEA] Graphic rework of filter header and new template  
[FEA] Graphic rework of filter footer and new template  
[FEA] Graphic rework of filter layout and add new collapsable intitial state  
[FEA] Factorise Brush for skeleton loader  
[FEA] Add an util function to handle native back  
[FEA] Handle native back on TransferBasket  
[FEA] Change ItemSelectorSelectedItemParameters stop using our model  
[FEA] Change ItemSelectorSuccessParameters deprecate Item object in it  
[FEA] Add price per unit in item selectors product  
[FEA] Item Selector Title uses combined capacity  
[FEA] Item Selector implements No Results & Idle state  
[FEA] MealPlannerJourney mealplanner with embeded navigation  
[FEA] MealPlannerJourney, mealplanner with embeded navigation  
[FEA] CalalogJourney, catalog with embeded navigation  
[FEA] Direct link to category in CatalogJourney  
[FEA] Add is a Mealz id parameters optonal input to recipe journey  
[FEA] Hide MealPlanner from category list as a catalog configuration  
[FEA] Recipe detail now have access to scroll state recipe id and is like enable, new neutral design  
[FEA] Add is a Mealz id parameters optonal input to Mealz journey  
[FEA] Add select item color for checkbox radio button and selected tags  
[FIX] Remove catalog parameter dead code  
[FIX] Add a go back founction on catalog to allow naviagion back to host app  
[FIX] Add a padding on bottom of catalog category view  
[FIX] Direct link to category work again  
[FIX] Add a padding between card in favorite view  
[FIX] Fusion of apply and update methode in catalog search bar  
[FIX] Fix UnavailableProductHeader package naming  
[FIX] Fix ProductLoadingImp implementation  
[FIX] Hide "Need Something else ?" by default in MyMeals  
[FIX] Remove trailling 0 on product quantity   
[FIX] Remove dead code  
[FIX] Fix Often deleted templating  
[FIX] Fix MyBasketFooterImp height  
[FIX] Add Unit to product tag in my products   
[FIX] Adding often deleted product now open item selector instead of adding directly a product  
[FIX] Inverse value isInBasket of ProductSuccessParameters to fit with new canBeAdded of basketEntry model  
[FIX] DeepLinking on Catalog Categories works as expected  
[FIX] Change Localisation ressources name  
[FIX] Use correct string in My basket Footer  
[FIX] MealPlanner not accessing ressource the right way  
[FIX] Item Selector properly goes back when selected item & has correct capacity
