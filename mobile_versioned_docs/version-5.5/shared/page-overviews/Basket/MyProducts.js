import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function MyProducts({
                      platform
                  }) {
    return (
        <ImageWithText
            url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/myProducts.png`}
            text="
<p>
The <code>MyProducts</code> Page shows the products that the user has added to their basket.
</p>"
            alt="A screenshot of the MyProducts page"
            caption="Products in the basket"
            imageMaxWidth="250px"
        />
    );
}

export default MyProducts;