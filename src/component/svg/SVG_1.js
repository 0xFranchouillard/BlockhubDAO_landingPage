import React, { useState } from 'react';

const MySVGComponent = ({ backgroundColor }) => {
  return (
    <svg width="800" height="474" viewBox="0 0 800 474" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill={backgroundColor} />
      <mask id="mask0_23_2913" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="12" width="800" height="450">
        <rect width="799.805" height="449.89" transform="translate(0 12)" fill="url(#paint0_radial_23_2913)" />
      </mask>
      <g mask="url(#mask0_23_2913)">
        <g clipPath="url(#clip0_23_2913)">
          <rect y="12" width="799.805" height="449.89" fill="url(#pattern0)" />
          <rect x="213.699" y="89.4805" width="372.409" height="372.409" fill="url(#pattern1)" />
        </g>
        <g clipPath="url(#clip1_23_2913)">
          <rect y="12" width="799.805" height="449.89" fill="url(#pattern2)" />
        </g>
      </g>
      <g filter="url(#filter0_bdii_23_2913)">
        <rect x="396.582" y="6.72656" width="7.42006" height="460.63" rx="3.71003" fill="#838383" fillOpacity="0.32" shapeRendering="crispEdges" />
        <rect x="396.582" y="6.72656" width="7.42006" height="460.63" rx="3.71003" stroke="white" strokeOpacity="0.32" strokeWidth="0.39053" shapeRendering="crispEdges" />
      </g>
      {/* Define patterns, filters, etc. */}
    </svg>
  );
};

const MyPage = () => {
  const [backgroundColor, setBackgroundColor] = useState('black');

  const changeBackgroundColor = () => {
    setBackgroundColor('red'); // Changer la couleur de fond
  };

  return (
    <div>
      <button onClick={changeBackgroundColor}>Changer la couleur de fond</button>
      <MySVGComponent backgroundColor={backgroundColor} />
    </div>
  );
};

export default MyPage;
