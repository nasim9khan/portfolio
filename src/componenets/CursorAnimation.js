import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (e.type === 'mousemove') {
        setMousePosition({ x: e.clientX, y: e.clientY });
        createSparkle(e.clientX, e.clientY);
      } else if (e.type === 'touchmove') {
        // Handle touch events
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
      '#FFD700', // Gold
      '#FF69B4', // Hot Pink
      '#00CED1', // Dark Turquoise
      '#FF4500', // Orange Red
      '#32CD32', // Lime Green
      '#8A2BE2', // Blue Violet
      '#FF1493', // Deep Pink
      '#00FFFF', // Cyan
      '#FF00FF', // Magenta
      '#1E90FF', // Dodger Blue
    ];

    const newSparkle = {
      id: Date.now(),
      x,
      y,
      color: colors[Math.floor(Math.random() * colors.length)],
    };

    setSparkles((prev) => [...prev, newSparkle]);

    // Remove sparkle after animation
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
