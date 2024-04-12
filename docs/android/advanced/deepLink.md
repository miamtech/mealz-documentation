# Link

## DeepLink
Mealz provides a parameter `categoryId` on `CatalogResults` that show desired categories.
It is design to be used with deeplinking.
Just pass **MEALZ_CATEGORY_ID** & the title as parameters in your bind

```kotlin
Catalog(this@MainActivity).apply { bind(MEALZ_CATEGORY_ID) }.Content()
or 
Catalog(this@MainActivity).apply { bind(MEALZ_CATEGORY_ID, MEALZ_TITLE) }.Content()
```

With XML

```kotlin
private var catalogView:Catalog
...
catalogView.bind(categoryId)
or
catalogView.bind(categoryId, title)
```

:::tip
You can find Mealz category IDs on our back office <a target="https://partners.miam.tech/" href='https://partners.miam.tech/'> **Mealz Partner**</a>
:::

## Direct Link

You can also use this feature directly in your application.
To do so, you'll need to get current active catalog's categories.
Here's how you can do that:

```kotlin
import com.miam.core.Mealz

Mealz.catalog.getCatalogCategories(::fetchCategory)
where
private fun fetchCategory(categories: List<CatalogCategory>) {
    categoriesState.value = categories
}
```

An example of full implementation with compose :

```kotlin
class DeepLinkDropDownMenu(val navigateTo: (id: String) -> Unit) {

    private val categoriesState: MutableState<List<CatalogCategory>> =
        mutableStateOf(listOf())

    init {
        Mealz.catalog.getCatalogCategories(::fetchCategory)
    }

    private fun fetchCategory(categories: List<CatalogCategory>) {
        categoriesState.value = categories
    }

    @Composable
    fun Content() {

        val expanded = remember { mutableStateOf(false) }

        Box {
            IconButton(onClick = {
                expanded.value = true
            }) {
                Icon(
                    Icons.Filled.MoreVert,
                    contentDescription = "More Menu"
                )
            }
            DropdownMenu(
                expanded = expanded.value,
                onDismissRequest = { expanded.value = false }
            ) {
                categoriesState.value.forEach {
                    DropdownMenuItem(onClick = {
                        navigateTo(it.id)
                        expanded.value = false
                    }) {
                        Text(it.title)
                    }
                }
            }
        }
    }
}
```

:::tip
You can find some examples with the Demo App XML <a target="https://github.com/miamtech/android-demo-app-xml/docs/deep_links.md" href='https://github.com/miamtech/android-demo-app-xml/docs/deep_links.md'>here</a> in order to simulate deep links and use them.
:::