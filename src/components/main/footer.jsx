import React from 'react'
import Image from 'next/image'
import { div } from 'framer-motion/client'

function Footer() {
  return (
   <>
   <div>
     <div className='w-screen   px-[5%] py-[4%] flex  border-black border-b-[1px]'>
      <div className='w-[25%] pe-20'>
        <Image
        alt='logo'
        src={'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Flogos%2Fsldblue.png?alt=media&token=405e1814-f7de-41e4-b12c-b0d759c0e8d4'}
        width={800}
        height={800}
        />
      </div>
      <div className='w-[25%] flex flex-col gap-2  pe-8'>
        <p className='text-black font-semibold text-xl'>SAPTALOKA DIGITAL</p>
        <p className='text-black text-[16px]'>PT. Saptaloka Digital Indonesia</p>
        <a href='https://www.google.com/maps/place/PT+SAPTALOKA+DIGITAL+INDONESIA/data=!4m2!3m1!1s0x0:0x2124ffb9cb7ee4ad?sa=X&ved=1t:2428&ictx=111' target='blank' className='text-black text-[16px]'>JL. Melong Tengah No.138, Kota Cimahi, Jawa Barat 40534, Indonesia.</a>
      </div>
      <div className='w-[25%] flex flex-col gap-2 pe-8'>
        <p className='text-black font-semibold text-xl'>REACH US OUT</p>
        <a href="https://wa.me/62895339887714"
        target="blank">+62 895 3398 87714</a>
        <a href="mailto:admin@saptalokadigital.com"
        target="blank">admin@saptalokadigital.com</a>
      </div>
      <div className='w-[25%] flex flex-col gap-2 pe-8'>
        <a href='/portfolios' className='text-black uppercase'>Portfolio</a>
        <a href='/about' className='text-black uppercase'>About</a>
        <a href='/contact' className='text-black uppercase'>Contact</a>
        <a href='/partner' className='text-black uppercase'>Our Partner</a>
        <a href='/infos' className='text-black uppercase'>Information Center</a>
        
      </div>
    </div>
    <div className='w-full py-2 flex justify-center'>
    <p className='text-black text-sm'>
        © 2025 SAPTALOKA DIGITAL. All Right Reserved
    </p>
    </div>
   </div>
   </>
  )
}

export default Footer
