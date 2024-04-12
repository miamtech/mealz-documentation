FiltersSectionProtocol.content(params: FiltersSectionParameters)
where
FiltersSectionParameters {
public let title: String
public let filters: [CatalogFilterOptions]
public let onFilterSelected: (CatalogFilterOptions) -> Void