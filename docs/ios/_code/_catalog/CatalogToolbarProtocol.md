CatalogToolbarProtocol.content(params: CatalogToolbarParameters)
where
CatalogToolbarParameters {
public let usesPreferences: Bool
public let onFiltersTapped: () -> Void
public let onSearchTapped: () -> Void
public let onFavoritesTapped: () -> Void
public let onPreferencesTapped: () -> Void