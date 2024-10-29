```kotlin
interface LazyListLoader {
    @Composable
    fun Content(params: LazyListLoaderParameters)
}
```

where

```kotlin
class LazyListLoaderParameters(val isFetching: Boolean)
```