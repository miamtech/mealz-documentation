---
sidebar_position: 3
---

import ImageWithCaption from '@site/src/components/ImageWithCaption';
import ImageSideBySide from '@site/src/components/ImageSideBySide';

# Planner

The [planner](../integration-reference/planner) is a full-page flow that helps users build a weekly menu and push every recipe to the cart in one step. You embed a small **entry block** on a page such as the catalog home; it sends the user to a dedicated **current menu** page on your site when they start planning.

On the entry block, the user sets the number of guests and chooses how to start: from Mealz suggestions or from an empty menu.

<ImageWithCaption
url="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/v3/examples/plannerEntryVariant3.png"
alt="Planner entry"
caption="Planner entry"
imageMaxHeight="250px"
/>
<br/>

After selecting either option, the user is redirected to the planner page, where they can view their current menu. If the empty menu option was selected, the menu will be empty; if the suggestions were selected, the menu is automatically filled with the week's suggestions after a short animation.

<ImageWithCaption
url="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/v3/examples/plannerCurrentEmpty.png"
alt="Planner current menu empty"
caption="Planner current menu empty"
imageMaxHeight="600px"
/>
<br/>

<ImageWithCaption
url="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/v3/examples/plannerCurrentFilled.png"
alt="Planner current menu with suggestions"
caption="Planner current menu with suggestions"
imageMaxHeight="600px"
/>
<br/>

First-time users see a short onboarding modal; the same help content stays available from the entry block and from the menu page header.

<ImageWithCaption
url="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/v3/examples/plannerOnboardingModal.png"
alt="Onboarding / help modal"
caption="Onboarding / help modal"
imageMaxHeight="250px"
/>
<br/>

On the left are recipe suggestions, which can be added to the menu or skipped to see the next suggestion.

<ImageWithCaption
url="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/v3/examples/plannerRecipeSuggestions.png"
alt="Recipe suggestions"
caption="Recipe suggestions"
imageMaxHeight="450px"
/>
<br/>

The current menu is on the right. The recipes displayed are in the menu, and can be deleted or consulted from here. The first card of the list opens a recipe catalog in a drawer to manually search for recipes to add, as a secondary option to the suggestions.

<ImageWithCaption
url="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/v3/examples/plannerCurrentMenu.png"
alt="Current menu"
caption="Current menu"
imageMaxHeight="600px"
/>
<br/>

<ImageWithCaption
url="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/v3/examples/plannerCatalogDrawer.png"
alt="Adding a recipe from the drawer"
caption="Adding a recipe from the drawer"
imageMaxHeight="600px"
/>
<br/>

When consulting a recipe from the planner page, the recipe details drawer is quite different from the usual one. On this page, since recipes are added **to a menu** and not **to the cart**, the user can toggle or untoggle which products will be added when they click the "Add the menu to cart" CTA. By default, all products are toggled on.

<ImageWithCaption
url="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/v3/examples/plannerRecipeDetails.png"
alt="The recipe details on the planner page"
caption="The recipe details on the planner page"
imageMaxHeight="600px"
/>
<br/>

The user can set a budget, which will make a budget gauge appear. If the total price of the recipes currently in the menu is higher than the budget, the gauge displays the difference.

<ImageWithCaption
url="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/v3/examples/PlannerCurrentWithBudget.png"
alt="Planner with budget gauge"
caption="Planner with budget gauge"
imageMaxHeight="600px"
/>
<br/>

<ImageWithCaption
url="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/v3/examples/plannerBudgetModal.png"
alt="Budget modal"
caption="Budget modal"
imageMaxHeight="200px"
/>
<br/>

<ImageWithCaption
url="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/v3/examples/plannerBudgetGaugeOverCap.png"
alt="Budget gauge when the menu price is higher than the budget"
caption="Budget gauge when the menu price is higher than the budget"
imageMaxHeight="250px"
/>
<br/>

When clicking the "Add the menu to cart" CTA, all selected products for each recipe of the menu are added to the cart, and the user is redirected to your cart page.

On mobile, the current menu splits into two views (suggestions with a compact footer, then the full menu list); the URL keeps track of the active view via a `view` query parameter.

<ImageSideBySide
firstUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/v3/examples/plannerMobileSuggestions.png"
firstAlt="Planner mobile view - Suggestions"
firstCaption="Planner mobile view - Suggestions"
secondUrl="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/web/v3/examples/plannerMobileMenu.png"
secondAlt="Planner mobile view - Current menu"
secondCaption="Planner mobile view - Current menu"
maxHeight="600px"
/>
<br/>
<br/>

See [Planner](../integration-reference/planner) for SSR routes, routing configuration, and integration details.
