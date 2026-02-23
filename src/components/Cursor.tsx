import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export const Cursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [cursorType, setCursorType] = useState<'default' | 'button' | 'image' | 'text' | 'card'>('default');

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a')) {
        setCursorType('button');
      } else if (target.closest('img')) {
        setCursorType('image');
      } else if (target.closest('p') || target.closest('h1') || target.closest('h2')) {
        setCursorType('text');
      } else if (target.closest('.product-card')) {
        setCursorType('card');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const variants = {
    default: {
      width: 24,
      height: 24,
      backgroundColor: 'rgba(90, 90, 64, 0.2)',
      border: '1px solid rgba(90, 90, 64, 0.5)',
    },
    button: {
      width: 48,
      height: 48,
      backgroundColor: 'rgba(90, 90, 64, 0.1)',
      border: '1px solid rgba(90, 90, 64, 0.8)',
    },
    image: {
      width: 64,
      height: 64,
      backgroundColor: 'transparent',
      border: '2px dashed rgba(90, 90, 64, 0.5)',
    },
    text: {
      width: 8,
      height: 8,
      backgroundColor: 'rgba(90, 90, 64, 1)',
      border: 'none',
    },
    card: {
      width: 40,
      height: 40,
      backgroundColor: 'rgba(90, 90, 64, 0.05)',
      border: '1px solid rgba(90, 90, 64, 0.3)',
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={variants[cursorType]}
      transition={{ type: 'spring', damping: 20, stiffness: 250 }}
    >
      {/* Measuring Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-fabric-accent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-fabric-accent" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] w-2 bg-fabric-accent" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] w-2 bg-fabric-accent" />
      </div>
      
      {cursorType === 'default' && (
        <div className="w-1 h-1 bg-fabric-accent rounded-full" />
      )}
      {cursorType === 'image' && (
        <div className="text-[8px] font-mono text-fabric-accent uppercase tracking-widest">View</div>
      )}
    </motion.div>
  );
};
