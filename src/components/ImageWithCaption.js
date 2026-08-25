import React from 'react';

function ImageWithCaption({
    url,
    alt,
    caption,
    imageMaxWidth,
    imageMaxHeight,
    imageStyle,
}) {
    return (
        <figure style={{ margin: 0, textAlign: 'left' }}>
            <img src={url} alt={alt} style={{ height: imageMaxHeight || 'auto', maxWidth: imageMaxWidth || 'auto', ...imageStyle }} />
            {caption ? (
                <figcaption style={{ fontSize: '12px', color: '#555' }}>{caption}</figcaption>
            ) : null}
        </figure>
    );
}

export default ImageWithCaption;
