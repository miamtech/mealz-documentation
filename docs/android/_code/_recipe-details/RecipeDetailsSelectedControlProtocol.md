```koltin 
interface Swapper {
    @Composable
    fun Content(params : SwapperParameters){

    }
}
```

where

```koltin 
data class SwapperParameters constructor(
    val isShopping: Boolean,
    val toggle: () -> Unit
)
```