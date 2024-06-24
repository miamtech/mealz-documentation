```swift
PreferencesEquipmentProtocol.content(params: PreferencesEquipmentParameters)
```
where
```swift
PreferencesEquipmentParameters {
    public let equipmentsTag: [CheckableTag]
    public let onTogglePreference: (String) -> Void
}
```