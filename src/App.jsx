import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import ClickRipple from './components/ClickRipple';
import FallingLetter from './components/FallingLetter';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [clickEffect, setClickEffect] = useState(null);
  const [cursorStyle, setCursorStyle] = useState('default');
  const [fallingLetters, setFallingLetters] = useState([]);
  const [letterCount, setLetterCount] = useState(0);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const isValidCharacter = (key) => {
      return (
        // Letters
        /^[a-zA-Z]$/.test(key) ||
        // Numbers
        /^[0-9]$/.test(key) ||
        // Special characters
        /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]$/.test(key)
      );
    };

    const handleKeyPress = (e) => {
      // Only create falling letters for valid characters
      if (isValidCharacter(e.key)) {
        const randomX = Math.random() * (window.innerWidth - 20);
        setFallingLetters(prev => [
          ...prev,
          {
            id: letterCount,
            letter: e.key,
            x: randomX
          }
        ]);
        setLetterCount(prev => prev + 1);
      }

      // Get all sections for smooth scrolling
      const sections = document.querySelectorAll('section');
      const sectionArray = Array.from(sections);

      // Handle smooth scrolling with arrow keys
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (currentSectionIndex < sectionArray.length - 1) {
          const nextSection = sectionArray[currentSectionIndex + 1];
          nextSection.scrollIntoView({ behavior: 'smooth' });
          setCurrentSectionIndex(prev => prev + 1);
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentSectionIndex > 0) {
          const prevSection = sectionArray[currentSectionIndex - 1];
          prevSection.scrollIntoView({ behavior: 'smooth' });
          setCurrentSectionIndex(prev => prev - 1);
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        sectionArray[0].scrollIntoView({ behavior: 'smooth' });
        setCurrentSectionIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        sectionArray[sectionArray.length - 1].scrollIntoView({ behavior: 'smooth' });
        setCurrentSectionIndex(sectionArray.length - 1);
      } else if (e.key === 'PageDown') {
        e.preventDefault();
        const nextIndex = Math.min(currentSectionIndex + 1, sectionArray.length - 1);
        sectionArray[nextIndex].scrollIntoView({ behavior: 'smooth' });
        setCurrentSectionIndex(nextIndex);
      } else if (e.key === 'PageUp') {
        e.preventDefault();
        const prevIndex = Math.max(currentSectionIndex - 1, 0);
        sectionArray[prevIndex].scrollIntoView({ behavior: 'smooth' });
        setCurrentSectionIndex(prevIndex);
      }
    };

    // Update current section on scroll
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= -window.innerHeight / 2 && rect.top <= window.innerHeight / 2) {
          setCurrentSectionIndex(index);
        }
      });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [letterCount, currentSectionIndex]);

  // Clean up falling letters after animation
  useEffect(() => {
    if (fallingLetters.length > 0) {
      const timer = setTimeout(() => {
        setFallingLetters(prev => prev.slice(1));
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [fallingLetters]);

  const handleClick = (e) => {
    setClickEffect({
      x: e.clientX,
      y: e.clientY,
      timestamp: Date.now()
    });
    setTimeout(() => setClickEffect(null), 500);
  };

  return (
    <div className="min-h-screen bg-[#1d3557] text-[#f1faee] cursor-none" onClick={handleClick}>
      <CustomCursor mousePosition={mousePosition} cursorStyle={cursorStyle} />
      <ClickRipple clickEffect={clickEffect} />
      
      {/* Render falling letters */}
      {fallingLetters.map(({ id, letter, x }) => (
        <FallingLetter key={id} letter={letter} startX={x} />
      ))}
      
      <Hero isVisible={isVisible} />
      <Projects setCursorStyle={setCursorStyle} />
      <Skills setCursorStyle={setCursorStyle} />
      <Experience setCursorStyle={setCursorStyle} />
      <Contact setCursorStyle={setCursorStyle} />

      <div className="fixed bottom-4 right-4 bg-[#457b9d] p-4 rounded-lg border-2 border-[#a8dadc] text-[#f1faee] font-mono text-sm opacity-70 hover:opacity-100 transition-opacity">
        <p className="mb-2">Keyboard Controls:</p>
        <ul className="space-y-1">
          <li>↑/↓ - Navigate sections</li>
          <li>PgUp/PgDn - Previous/Next section</li>
          <li>Home/End - First/Last section</li>
          <li>Type to create falling letters</li>
        </ul>
      </div>

      <footer className="py-8 text-center text-[#a8dadc] bg-[#1d3557] font-mono border-t-2 border-[#a8dadc]">
        <p>/* © 2025 Muhammed Nihal CY. All rights reserved. */</p>
      </footer>

      <style>{`
        @keyframes ripple {
          0% { transform: scale(0); opacity: 1; }
          100% { transform: scale(4); opacity: 0; }
        }
        
        .animate-ripple {
          animation: ripple 0.5s linear;
        }

        html {
          scroll-snap-type: y mandatory;
        }

        section {
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }
      `}</style>
    </div>
  );
};

export default App;