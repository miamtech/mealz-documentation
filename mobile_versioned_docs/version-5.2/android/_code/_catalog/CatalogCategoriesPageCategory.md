```kotlin
interface CatalogCategoriesPageCategory {
    @Composable
    fun Content(param: CatalogCategoriesPageCategoryParameters)
}
```
where

```kotlin
data class CatalogCategoriesPageCategoryParameters(
    val category: Package,
    val recipesId: `List<String>`,
    val goToCategoryPage: (category: Package) -> Unit
)
```