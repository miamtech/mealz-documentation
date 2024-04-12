import React from 'react';

function ImageWithText({
       url,
       text,
       alt,
       caption,
        imageMaxWidth = "300px",
       maxHeight = "500px",
       textMinimumWidth = "250px",
       flexDirection = "row",
       paddingBetween = "20px",
       outsidePadding = "0px"
}) {
    // Determine padding based on the flexDirection prop
    const textPadding = flexDirection === 'row' ? { paddingRight: paddingBetween } : { paddingLeft: paddingBetween };
    const imagePadding = flexDirection === 'row' ? { paddingLeft: paddingBetween } : { paddingRight: paddingBetween };
    return (
            <div style={{ display: 'inline-flex', alignItems: 'top', justifyContent: 'space-between', flexDirection: flexDirection, flexWrap: 'wrap', padding: outsidePadding }}>
                <div style={{ ...textPadding, flex: 1, minWidth: textMinimumWidth, margin: '0' }}>
                    <p dangerouslySetInnerHTML={{ __html: text }} style={{margin: '0'}} />
                </div>
                <div style={{ ...imagePadding, flex: '0 0 auto', maxWidth: '50%', textAlign: 'center', margin: '0' }}>
                    <figure style={{ margin: 0 }}>
                        <img src={url} alt={alt} style={{ width: '100%', maxWidth: imageMaxWidth, height: 'auto', maxHeight: maxHeight }} />
                        <figcaption style={{ fontSize: '12px', color: '#555' }}>{caption}</figcaption>
                    </figure>
                </div>
            </div>
    );
}

export default ImageWithText;
