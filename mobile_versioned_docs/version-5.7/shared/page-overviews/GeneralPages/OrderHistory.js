import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function OrderHistory({
                       platform
                   }) {
    return (
        <ImageWithText
            url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/order-history.png`}
            text="
<p>
The <code>OrderHistory</code> Page shows the orders that a particular user has already purchased with Mealz recipes.
<br/> <br/>
This page can be standalone but is automatically included in the MySpace section of the catalog.
Additionally, if the user lands on this page without any previous orders, they can navigate to the Catalog Feature.
</p>"
            alt="Order History page"
            caption="OrderHistory page"
            imageMaxWidth="250px"
        />
    );
}

export default OrderHistory;