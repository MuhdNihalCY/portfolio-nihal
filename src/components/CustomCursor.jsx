import React from 'react';

const CustomCursor = ({ mousePosition, cursorStyle }) => (
  <div 
    className="fixed pointer-events-none z-50 mix-blend-difference"
    style={{ 
      left: `${mousePosition.x}px`, 
      top: `${mousePosition.y}px`,
      transform: 'translate(-50%, -50%)'
    }}
  >
    <div className={`
      w-4 h-4 rounded-full bg-[#f1faee] transition-all duration-200
      ${cursorStyle === 'pointer' ? 'scale-150' : 'scale-100'}
    `}/>
  </div>
);

export default CustomCursor;