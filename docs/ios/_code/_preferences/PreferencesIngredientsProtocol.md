PreferencesIngredientsProtocol.content(params: PreferencesIngredientsParameters)
where
PreferencesIngredientsParameters {
public let ingredientsTag: [CheckableTag]
public let geometry: GeometryProxy
public let onTogglePreference: (String) -> Void
public let onGoToSearch: () -> Void