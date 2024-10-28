```kotlin 
interface MyMealTitle {
    @Composable
    fun Content(params: MyMealTitleParameters)
}
```
where
class MyMealTitleParameters(val numberOfRecipe: Int)