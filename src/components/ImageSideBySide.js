import React from 'react';
import ImageWithCaption from './ImageWithCaption';

function sideBySideSlotStyle(paddingSide, paddingBetween) {
    return {
        flex: '0 0 auto',
        maxWidth: '50%',
        textAlign: 'center',
        margin: '0',
        [paddingSide]: paddingBetween,
    };
}

function ImageSideBySide({
        firstUrl,
        firstAlt,
        firstCaption,
        firstImageMaxWidth,
        secondUrl,
        secondAlt,
        secondCaption,
        secondImageMaxWidth,
        maxHeight = "500px",
        paddingBetween = "20px",
        outsidePadding = "0px"
    }) {
    const sideBySideImageStyle = { width: '100%', maxHeight };

    return (
        <div style={{ display: 'inline-flex', alignItems: 'top', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap', padding: outsidePadding }}>
            <div style={sideBySideSlotStyle('paddingRight', paddingBetween)}>
                <ImageWithCaption
                    url={firstUrl}
                    alt={firstAlt}
                    caption={firstCaption}
                    imageMaxWidth={firstImageMaxWidth}
                    imageStyle={sideBySideImageStyle}
                />
            </div>
            <div style={sideBySideSlotStyle('paddingLeft', paddingBetween)}>
                <ImageWithCaption
                    url={secondUrl}
                    alt={secondAlt}
                    caption={secondCaption}
                    imageMaxWidth={secondImageMaxWidth}
                    imageStyle={sideBySideImageStyle}
                />
            </div>
        </div>
    );
}

export default ImageSideBySide;
