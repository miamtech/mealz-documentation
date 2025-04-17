```kotlin 
interface MyMealTitle {
    @Composable
    fun Content(params: MyMealTitleParameters)
}
```

where

```kotlin
class MyMealTitleParameters(val numberOfRecipe: Int)
```
