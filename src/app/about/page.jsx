'use client'
import React, {useRef, useState, useEffect} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import { Parallax } from 'react-parallax'
import { WobbleCard } from '../../components/ui/wobble-card'
import { HoverEffect } from '../../components/ui/card-hover-effect'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { ReactLenis, useLenis } from "lenis/react";
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
      <div className="relative w-screen min-h-screen">
        <div className='absolute w-screen h-[80%]'>
         
          <Parallax className='w-full h-full p-[5%] flex flex-col justify-center'  bgImage="https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fwebp%2Fweb.webp?alt=media&token=346556c8-86e7-4d47-b802-ab2e8146fdb5" strength={400}>
       
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
      <div className="min-h-screen w-full px-[5%]">
       
        <div className='flex w-full justify-between'>
          <div className='w-[30%] '>
          <p className='text-xl'>OUR STORY</p>
          </div>
          <div className='w-[70%] '>
          <p className='text-xl font-semibold flex flex-col gap-2'>
            <motion.span
            ref={ref}
            className="text-start"
            variants={textVariant}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            >PT. Saptaloka Digital Indonesia, established on January 1, 2021, was formerly known as Bengkel Coding. Bengkel Coding, founded in 2020, operated as an IT consultancy, successfully completing various client projects.</motion.span>

            <motion.span
            ref={ref}
            className="text-start"
            variants={textVariant}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, ease: 'easeOut' ,delay:0.2}}
            >
            As its portfolio grew, Bengkel Coding experienced significant development, leading to a rebranding in January 2021. The company adopted the name Saptaloka Digital Indonesia and formalized its status as a registered corporation (PT).
            </motion.span>
            <motion.span
            ref={ref}
            className="text-start"
            variants={textVariant}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, ease: 'easeOut', delay:0.4 }}
            >
             Throughout its transformation, Saptaloka Digital Indonesia has demonstrated a strong commitment to delivering innovative solutions. These include efficient Enterprise Resource Planning (ERP) systems and advanced Manufacturing Execution System (MES) solutions. The company serves clients from diverse sectors, including state-owned enterprises and private companies.
            </motion.span>
             </p>
          </div>
          
        </div>
        <div className='flex w-full justify-between'>
          <div className='w-[30%] '>
          
          </div>
          <div className='w-[70%] flex gap-5 pt-10'>
            <motion.div
            ref={ref}
            
            variants={textVariant}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, ease: 'easeOut' }}

            className='w-[50%]'>
              <p className='text-3xl font-bold '>Our Vision</p>
              <p className='text-xl'>Become a key partner by building client trust in building business flows digitally.</p>
              <p className='text-xl'>Making products in this field to provide solutions to society in the industrial era 4.0.</p>
              <p className='text-xl'>To be a pioneer of IT and Digital Marketing services and to develop innovation in the 4.0 industry era.</p>
            </motion.div>

            <motion.div
            ref={ref}
            
            variants={textVariant}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='w-[50%]'>
              <p className='text-3xl font-bold '>Our Mission</p>
              <p className='text-xl'>Help develop client's business in the field of IT Consultants and Digital Marketing as well as produce technology products that are useful for the community.</p>
            </motion.div>
          </div>
          
        </div>
        <div>
          <div className="flex gap-3 pt-20">
            <div className='w-[33%]  h-48'>
               <Parallax className='w-full h-full rounded-md bg-cover'  bgImage="https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fwebp%2Ffounderlnd.webp?alt=media&token=aceec864-79c3-4df4-9cac-bcdb38026cea" strength={100}/>
            </div>
            <div className='w-[33%]  h-48'>
              <Parallax className='w-full h-full rounded-md bg-cover'  bgImage="https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fwebp%2Fibdku.webp?alt=media&token=8ed73bba-55d6-49b9-be66-480282cab643" strength={200}/>
            </div>
            <div className='w-[33%]  h-48'>
              <Parallax className='w-full h-full rounded-md bg-cover'  bgImage="https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fwebp%2Fteams.webp?alt=media&token=80c8a18f-507f-4d07-92fc-5352f1e4f48a" strength={100}/>
            </div>
          </div>
        </div>
        <div>
          <div className="px-[10%] z-10 pt-20 ">
           
            <div className='flex gap-10 justify-between'>
              <div className='pt-12'>
                <p className='text-2xl text-end font-semibold uppercase'>Some of our clients.</p>
              </div>
            <div className='w-[70%]'>

            <HoverEffect className={'z-0'} items={projects} />
            </div>
            </div>
          </div>
        </div>
      </div>
       
        <div className='w-full h-screen flex justify-center items-center bg-slate-100'>
          <div className='flex flex-col gap-2'>
          <p className='text-5xl font-semibold'>Got a project?</p>
          <div className='flex gap-3'>
          <p className='text-5xl font-semibold'> Lets</p>
          <a className='text-5xl font-bold hover:text-gray-900 hover:bg-slate-100 duration-300 text-white bg-black rounded-md p-1' href="/contact">Get in touch</a>
          </div>
          </div>
        </div>
    </div>
    </ReactLenis>
  )
}

const projects = [
  {
    title: "Qun Films",
    link: "https://google.com",
    img:"https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/brand%2Fwhite%2Fqunz.png?alt=media&token=45f49317-1dde-4d65-ae2b-934db49867c7",
  },
   {
    title: "PT. Telkom Infra",
    link: "https://google2.com",
    img:"https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/brand%2Fwhite%2Ftelin.png?alt=media&token=38b6fbc8-0305-4061-86f1-04099e3645aa",
  },
   {
    title: "ABB",
    link: "https://google3.com",
    img:"https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/brand%2Fwhite%2Fabb.png?alt=media&token=e446e1f3-f301-4efb-b86e-e8b58a4be956",
  },
  {
    title: "Indolakto",
    link: "https://google4.com",
    img:"https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/brand%2Fwhite%2Findlkt.png?alt=media&token=c9f48ab4-f8d9-4731-b436-2845d73d953c",
  },
  {
    title: "Vosen",
    link: "https://google5.com",
    img:"https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/brand%2Fwhite%2Fvozz.png?alt=media&token=280f2e2d-13d4-44e8-829a-e4fd26ffad91",
  },
  {
    title: "PT. CBL",
    link: "https://google9.com",
    img:"https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/brand%2Fwhite%2Fcbl.png?alt=media&token=4a7c861f-f81f-4e27-a3cb-9eaff946deed",
  },
  {
    title: "PT. PLN",
    link: "https://google6.com",
    img:"https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/brand%2Fwhite%2Fpln.png?alt=media&token=32d07f56-bef8-4ab6-bdb6-9cf3b5ec1050",
  },
  {
    title: "Miemory",
    link: "https://google7.com",
    img:"https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/brand%2Fwhite%2Fmie.png?alt=media&token=34f33160-d21c-4084-9919-320c78a88457",
  },
  {
    title: "Cimol Bojot AA",
    link: "https://google8.com",
    img:"https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/brand%2Fwhite%2Fcbaa.png?alt=media&token=a625cbbb-e78f-4441-9263-373225c9b4aa",
  },
  
  
];

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
