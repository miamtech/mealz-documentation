---
sidebar_position: 1
label: "Customize Views"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Explanation from '@site/docs/android/features/_shared/_custom-views/Explanation.md';
import BaseViews from '@site/docs/ios/features/_shared/_custom-views/BaseViews.md';
import FiltersViewOptions from '@site/docs/ios/features/_shared/_custom-views/FiltersViewOptions.md';
import CatalogRecipesListGridConfig from '@site/docs/ios/features/_shared/_custom-views/CatalogRecipesListGridConfig.md';
import MyMealsViewOptions from '@site/docs/ios/features/myMeals/_custom-views/MyMealsViewOptions.md';
import MyMealsRecipesListGridConfig from '@site/docs/ios/features/myMeals/_custom-views/MyMealsRecipesListGridConfig.md';
import * as RecipeDetailsViewOptions from '@site/docs/ios/features/recipe-details/_custom-views/';
import TimeIcon from '@site/src/components/TimeIcon';
import Prerequisites from '@site/docs/android/features/_shared/Prerequisites.md';
import LinkToCustomization from '@site/docs/android/features/_shared/LinkToCustomization.md';
import * as BaseComponentView from './_component';

# Customize base component views

Basic components are available through the SDK. 
The aim is to save time by override a template once and reusing it without further configuration.

<Explanation />

## Ingredients

There is 7 differents components that you can override once and will be reuse through the SDK  

## Small components

### Counter
<BaseComponentView.Counter platform="android"/>

In Order to create your own counter you have to create class that implement `Counter`

```kotlin
import ai.mealz.sdk.components.baseComponent.counter.Counter
import ai.mealz.sdk.components.baseComponent.counter.CounterParameters

class MyCustomCounter: Counter {

     @Composable
    override fun Content(params: CounterParameters) {
        // Your custom design here 
    }
}
```

Then you can use all arguments we give you thinks to `CounterParameters`

```kotlin
class CounterParameters(
    val initialCount: Int?, // initial counter state
    val isDisable: Boolean = false, // Will be true when counter button need to be disable
    val onCounterChanged: (newValue: Int) -> Unit, // to call when counter value change
    val lightMode: Boolean = false, // deprecated
    val minValue: Int? = null, // value under which you should not go
    val maxValue: Int? = null, // value above witch you should not go
    val isLoading: Boolean = false, // should show a loding staus of counter
    val key: Any? = null // provide an unique key to avoid compose recomposition mistake 
)
```

Final step is to set Template in your template configuration: 

```kotlin
class MealzTemplateManager {
    init {
        MiamTheme.Template {
            defaultViews {
                counter {
                    view = MyCustomCounter()
                }
            }
        }
    }
}
```

### LikeButton
<BaseComponentView.Like platform="android"/>

Like button have two sub templates loading and success

#### LikeButtonLoading

When a user click on like button a api call is launch then we need to block user interaction and we 
put like button in loading state.

To override this loading state you have to create class that implement `LikeButtonLoading`

```kotlin
import ai.mealz.sdk.components.baseComponent.likeButton.loading.LikeButtonLoading


class MyLikeButtonLoading: LikeButtonLoading {

     @Composable
    override fun Content() {
        // Your custom design here 
    }
}
```

:::warning
There is no parameter in like button loading Content fonction
:::

:::note
Fetching or updating like can be quick in order to avoid flikering we recommande 
making this view looking like not like view
:::

#### LikeButtonSuccess 

When data has been fetched you can override `LikeButtonSuccess`

```kotlin
import ai.mealz.sdk.components.baseComponent.likeButton.success.LikeButtonSuccess
import ai.mealz.sdk.components.baseComponent.likeButton.success.LikeButtonSuccessParameters


class MyLikeButtonSuccess: LikeButtonSuccess {

     @Composable
    override fun Content(params: LikeButtonSuccessParameters) {
        // Your custom design here 
    }
}
```

with 

```kotlin
data class LikeButtonSuccessParameters(
    val isLiked: Boolean, // like or not
    val backgroundShape: Shape = CircleShape, // deprecated
    val likeAction: () -> Unit // to call on click
)
```

#### LikeButton all together


Final step is to set Template in your template configuration: 

```kotlin
class MealzTemplateManager {
    init {
        MiamTheme.Template {
            defaultViews {
                likeButton {
                    success {
                        view = MyLikeButtonSuccess()
                    }
                    loading {
                        view = MyLikeButtonLoading()
                    }
                }
            }
        }
    }
}
```

### MyMealButton
<BaseComponentView.MyMealButton platform="android"/>

MyMealButton have two customizable part an empty state and success state

#### MyMealButtonEmpty

When there is no recipe in mealz basket we are in empty state

:::tip
In our default Template empty my meal button is a empty Box in order to hide it
:::

If you want to have your custom my meal button empty state create a class that implement `MyMealButtonEmpty`


```kotlin
import ai.mealz.sdk.components.baseComponent.myMealButton.empty.MyMealButtonEmpty


class MyMyMealButtonEmpty: MyMealButtonEmpty {

     @Composable
    override fun Content() {
        // Your custom design here 
    }
}
```

:::warning
There is no parameter in my meal button Content fonction
:::

#### MyMealButtonSuccess

My Meal button is in success state as soon as a recipe is in mealz basket


If you want to have your custom my meal button success state create a class that implement `MyMealButtonSuccess`


```kotlin
import ai.mealz.sdk.components.baseComponent.myMealButton.success.MyMealButtonSuccess
import ai.mealz.sdk.components.baseComponent.myMealButton.success.MyMealButtonSuccessParameters


class MyMyMealButtonSuccess: MyMealButtonSuccess {

     @Composable
    override fun Content(params: MyMealButtonSuccessParameters) {
        // Your custom design here 
    }
}
```
with 

```kotlin
data class MyMealButtonSuccessParameters(
    val recipeCount: Int, // number or recipe in mealz basket
    val onClick: () -> Unit // on click action that should redirect to My meal
)
```

#### MyMealButton all together

Final step is to set Template in your template configuration: 

```kotlin
class MealzTemplateManager {
    init {
        MiamTheme.Template {
            defaultViews {
                myMealButton {
                    success {
                        view = MyMyMealButtonSuccess()
                    }
                    empty {
                        view = MyMyMealButtonEmpty()
                    }
                }
            }
        }
    }
}
```

:::tip 
Your not force to override all template availble, here you can override only empty state if you wish to.
:::

## Page States

### Empty
<BaseComponentView.Empty platform="android"/>

In Order to create your own empty state you have to create class that implement `EmptyPage`

```kotlin
import ai.mealz.sdk.components.baseComponent.emptyPage.EmptyPage
import ai.mealz.sdk.components.baseComponent.emptyPage.EmptyPageParameters


class MyCustomEmptyView: EmptyPage {

     @Composable
    override fun Content(params: EmptyPageParameters) {
        // Your custom design here 
    }
}
```

Then you can use all arguments we give you thinks to `EmptyPageParameters`

```kotlin
data class EmptyPageParameters(
    val title: String, // Top sentence
    val subtitle: String = "", // optional sub sentence
    val haveAnAction: Boolean = false, // show CTA or not
    val image: Int = miamEmpty, 
    val actionText: String = "", // CTA text
    val action: () -> Unit = {} // onClick on CTA
)
```

Final step is to set Template in your template configuration: 

```kotlin
class MealzTemplateManager {
    init {
        MiamTheme.Template {
            defaultViews {
                empty {
                    view = MyCustomEmptyView()
                }
             }
        }
    }
}
```

### Loading
<BaseComponentView.Loading platform="android"/>

In Order to create your own loading state you have to create class that implement `Loader`

```kotlin
import ai.mealz.sdk.components.baseComponent.loader.Loader
import ai.mealz.sdk.components.baseComponent.loader.LoaderParameters


class MyCustomLoadingView: Loader {

     @Composable
    override fun Content(params: LoaderParameters) {
        // Your custom design here 
    }
}
```

`LoaderParameters` is an empty object for now, but tomorrow we'll be able to add properties to it, in order to avoid breaks in future versions. 

```kotlin
object LoaderParameters
```

Final step is to set Template in your template configuration: 

```kotlin
class MealzTemplateManager {
    init {
        MiamTheme.Template {
            defaultViews {
                loading {
                    view = MyCustomLoadingView()
                }
            }
        }
    }
}
```

