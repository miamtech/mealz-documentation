```koltin 
interface Ingredients {
    @Composable
    fun Content(params: IngredientsParameters){
        
    }
}
```
where
```koltin 
data class IngredientsParameters(
    val ingredients: `List<Ingredient>`,
    val guestsCount: Int,
    val defaultRecipeGuest: Int
)
```