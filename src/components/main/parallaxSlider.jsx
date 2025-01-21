'use client';
import React, {useState, useEffect, useRef} from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Parallax } from 'react-parallax';
import { ReactLenis, useLenis } from 'lenis/react'


function ParallaxSlider() {
  
  return (
<ReactLenis root>
      
    <div 
   >
     
       <Parallax  bgImageStyle={{
    objectFit: 'cover', // Ensures the image covers the area without stretching
    objectPosition: 'center', // Centers the image
  }} className=' w-screen bg-cover md:h-screen h-[63vh] p-[5%] flex flex-col justify-center'  bgImage="https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fsequence.gif?alt=media&token=62e821f2-135a-43c9-987d-ebbff7e8454c" strength={200}>
       

       <div className=' w-[60%] '>
          <h2 className='uppercase text-white font-bold md:text-5xl text-2xl'>Lead Your Business to Digital Transformation</h2>
       </div>
       
       </Parallax>
       <Parallax  bgImageStyle={{
    objectFit: 'cover', // Ensures the image covers the area without stretching
    objectPosition: 'center', // Centers the image
  }} className=' w-screen bg-cover h-screen p-[5%] flex flex-col justify-center'  bgImage="https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fwebp%2Ferp.webp?alt=media&token=7f0b31f6-d44e-4c73-9481-bf2529236e49" strength={200}>
       <div className=' md:w-[60%] w-full h-screen py-5 flex flex-col justify-between'>
         <div></div>
          <h2 className='uppercase text-white font-bold md:text-5xl text-2xl'>Enterprise Resource Planning</h2>
          <p className='text-[#7a7a7a] opacity-80'>Image by: <a className='text-[#7a7a7a] ' href="www.freepik.com">Freepik</a></p>
       </div>
       </Parallax>
        <Parallax  bgImageStyle={{
    objectFit: 'cover', // Ensures the image covers the area without stretching
    objectPosition: 'center', // Centers the image
  }} className=' w-screen bg-cover h-screen p-[5%] flex flex-col justify-center'  bgImage="https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fwebp%2Fmes.webp?alt=media&token=9acd047a-40ae-4ac3-8e72-7eca9544d4ca" strength={200}>
       <div className=' md:w-[60%] w-full h-screen py-5 flex flex-col justify-between'>
         <div></div>
          <h2 className='uppercase text-white font-bold md:text-5xl text-2xl'>Manufacturing Execution System</h2>
          <p className='text-[#7a7a7a] opacity-80'>Image by: <a className='text-[#7a7a7a] ' href="www.freepik.com">Freepik</a></p>
       </div>
       </Parallax>
       
       <Parallax  bgImageStyle={{
    objectFit: 'cover', // Ensures the image covers the area without stretching
    objectPosition: 'center', // Centers the image
  }} className=' w-screen bg-cover h-screen p-[5%] flex flex-col justify-center'  bgImage="https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fwebp%2Fweb.webp?alt=media&token=346556c8-86e7-4d47-b802-ab2e8146fdb5" strength={200}>
      <div className=' md:w-[60%] w-full h-screen py-5 flex flex-col justify-between'>
         <div></div>
          <h2 className='uppercase text-white font-bold md:text-5xl text-2xl'>Company Profile Website</h2>
          <p className='text-[#7a7a7a] opacity-80'>Image by: <a className='text-[#7a7a7a] ' href="www.dafazan.my.id">Dafazan</a></p>
       </div>
       </Parallax>
       <Parallax  bgImageStyle={{
    objectFit: 'cover', // Ensures the image covers the area without stretching
    objectPosition: 'center', // Centers the image
  }} className=' w-screen bg-cover h-screen p-[5%] flex flex-col justify-center'  bgImage="https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fwebp%2Fmultip.webp?alt=media&token=634f3dff-db37-4421-8fc4-4a7df630724d" strength={200}>
       <div className=' md:w-[60%] w-full h-screen py-5 flex flex-col justify-between'>
         <div></div>
          <h2 className='uppercase text-white font-bold md:text-5xl text-2xl'>Multi-Platform App Development</h2>
          <p className='text-[#7a7a7a] opacity-80'>Image by: <a className='text-[#7a7a7a] ' href="www.freepik.com">Freepik</a></p>
       </div>
       </Parallax>
       <Parallax  bgImageStyle={{
    objectFit: 'cover', // Ensures the image covers the area without stretching
    objectPosition: 'center', // Centers the image
  }} className=' w-screen bg-cover h-screen p-[5%] flex flex-col justify-center'  bgImage="https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fwebp%2Fgame.webp?alt=media&token=21ba5ed0-5aa7-4de1-b02d-9d4efef6787c" strength={200}>
       <div className=' md:w-[60%] w-full h-screen py-5 flex flex-col justify-between'>
         <div></div>
          <h2 className='uppercase text-white font-bold md:text-5xl text-2xl'>Game Development</h2>
          <p className='text-[#7a7a7a] opacity-80'>Image by: <a className='text-[#7a7a7a] ' href="www.freepik.com">Freepik</a></p>
       </div>
       </Parallax>
       <Parallax  bgImageStyle={{
    objectFit: 'cover', // Ensures the image covers the area without stretching
    objectPosition: 'center', // Centers the image
  }} className=' w-screen bg-cover h-screen p-[5%] flex flex-col justify-center'  bgImage="https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fwebp%2Fittrain_11zon.webp?alt=media&token=3056d059-4118-4e1c-bba8-89fb2c34c99f" strength={200}>
       <div className=' md:w-[60%] w-full h-screen py-5 flex flex-col justify-between'>
         <div></div>
          <h2 className='uppercase text-white font-bold md:text-5xl text-2xl'>Saptaloka Academy</h2>
          <p className='text-[#7a7a7a] opacity-80'>Image by: <a className='text-[#7a7a7a] ' href="www.freepik.com">Freepik</a></p>
       </div>
       </Parallax>

       
    </div>
    </ReactLenis>
  )
}

export default ParallaxSlider
