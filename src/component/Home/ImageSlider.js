import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const ImageSlider = ({ imageBackgroundLeft, imageForegroundLeft, imageBackgroundRight, imageForegroundRight }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef(null);

  const handleMouseDown = (event) => {
    const slider = sliderRef.current;
    const initialPosition = event.clientX - slider.getBoundingClientRect().left;

    const handleMouseMove = (moveEvent) => {
      const newPosition = moveEvent.clientX - initialPosition;
      const newSliderPosition = Math.min(Math.max(newPosition / slider.offsetWidth * 100, 0), 100);
      setSliderPosition(newSliderPosition);
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const { x } = useSpring({
    x: sliderPosition,
    config: { tension: 300, friction: 30 },
  });

  const clipPathLeft = `inset(${x.interpolate((position) => position * -1 + 100)}% 0 0 ${x.interpolate((position) => position)}%)`;
  const clipPathRight = `inset(0 ${x.interpolate((position) => position * -1 + 100)}% ${x.interpolate((position) => position)}% 0)`;

  return (
    <div className="image-slider">
      <animated.div className="image-container" style={{ clipPath: clipPathLeft }}>
        <img src={imageBackgroundLeft} alt="Image Background Left" className="image-background" style={{ zIndex: 1 }} />
        <img src={imageForegroundLeft} alt="Image Foreground Left" className="image-foreground" style={{ zIndex: 2, maxWidth: '100%', objectFit: 'contain' }} />
      </animated.div>
      <animated.div className="image-container" style={{ clipPath: clipPathRight }}>
        <img src={imageBackgroundRight} alt="Image Background Right" className="image-background" style={{ zIndex: 1 }} />
        <img src={imageForegroundRight} alt="Image Foreground Right" className="image-foreground" style={{ zIndex: 2, maxWidth: '100%', objectFit: 'contain' }} />
      </animated.div>
      <animated.div
        ref={sliderRef}
        className="slider"
        style={{ left: x.interpolate((position) => `${position}%`) }}
        onMouseDown={handleMouseDown}
      >
        <div className="slider-handle"></div>
      </animated.div>
    </div>
  );
};

export default ImageSlider;
