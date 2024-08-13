```kotlin 
interface Swapper {
    @Composable
    fun Content(params : SwapperParameters)
}
```

where

```kotlin 
data class SwapperParameters constructor(
    val isShopping: Boolean,
    val toggle: () -> Unit
)
```