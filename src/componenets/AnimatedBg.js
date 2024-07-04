import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createParticle = () => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 1,
    });

    setParticles(Array.from({ length: 50 }, createParticle));

    const interval = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles.map(particle => 
          Math.random() > 0.98 ? createParticle() : particle
        )
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 0,
    }}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ x: particle.x, y: particle.y, opacity: 0 }}
          animate={{
            x: [particle.x, particle.x + Math.random() * 100 - 50],
            y: [particle.y, particle.y + Math.random() * 100 - 50],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            position: 'absolute',
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #00ffff 0%, #ff00ff 100%)',
            boxShadow: '0 0 5px #00ffff, 0 0 10px #ff00ff',
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;