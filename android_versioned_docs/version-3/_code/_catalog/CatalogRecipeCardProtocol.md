```koltin
interface RecipeCardSuccess {
    @Composable
    fun Content(params: RecipeCardSuccessParams){

    }
}
```
where

```koltin
data class RecipeCardSuccessParams(
    val recipe: Recipe,
    val recipeTitle: String,
    val recipePicture: String,
    val isInShelve: Boolean,
    val goToDetail: () -> Unit,
    val guest: `MutableStateFlow<Int>`,
    val isInCart: Boolean,
    val isSponsor: Boolean,
    val sponsorLogo: String?,
    val likeIsEnabled: Boolean
)
```