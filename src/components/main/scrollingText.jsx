'use client'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Observer } from 'gsap/Observer';
//import styles from './ScrollingText.module.scss'; // Assuming SCSS file is named ScrollingText.module.scss

gsap.registerPlugin(Observer);

function ScrollingText() {
  const railRef = useRef(null);

  useEffect(() => {
    const items = gsap.utils.toArray(railRef.current.children);

    const totalWidth = items.reduce((acc, el) => acc + el.offsetWidth, 0);
    const containerWidth = railRef.current.offsetWidth;

    const loopTimeline = gsap.timeline({
      repeat: -1,
      paused: false,
      defaults: { ease: 'none' },
    });

    items.forEach((item, i) => {
      const distance = totalWidth + item.offsetWidth; // Calculate total travel distance
      loopTimeline.to(item, {
        x: `+=${-distance}`, // Move left by total distance
        duration: distance / 100, // Adjust duration based on speed
        ease: 'none',
      }, 0); // All items share the same start time
    });

    // Reset item positions to create seamless looping
    gsap.set(items, { x: (_, el) => el.offsetLeft });

    Observer.create({
      onChangeY(self) {
        const speedFactor = self.deltaY < 0 ? -2.5 : 2.5;
        gsap.to(loopTimeline, {
          timeScale: speedFactor,
          duration: 0.2,
        });
      },
    });

    return () => {
      loopTimeline.kill();
    };
  }, []);

  return (
    <div className='w-screen h-screen bg-white scrollingText'>
      <div className='rail' ref={railRef}>
        <h4>Lorem Ipsum Sit Dolor</h4>
        <h4>Lorem Ipsum Sit Dolor</h4>
        <h4>Lorem Ipsum Sit Dolor</h4>
      </div>
    </div>
  );
}

export default ScrollingText;