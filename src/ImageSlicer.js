import React, { useState, useRef } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
export default function ImageSlicer() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const handlerRef = useRef(null);

    const handleSliderPositionChange = (position) => {
        if (position > 75) {
            setSliderPosition(100);
        } else if (position < 25) {
            setSliderPosition(0);
        } else {
            setSliderPosition(position);
            if (handlerRef.current) {
                handlerRef.current.style.opacity = 1;
            }
        }
        if (position === 0 || position === 100) {
            if (handlerRef.current) handlerRef.current.style.opacity = 0;
        }
        console.log("Handler position:", position);
    };

    return (
        <ReactCompareSlider
            boundsPadding={0}
            handle={
                <img
                    src="/images/slider.png"
                    alt="Custom handle"
                    ref={handlerRef}
                    style={{
                        position: 'absolute',
                        display: 'yes',
                        width: '7.42px',
                        height: '300.63px',
                        left: 'calc(50% - 7.42px/2 + 0.39px)',
                        top: 'calc(50% - 460.63px/2 + 0.1px)',
                        flex: 'none',
                        order: 2,
                        flexGrow: 0,
                        zIndex: 2,
                    }}
                />
            }
            itemOne={<ReactCompareSliderImage src="/images/PepeSilver.jpg" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="/images/PepePurple.jpg" alt="Image two" />}
            onPositionChange={handleSliderPositionChange}
            position={sliderPosition}
            portrait={false}
            onlyHandleDraggable={false}
            changePositionOnHover={false}
            style={{
                flexGrow: 1,
                width: '100%'
            }}
        />
    );
}
