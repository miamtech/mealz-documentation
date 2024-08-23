```kotlin 
interface Ingredients {
    @Composable
    fun Content(params: IngredientsParameters)
}
```
where
```kotlin 
data class IngredientsParameters(
    val ingredients: `List<Ingredient>`,
    val guestsCount: Int,
    val defaultRecipeGuest: Int
)
```