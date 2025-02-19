import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FallingLetter = ({ letter, startX }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -20, x: startX, opacity: 1, scale: 1.5, rotate: 0 }}
          animate={{ 
            y: window.innerHeight,
            opacity: 0,
            rotate: Math.random() * 360 - 180 // Random rotation between -180 and 180 degrees
          }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 2,
            ease: "easeIn",
            rotate: {
              duration: 4,
              ease: "linear"
            }
          }}
          className="fixed text-[#a8dadc] font-mono text-2xl pointer-events-none z-50 drop-shadow-[0_0_15px_rgba(168,218,220,0.7)]"
          style={{ top: 0 }}
        >
          {letter}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FallingLetter;