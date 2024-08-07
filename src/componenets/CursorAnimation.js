import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const SparkleParticle = ({ x, y, color }) => (
  <motion.div
    style={{
      position: 'fixed',
      left: x,
      top: y,
      width: 4,
      height: 4,
      borderRadius: '50%',
      backgroundColor: color,
      pointerEvents: 'none',
      zIndex: 9999,
    }}
    initial={{ opacity: 1, scale: 0 }}
    animate={{
      opacity: 0,
      scale: 2,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
    }}
    transition={{ duration: 0.5 }}
  />
);

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [sparkles, setSparkles] = useState([]);
  const sparkleCounter = useRef(0);

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (e.type === 'mousemove') {
        setMousePosition({ x: e.clientX, y: e.clientY });
        createSparkle(e.clientX, e.clientY);
      } else if (e.type === 'touchmove') {
        const touch = e.touches[0];
        setMousePosition({ x: touch.clientX, y: touch.clientY });
        createSparkle(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('touchmove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('touchmove', updateMousePosition);
    };
  }, []);

  const createSparkle = (x, y) => {
    const colors = [
      '#FFD700', 
      '#FF69B4', 
      '#00CED1', 
      '#FF4500', 
      '#32CD32', 
      '#8A2BE2', 
      '#FF1493', 
      '#00FFFF', 
      '#FF00FF', 
      '#1E90FF', 
    ];

    sparkleCounter.current += 1;
    const newSparkle = {
      id: `${Date.now()}-${sparkleCounter.current}`,
      x,
      y,
      color: colors[Math.floor(Math.random() * colors.length)],
    };

    setSparkles((prev) => [...prev, newSparkle]);

    setTimeout(() => {
      setSparkles((prev) => prev.filter((sparkle) => sparkle.id !== newSparkle.id));
    }, 500);
  };

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          width: 32,
          height: 32,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          mixBlendMode: 'difference',
        }}
      />
      {sparkles.map((sparkle) => (
        <SparkleParticle key={sparkle.id} {...sparkle} />
      ))}
    </>
  );
};

export default CustomCursor;
