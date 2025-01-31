'use client'
import React, {useRef, useState, useEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { Parallax } from 'react-parallax'
import { HoverEffect } from '../../components/ui/card-hover-effect'
import { motion } from 'framer-motion';
import Card from '../../components/cards/Infocard'
import { useInView } from 'react-intersection-observer';

import { ReactLenis, useLenis } from "lenis/react";
import Image from 'next/image'
const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const page = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Animates only once
    threshold: 0.0005, // 20% of the element is visible
  });
  return (


    <ReactLenis root>
      
    <div className='bg-white w-screen min-h-screen overflow-x-hidden'>
      <div className="relative w-screen min-h-[50vh] md:min-h-screen">
        <div className='absolute w-screen h-full md:h-[80%]'>
         
          <Parallax bgImageStyle={{
            objectFit: 'cover', // Ensures the image covers the area without stretching
            objectPosition: 'center', // Centers the image
          }} className='w-full h-full p-[5%] flex flex-col justify-center'  bgImage="https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fwebp%2Fweb.webp?alt=media&token=346556c8-86e7-4d47-b802-ab2e8146fdb5" strength={400}>
              
       </Parallax>
        </div>
        <div className="absolute w-screen h-[80%] flex flex-col">
          <div className=' flex flex-col justify-center md:h-5/6 h-full px-[5%]'>
            <div className=' md:w-3/6'>
              <p className='text-white font-light text-md text-sm md:text-xl uppercase'>Blog and News</p>
              <p className='text-white font-semibold text-2xl md:text-4xl'>Read latest blogs and news from Saptaloka Digital staff</p>
            </div>
          </div>
         
          <div className='h-2/6 md:block hidden'>

          <Ous/>
          <div className='mx-[5%]  border-white border-b-[1px] pb-2'></div>
          </div>
        </div>
      </div>
      <div className="min-h-screen w-full px-[5%]">
       
      <div className='flex gap-1 md:gap-5 md:pt-0 pt-5'>
        <button className='md:text-md text-sm md:py-1 md:px-3 px-1 bg-black text-white'>ALL</button>
         <button className='md:text-md text-sm md:py-1 md:px-3 px-1 border border-1 border-black text-black hover:bg-black hover:text-white'>NEWS</button>
         <button className='md:text-md text-sm md:py-1 md:px-3 px-1 border border-1 border-black text-black hover:bg-black hover:text-white'>BLOGS</button>
         <button className='md:text-md text-sm md:py-1 md:px-3 px-1 border border-1 border-black text-black hover:bg-black hover:text-white'>JOURNALS</button>
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-3 gap-9 my-5'>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
        
      </div>
      <div className='w-full flex justify-center my-20'>
        <button className='py-1 px-3 border border-1 border-black text-black hover:bg-black hover:text-white'>LOAD MORE</button>
      </div>
       <div className='w-full h-[1px] bg-black'>
        
       </div>
      </div>
       
    </div>
    </ReactLenis>
  )
}



function Ous(){
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;



useEffect( () => {
  gsap.set(secondText.current, {left: secondText.current.getBoundingClientRect().width})
  requestAnimationFrame(animate);
}, [])

let direction = -1;



  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-500px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.1 * direction;
  }
  return (
    <main className=''>
      
      <div className='sliderContainer'>
        <div ref={slider} className='slider flex '>
          <p className='font-bold text-[120px] text-white whitespace-nowrap pe-10' ref={firstText}>INFORMATION CENTER - </p>
          <p className='font-bold text-[120px] text-white whitespace-nowrap pe-10' ref={secondText}>INFORMATION CENTER - </p>
        </div>
      </div>
    </main>
  )
}




export default page
