import React, { useState } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function ImageSlicer() {
    const [sliderPosition, setSliderPosition] = useState(50);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <ReactCompareSlider
                boundsPadding={0}
                handle={
                    <div>
                        <img
                            src="/images/slider.png"
                            alt="slicer"
                            className={"slicer"}
                        />
                    </div>
                }
                itemOne={
                    <>
                        <div style={{ position: 'relative', height: '100%', textAlign: 'center' }}>
                            <img
                                src="/images/PepeSilver.png"
                                alt="Image one"
                                style={{ width: '100%' }}
                            />
                            <img
                                src="/images/headPepeSilver.png"
                                alt="Image one"
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    maxWidth: 372, 
                                    zIndex: 2, 
                                }}
                            />
                       
                        </div>
                    </>
                }
                itemTwo={<ReactCompareSliderImage src="/images/PepePurple.png" alt="Image two" />}
                position={sliderPosition}
                portrait={false}
                onlyHandleDraggable={false}
                changePositionOnHover={false}
                style={{
                    flexGrow: 1,
                    width: '100%',
                    height: '100%'
                }}
            />
            <div
                                style={{
                                    position: 'absolute',
                                    top: '90%', 
                                    left: '50%', 
                                    transform: 'translate(-50%, -50%)',
                                    width: '60%',
                                    height: '60%', 
                                    borderRadius: '50%',
                                    background: 'linear-gradient(180deg, #5227FF 0%, rgba(97, 0, 255, 0) 100%)',
                                    opacity: 0.4,
                                    filter: 'blur(100px)',
                                    zIndex: 1,
                                    pointerEvents: 'none', 
                                    
                                }}
                            />
        </div>
    );
}
