```kotlin 
interface RecipeDetailSuccessFooter {
    @Composable
    fun Content(params: RecipeDetailSuccessFooterParameters)
}
```
where

```kotlin 
data class RecipeDetailSuccessFooterParameters(
    val price: `StateFlow<Double>`,
    val priceStatus: ComponentUiState,
    val ingredientsStatus: IngredientStatus,
    val isButtonLock: `StateFlow<Boolean>`,
    val onConfirm: () -> Unit
)
```