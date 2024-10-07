import React, { useLayoutEffect, useRef, useState } from 'react';

const FireArt = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const fireRef = useRef(null);
  const charSet = " .:*amk$AMK".split("");
  let fireArray = [];

  const getFontSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 480) return 10; // Small screens
    if (screenWidth <= 768) return 12; // Medium screens
    return 16; // Large screens
  };

  const initializeFire = () => {
    const fontSize = getFontSize();
    fireRef.current.style.fontSize = `${fontSize}px`;

    const container = fireRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = 400; // Fixed height

    const newWidth = Math.floor(containerWidth / (fontSize * 0.6)); // Calculate width based on font size
    const newHeight = Math.floor(containerHeight / fontSize); // Calculate height based on font size

    const newSize = newWidth * newHeight;
    fireArray = new Array(newSize + newWidth + 8).fill(0);

    setSize({ width: newWidth, height: newHeight });
  };

  const generateFire = () => {
    if (size.width === 0 || size.height === 0) return;

    for (let i = 0; i < 10; i++) {
      fireArray[Math.floor(Math.random() * size.width) + size.width * (size.height - 1)] = 70;
    }
    let fireString = '';
    for (let i = 0; i < size.width * size.height; i++) {
      fireArray[i] = Math.floor(
        (fireArray[i] + fireArray[i + 1] + fireArray[i + size.width] + fireArray[i + size.width + 1]) / 4
      );
      fireString += charSet[Math.min(fireArray[i], charSet.length - 1)];
      if (i % size.width > size.width - 2) fireString += '\r\n';
    }
    fireRef.current.textContent = fireString;
  };

  useLayoutEffect(() => {
    initializeFire();
    
    const interval = setInterval(generateFire, 50);

    const handleResize = () => {
      initializeFire();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [size.width, size.height]);

  return (
    <div style={{ margin: 0, padding: 0, overflow: 'hidden', color: 'black', position: 'relative', width: '100%', height: '400px' }}>
      <pre ref={fireRef} style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        whiteSpace: 'pre-wrap', 
        lineHeight: '1.2', 
        fontSize: `${getFontSize()}px`, 
      }}></pre>
    </div>
  );
};

export default FireArt;
