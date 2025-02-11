```swift
PreferencesGuestProtocol.content(params: PreferencesGuestParameters)
```
where
```swift
PreferencesGuestParameters {
    public let guests: Int?
    public let onGuestChanged: (Int) -> Void
}
```