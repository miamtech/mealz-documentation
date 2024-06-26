```koltin
interface LazyListLoader {
    @Composable
    fun Content(params: LazyListLoaderParameters)
}
```

where

```koltin
class LazyListLoaderParameters(val isFetching: Boolean)
```