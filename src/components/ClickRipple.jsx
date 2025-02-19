import React from 'react';

const ClickRipple = ({ clickEffect }) => clickEffect && (
  <div
    className="fixed pointer-events-none w-12 h-12 border-2 border-[#f1faee] rounded-full animate-ripple"
    style={{
      left: clickEffect.x + 'px',
      top: clickEffect.y + 'px',
      transform: 'translate(-50%, -50%)'
    }}
  />
);

export default ClickRipple;