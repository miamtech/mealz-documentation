import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';
function SponsorDetails({
                           platform
                       }) {
    return (
            <ImageWithText
                    url={`https://storage.googleapis.com/assets.miam.tech/kmm_documentation/${platform}/page-overviews/sponsorDetails.png`}
                    text="
<p>
The <code>SponsorDetails</code> Page shows information about the product or company that is sponsoring a certain recipe.
The content comes from the Sponsor, so only the background, loader, & empty are customizable.
<br/> <br/>
The user just navigates back to the Page they launched from.
</p>"
                    alt="A screenshot of the Sponsor Details page"
                    caption="Sponsor Details of Interbev steak"
                    imageMaxWidth="250px"
            />
    );
}

export default SponsorDetails;