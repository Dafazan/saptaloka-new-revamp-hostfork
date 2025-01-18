'use client';
import React, {useState, useEffect, useRef} from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Parallax } from 'react-parallax';


function ParallaxSlider() {
  

  return (

    <div>
     
       <Parallax className='w-screen h-screen p-[5%] flex flex-col justify-center'  bgImage="https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58" strength={200}>
       <div className=' w-[60%] '>
          <h2 className='uppercase text-white font-bold text-5xl'>Enterprise Resource Planning</h2>
       </div>
       </Parallax>
        <Parallax className='w-screen h-screen p-[5%] flex flex-col justify-center'  bgImage="https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58" strength={200}>
       <div className=' w-[60%] '>
          <h2 className='uppercase text-white font-bold text-5xl'>Manufacturing Execution System</h2>
       </div>
       </Parallax>
       
       <Parallax className='w-screen h-screen p-[5%] flex flex-col justify-center'  bgImage="https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58" strength={200}>
       <div className=' w-[60%] '>
          <h2 className='uppercase text-white font-bold text-5xl'>Company Profile Website</h2>
       </div>
       </Parallax>
       <Parallax className='w-screen h-screen p-[5%] flex flex-col justify-center'  bgImage="https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58" strength={200}>
       <div className=' w-[60%] '>
          <h2 className='uppercase text-white font-bold text-5xl'>Multi-Platform App Development</h2>
       </div>
       </Parallax>
       <Parallax className='w-screen h-screen p-[5%] flex flex-col justify-center'  bgImage="https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58" strength={200}>
       <div className=' w-[60%] '>
          <h2 className='uppercase text-white font-bold text-5xl'>Game Development</h2>
       </div>
       </Parallax>
       

       
    </div>
  )
}

export default ParallaxSlider
