'use client'
import React, { useEffect, useState } from 'react';
import Logo from '../icons/Logo';
import { AnimatePresence, delay, motion } from 'framer-motion';

const slideUp = {
  initial: {
    y: "0",
  },
  animate: {
    y: "0",
  },
  exit: {
    y: "-100%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    updateDimensions(); // Set dimensions initially
    window.addEventListener('resize', updateDimensions); // Update on resize

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${
    dimension.height + 300
  } 0 ${dimension.height} Z`;

    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${
    dimension.height} 0 ${dimension.height} Z`;

    const curve = {
        initial: {
           d:initialPath
        },
        animate: {
           d:targetPath
        },
        exit: {
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
        },
        
    }

  return (
    <div className="absolute">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            variants={slideUp}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-screen h-screen bg-black z-50"
          >
            {dimension.height > 0 && (
              <>
                <div className="opacity-20 w-full h-full flex justify-center items-center">
                  <Logo />
                </div>
                <svg className="svgs">
                  <motion.path className="paths" variants={curve}
            initial="initial"
            animate="animate"
            exit="exit" d={initialPath}></motion.path>
                </svg>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Preloader;