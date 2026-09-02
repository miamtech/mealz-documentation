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
            <img
                src={url}
                alt={alt}
                style={{
                    display: 'block',
                    maxHeight: imageMaxHeight || undefined,
                    maxWidth: imageMaxWidth || '100%',
                    width: 'auto',
                    height: 'auto',
                    ...imageStyle,
                }}
            />
            {caption ? (
                <figcaption style={{ fontSize: '12px', color: 'var(--ifm-font-color-secondary)' }}>{caption}</figcaption>
            ) : null}
        </figure>
    );
}

export default ImageWithCaption;
