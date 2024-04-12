BaseButtonProtocol.content(params: BaseButtonParameters)
where
BaseButtonParameters {
public let buttonText: String
public let buttonPressed: Bool
public let onButtonAction: () -> Void