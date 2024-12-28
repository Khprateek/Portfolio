import React, { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const rightDivRef = useRef(null);
  const [initialOffset, setInitialOffset] = useState(0);

  useEffect(() => {
    const calculateOffset = () => {
      if (rightDivRef.current) {
        const height = rightDivRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        const offset = height - viewportHeight;
        console.log('Height:', height, 'Viewport:', viewportHeight, 'Offset:', offset);
        setInitialOffset(offset);
      }
    };

    calculateOffset();

    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        setScrollPosition(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', calculateOffset);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateOffset);
    };
  }, []);

  // Adjusted scroll speeds
  const scrollSpeed = 1;
  const leftTransform = scrollPosition * scrollSpeed;
  const rightTransform = scrollPosition * scrollSpeed * 2; // Doubled for right side

  return (
    <div className="overflow-hidden min-h-[300vh]"> {/* Added min-height to ensure scrollable */}
      <div className="flex">
        <div
          className="flex flex-col w-1/2 relative overflow-hidden"
          style={{
            transform: `translateY(-${leftTransform}px)`,
            transition: 'transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)'
          }}
        >
          <img
            className="w-full h-screen object-cover"
            src="/assets/sasuke1.png"
            alt="Sasuke"
          />
          <img
            className="w-full h-screen object-cover"
            src="/assets/sasuke1.png"
            alt="Sasuke"
          />
        </div>
        <div
          ref={rightDivRef}
          className="flex flex-col w-1/2 relative overflow-hidden"
          style={{
            transform: `translateY(calc(-${initialOffset}px + ${rightTransform}px))`,
            transition: 'transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)'
          }}
        >
          <img
            className="w-full h-screen object-cover"
            src="/assets/naruto1.png"
            alt="Naruto"
          />
          <img
            className="w-full h-screen object-cover"
            src="/assets/naruto1.png"
            alt="Naruto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;