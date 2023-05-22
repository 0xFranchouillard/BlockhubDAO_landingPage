import React, { useState, useRef } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function ImageSlicer() {
    const [sliderPosition, setSliderPosition] = useState(50);
    //const handlerRef = useRef(null);

    /*const handleSliderPositionChange = (position) => {
        let auto = false;
        if (position > 75) {
            setSliderPosition(100);
            auto = true;
        } else if (position < 25) {
            setSliderPosition(0);
            auto = true;
        } else if (position >= 25 && position <= 75){
            if (handlerRef.current) {
                handlerRef.current.style.opacity = 1;
            }
            auto = false;
        }
        if (auto) {
            if (handlerRef.current) handlerRef.current.style.opacity = 0;
        }
        console.log("Handler position:", position);
    };*/

    return (
        <ReactCompareSlider
            boundsPadding={0}
            handle={
                <img
                    src="/images/slider.png"
                    alt="slicer"
                    className={"slicer"}
                />
            }
            itemOne={<ReactCompareSliderImage src="/images/PepeSilver.jpg" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="/images/PepePurple.jpg" alt="Image two" />}
            //onPositionChange={handleSliderPositionChange}
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
