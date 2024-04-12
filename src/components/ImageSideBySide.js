import React from 'react';

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
    return (
            <div style={{ display: 'inline-flex', alignItems: 'top', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap', padding: outsidePadding }}>
                <div style={{ flex: '0 0 auto', maxWidth: '50%', textAlign: 'center', margin: '0', paddingRight: paddingBetween }}>
                    <figure style={{ margin: 0 }}>
                        <img src={firstUrl} alt={firstAlt} style={{ width: '100%', height: 'auto', maxHeight: maxHeight, maxWidth: firstImageMaxWidth }} />
                        <figcaption style={{ fontSize: '12px', color: '#555' }}>{firstCaption}</figcaption>
                    </figure>
                </div>
                <div style={{ flex: '0 0 auto', maxWidth: '50%', textAlign: 'center', margin: '0', paddingLeft: paddingBetween  }}>
                    <figure style={{ margin: 0 }}>
                        <img src={secondUrl} alt={secondAlt} style={{ width: '100%', height: 'auto', maxHeight: maxHeight, maxWidth: secondImageMaxWidth }} />
                        <figcaption style={{ fontSize: '12px', color: '#555' }}>{secondCaption}</figcaption>
                    </figure>
                </div>
            </div>
    );
}

export default ImageSideBySide;
