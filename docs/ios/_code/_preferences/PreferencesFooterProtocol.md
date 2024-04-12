PreferencesFooterProtocol.content(params: PreferencesFooterParameters)
where
PreferencesFooterParameters {
public let recipesFound: Int?
public let onApplied: () -> Void
public let onClosed: () -> Void