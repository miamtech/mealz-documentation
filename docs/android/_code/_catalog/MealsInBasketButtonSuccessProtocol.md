interface CatalogFloating {
@Composable
fun Content(params: CatalogFloatingParameters)
}
where
data class CatalogFloatingParameters(
val onClickAction: () -> Unit
)