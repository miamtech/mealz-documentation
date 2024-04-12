ItemSelectorNoResultsProtocol.content(params: ItemSelectorNoResultsParameters)
where
ItemSelectorNoResultsParameters {
public let title: String
public let subtitle: String?
public let hasNoSubstitutes: Bool
public let goBack: () -> Void