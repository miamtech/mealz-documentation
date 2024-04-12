---
sidebar_position: 3
label: "Demo"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Demo

## Repos

<Tabs
defaultValue="UIKit"
groupId="code-example"
values={[
{ label: 'UIKit', value: 'UIKit' },
{ label: 'SwiftUI', value: 'SwiftUI' },
]}>

<TabItem value="UIKit">

Here's the url to our UIKit demo application:
[UIKit](https://github.com/miamtech/miam-sample-uikit-integration)

Git clone the repo & run `git fetch`.

You'll want to switch the branch to either `cocoapods` or `public-spm`.

If `cocoapods`, run `pod install` from the root of the project to install the pods.

</TabItem>
<TabItem value="SwiftUI">

Coming Soon

</TabItem>
</Tabs>

## Run on your device

To run the demo application on a real device, you might need to update the signing certificates.

:::tip
For the certificate to be managed by Xcode (Automatically manage signing), just select your
team name in the list.
:::
