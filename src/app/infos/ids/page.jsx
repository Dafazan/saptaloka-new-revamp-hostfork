import Image from 'next/image'
import React from 'react'
import Card from '../../../components/cards/Infocard'

const page = () => {
  return (
    <div className='w-screen'>
        <div className='bg-black  w-full p-[5%] pt-20'>
            <div className='flex'>
                <div className=' w-full pe-[5%] flex flex-col gap-2'>
                    <p className='text-white text-xl'>20 Jan 2025</p>
                    <p className='text-white text-4xl font-bold uppercase'>Saptaloka Digital Conducts new research in Artificial Inteligence</p>
                    <p className='text-white'>By: Muhammad Tio Rahman</p>
                </div>
                <div className='w-full'>
                    <Image className='w-full h-full object-cover' src={'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fwebp%2Fweb.webp?alt=media&token=346556c8-86e7-4d47-b802-ab2e8146fdb5'} alt='infos' width={1080} height={720}/>
                </div>
            </div>
        </div>
        <div className='p-[5%] flex justify-between'>
            <div className='w-[60%] text-md flex flex-col gap-4'>

            <p className='font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>

            <Image src={'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fwebp%2Ffounderlnd.webp?alt=media&token=aceec864-79c3-4df4-9cac-bcdb38026cea'} alt='' width={1080} height={720} className='w-full'/>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
            </div>

            <div className='w-[30%] flex flex-col gap-5'>
                <p className='font-bold text-xl'>MORE BLOGS AND NEWS</p>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
      
    </div>
  )
}

export default page
