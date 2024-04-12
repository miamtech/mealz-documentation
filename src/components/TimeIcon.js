import ImageWithText from '@site/src/components/ImageWithText';
import React from 'react';



function TimeIcon({
        titleText,
        timeText
  }) {
    const url="https://storage.googleapis.com/assets.miam.tech/kmm_documentation/shared/icons/mealzTime@3x.png"
    const text="<p style='margin: 0'>{timeText}</p>"
    const alt="clock icon"
    const imageSize="18px"
    return (
            <div style={{ display: 'inline-flex', alignItems: 'top', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap'}}>
                <div style={{ flex: 1, width: 300, margin: '0' }}>
                    <p dangerouslySetInnerHTML={{ __html: titleText }} style={{margin: '0'}} />
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'top', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap'}}>
                    <div style={{ paddingRight: '10px', flex: '0 0 auto', maxWidth: '50%', textAlign: 'center', margin: '0' }}>
                        <img src={url} alt={alt} style={{ width: '100%', maxWidth: imageSize, height: 'auto', maxHeight: imageSize }} />
                    </div>
                    <div style={{ flex: 1, margin: '0' }}>
                        <p dangerouslySetInnerHTML={{ __html: timeText }} style={{margin: '0'}} />
                    </div>
                </div>
            </div>
    );
}

export default TimeIcon;
