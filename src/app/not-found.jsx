'use client'
import React, {useRef, useState, useEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'


const page = () => {
  return (
    <div className='bg-black'>
      <div className="relative w-screen min-h-screen">
              <div className='absolute w-screen h-[80%]'>
               
               
              </div>
              <div className="absolute w-screen h-[80%] flex flex-col">
                <div className=' flex flex-col justify-center h-5/6 px-[5%]'>
                  <div className=' w-3/6'>
                    <p className='text-white font-light text-md text-xl uppercase'>I think you are lost</p>
                    <p className='text-white font-semibold text-4xl'>You have entered the wrong page, make sure there is no typo.</p>
                  </div>
                </div>
               
                <div className='h-2/6'>
      
                <Ous/>
                <div className='mx-[5%]  border-white border-b-[1px] pb-2'></div>
                </div>
              </div>
            </div>
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
          <p className='font-bold text-[120px] text-white whitespace-nowrap pe-10' ref={firstText}>404 PAGE NOT FOUND - </p>
          <p className='font-bold text-[120px] text-white whitespace-nowrap pe-10' ref={secondText}>404 PAGE NOT FOUND - </p>
        </div>
      </div>
    </main>
  )
}


export default page
