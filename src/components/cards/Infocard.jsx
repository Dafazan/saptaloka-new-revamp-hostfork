import React from 'react'
import Image from 'next/image'

function Card(){
  return(
     <a href='/infos/ids' className='w-full flex flex-col gap-3 justify-between'>
          <div className='w-full h-[30vh] bg-black relative'>
            <Image width={1080} height={720} alt='infos' src={'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fwebp%2Fweb.webp?alt=media&token=346556c8-86e7-4d47-b802-ab2e8146fdb5'} className='w-full h-full object-cover absolute'/>
            <div className='w-full h-full absolute flex flex-col justify-between p-3'>
             <div className='h-full'></div>
              <div className='h-full  flex flex-col justify-end'>
                <div className="flex"><div className='py-1 px-3 bg-white text-black'>NEWS</div>
                <div></div></div>
              </div>
            </div>
          </div>
          <div><p className='text-xl font-medium'>20 Jan 2025</p></div>
          <div><p className='uppercase text-2xl line-clamp-3 font-bold'>Saptaloka Digital Conducts new research in Artificial Inteligence</p></div>
        </a>
  )
}

export default Card
