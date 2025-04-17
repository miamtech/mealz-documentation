import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function OrderDetails({
                       platform
                   }) {
    return (
        <ImageWithText
            url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/order-details.png`}
            text="
<p>
The <code>OrderDetails</code> Page shows the recipes in a particular order.
<br/> <br/>
This page is included with the OrderHistory feature.
</p>"
            alt="Order Details page"
            caption="Order Details page"
            imageMaxWidth="250px"
        />
    );
}

export default OrderDetails;