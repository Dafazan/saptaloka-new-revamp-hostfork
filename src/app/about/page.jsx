'use client'
import React, {useRef, useState, useEffect} from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { Parallax } from 'react-parallax'

const page = () => {
  return (
    <div className='bg-white w-screen min-h-screen'>
      <div className="relative w-screen min-h-screen">
        <div className='absolute w-screen h-[80%]'>
          {/* <Image
          alt="Displayed Image"
         
          src={'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58'}
          layout="fill" // Ensures the image covers the parent div
          className="object-cover" /> */}
          <Parallax className='w-full h-full p-[5%] flex flex-col justify-center'  bgImage="https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58" strength={400}>
       
       </Parallax>
        </div>
        <div className="absolute w-screen h-[80%] flex flex-col">
          <div className=' flex flex-col justify-center h-5/6 px-[5%]'>
            <div className=' w-3/6'>
              <p className='text-white font-light text-md text-xl uppercase'>Why Saptaloka Digital?</p>
              <p className='text-white font-semibold text-4xl'>Our Mission is to Develop Solution to solve Digital Transformation for easier life</p>
            </div>
          </div>
         
          <div className='h-2/6'>

          <Ous/>
          <div className='mx-[5%]  border-white border-b-[1px] pb-2'></div>
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
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
          <p className='font-bold text-[120px] text-white whitespace-nowrap pe-10' ref={firstText}>SAPTALOKA STORY - </p>
          <p className='font-bold text-[120px] text-white whitespace-nowrap pe-10' ref={secondText}>SAPTALOKA STORY - </p>
        </div>
      </div>
    </main>
  )
}



export default page
