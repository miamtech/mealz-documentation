PreferencesEquipmentProtocol.content(params: PreferencesEquipmentParameters)
where
PreferencesEquipmentParameters {
public let equipmentsTag: [CheckableTag]
public let onTogglePreference: (String) -> Void