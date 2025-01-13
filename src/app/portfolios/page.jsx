'use client'
import React, { useState } from 'react'

function Buttones({number, about, name}) {

const [color, setColor] = useState("text-[#808080]");
  return (
   <a href='#' className={`flex flex-col gap-8 ${color}`} 
   onMouseEnter={() => setColor("text-[#000000]")}
      onMouseLeave={() => setColor("text-[#808080]")}>
             <div className='font-normal flex gap-5'>
                <div>
                    <p className={`text-3xl font-light ${color}`}>{number}</p>
                </div>
                <div className='flex flex-col items-start'>
                    <p className={`text-lg ${color}`}>{about}</p>
                    <p className={`text-5xl font-bold uppercase ${color}`}>{name}</p>
                </div>
            </div>
         

    </a>
  )
}

const page = () => {
  return (
    <div className='bg-white w-screen h-screen flex overflow-hidden'>
        <div className="w-7/12 h-full overflow-y-scroll py-[20%] ps-[5%] flex flex-col gap-4">
           <Buttones
           number={'1'}
           about={"creative Website"}
           name={"QUN FILMS"}
           />
           <Buttones
           number={'2'}
           about={"creative Website"}
           name={"Telkom Infra"}
           />
           <Buttones
           number={'3'}
           about={"creative Website"}
           name={"Indolakto"}
           />
           <Buttones
           number={'4'}
           about={"creative Website"}
           name={"Vosen"}
           />
           <Buttones
           number={'5'}
           about={"creative Website"}
           name={"Ibadahku"}
           />
        </div>
        <div className="w-5/12 h-full bg-black"></div>
    </div>
  )
}

export default page
