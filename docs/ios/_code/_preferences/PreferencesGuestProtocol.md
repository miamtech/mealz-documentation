PreferencesGuestProtocol.content(params: PreferencesGuestParameters)
where
PreferencesGuestParameters {
public let guests: Int?
public let onGuestChanged: (Int) -> Void