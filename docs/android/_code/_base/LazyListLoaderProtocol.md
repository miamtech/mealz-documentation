interface LazyListLoader {
    @Composable
    fun Content(params: LazyListLoaderParameters)
}
where
class LazyListLoaderParameters(val isFetching: Boolean)