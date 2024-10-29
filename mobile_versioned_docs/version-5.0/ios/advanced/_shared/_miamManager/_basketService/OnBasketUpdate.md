```swift
import Combine

private var cancellable: AnyCancellable? // used to create stream between mealz basket & our own

func onBasketUpdate(sendUpdateToSDK: @escaping ([SupplierProduct]) -> Void) {
    cancellable = PretendBasket.shared.$items.sink { receiveValue in
        `sendUpdateToSDK`(
            self.pretendProductsToRetailerProducts(products: receiveValue)
        )
    }
}
```