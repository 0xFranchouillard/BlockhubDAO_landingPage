import React, { useState, useEffect } from 'react';
import { ReactCompareSlider } from 'react-compare-slider';

export default function ImageSlicer() {
    const [sliderPosition, setSliderPosition] = useState(50);

    useEffect(() => {
        const handleContainer = document.querySelector('[data-rcs="handle-container"]');
        if (handleContainer) {
            handleContainer.style.zIndex = 1000;
        }
    }, []);

    const handleSliderChange = newPosition => {
        setSliderPosition(newPosition);
    };

    const CustomHandle = () => {
        return (
            <div
                style={{
                    position: 'absolute',
                    width: '7.42px',
                    height: '460.63px',
                    left: 'calc(50% - 7.42px/2 + 0.39px)',
                    top: 'calc(50% - 460.63px/2 + 0.1px)',
                    background: 'rgba(131, 131, 131, 0.32)',
                    border: '0.39053px solid rgba(255, 255, 255, 0.32)',
                    boxShadow: '0px 0px 6.24847px #6100FF, inset -0.39053px -0.781059px 1.56212px rgba(0, 0, 0, 0.25), inset 0.39053px 0.781059px 4.68636px rgba(255, 255, 255, 0.64)',
                    backdropFilter: 'blur(3.12424px)',
                    borderRadius: '19.5265px',
                    cursor: 'pointer',
                    zIndex: 50, // Assurez-vous que le z-index est suffisamment élevé pour être au-dessus de tous les autres éléments
                }}
            ></div>
        );
    };

    return (
        <div style={{ width: '100%', height: '100%', paddingTop: '20px'}}>
             <div
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '100%',
                    transform: 'translate(-50%, -50%)',
                    width: '95%',
                    height: '95%',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, #5227FF 0%, rgba(97, 0, 255, 0) 80%)',
                    opacity: 0.4,
                    filter: 'blur(100px)',
                    zIndex: 1, // Ajustement du niveau de z-index
                    pointerEvents: 'none',
                }}
            />
            <ReactCompareSlider
                handle={<CustomHandle />}
                itemTwo={
                    <>
                    <div
                        style={{
                            clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}%  100%)`,
                            position: 'relative',
                            height: '100%',
                        }}
                    >
                        <img
                            src="/images/PepePurple.png"
                            alt="Image one"
                            style={{ width: '100%' }}
                        />
                        <img
                            src="/images/headPepePurple.png"
                            alt="Image one"
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                maxWidth: '100%',
                                zIndex: 2, // Ajustement du niveau de z-index
                            }}
                        />
                    </div>

                    </>
                }
                itemOne={
                   <>
                    <div
                        style={{
                            clipPath: `polygon(0 0, 0 100%, ${sliderPosition}% 100%, ${sliderPosition}% 0)`,
                            position: 'relative',
                            height: '100%',
                            textAlign: 'center',
                           
                        }}
                    >
                        <img
                            src="/images/PepeSilver.png"
                            alt="Image two"
                            style={{ width: '100%',
                        
                        }}
                        />
                        <img
                            src="/images/headPepeSilver.png"
                            alt="Image two"
                            style={{
                                position: 'absolute',
                                bottom: 0,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                maxWidth: '46%',
                                zIndex: 2, // Ajustement du niveau de z-index
                                filter: 'grayscale(100%)',
                            }}
                        />
                    </div>
                   </>
                }
                position={sliderPosition}
                onPositionChange={handleSliderChange}
                portrait={false}
                onlyHandleDraggable={false}
                changePositionOnHover={false}
                style={{
                    flexGrow: 1,
                    width: '100%',
                    height: '100%',
                    zIndex: 2, // Ajustement du niveau de z-index
                }}
            />
           
        </div>
    );
}
