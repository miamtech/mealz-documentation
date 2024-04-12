CatalogRecipesListNoResultsProtocol.content(params: CatalogRecipesListNoResultsParameters)
where
CatalogRecipesListNoResultsParameters {
public let catalogContent: CatalogContent
public let searchText: String
public let onNoResultsRedirect: () -> Void