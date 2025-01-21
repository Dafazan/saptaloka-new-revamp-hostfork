
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ReactLenis, useLenis } from 'lenis/react'

// Animation settings
const imageAnimation = {
  initial: { opacity: 0, y: -100 }, // Start from above
  animate: { opacity: 1, y: 0 }, // Slide in to normal position
  exit: { opacity: 0, y: 100 }, // Slide out to the bottom
  transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
};


const defaultImage = 'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58'; // Replace with your actual default image path

function Buttones({ number, about, name, onHover }) {
  const [color, setColor] = useState("text-[#808080]");

  const hoverAnimation = {
    rest: { x: 0 },
    hover: { 
      x: 10, // Translate slightly to the right
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 10, // Bounce effect
      }
    }
  };

  return (
    <motion.a
      href="#"
      className={`flex flex-col gap-8 ${color}`}
      onMouseEnter={() => {
        setColor("text-[#ffffff]");
        onHover(number); // Call the onHover callback with the current button's number
      }}
      onMouseLeave={() => {
        setColor("text-[#808080]");
        onHover(null); // Reset hover state when mouse leaves
      }}
      variants={hoverAnimation} // Apply the hover animation
      initial="rest"
      whileHover="hover" // Trigger hover animation when hovered
    >
      <div className="font-normal flex gap-5">
        <div>
          <p className={`md:text-3xl text-xl font-light ${color}`}>{number}</p>
        </div>
        <div className="flex flex-col items-start">
          <p className={`md:text-lg text-sm ${color}`}>{about}</p>
          <p className={`md:text-5xl text-[30px] font-bold uppercase ${color}`}>{name}</p>
        </div>
      </div>
    </motion.a>
  );
}


const Page = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  // Main database
  const database = [
    {
      number: 1,
      about: 'Creative Website',
      name: 'QUN FILMS',
      url: 'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/Portfolio%2Fwebp%2Fqunporto.webp?alt=media&token=aea1e5d0-23e0-4b19-985d-563885f6a34c',
    },
    {
      number: 2,
      about: 'Spare Management',
      name: 'Telkom Infra',
      url: 'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/Portfolio%2Fwebp%2Finfraprto.webp?alt=media&token=e7d801f1-3453-4e0e-893d-89557715a888',
    },
    {
      number: 3,
      about: 'Inventory Management',
      name: 'Indolakto',
      url: 'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/Portfolio%2Fwebp%2Findooporto.webp?alt=media&token=4e49090b-c835-4e00-90a3-9cd5b09b242c',
    },
    {
      number: 4,
      about: 'Waste Water Treatment Simulator',
      name: 'Vosen',
      url: 'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/Portfolio%2Fwebp%2Fwwtporto.webp?alt=media&token=662b9df6-ef7d-4d36-a378-e0c398cc0de2',
    },
    {
      number: 5,
      about: 'Online Umrah Platform',
      name: 'Ibadahku',
      url: 'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/Portfolio%2Fwebp%2Fibadahporto.webp?alt=media&token=1eea9520-afb3-4818-80bf-b32986fcb955',
    },
    {
      number: 6,
      about: 'Company Profile',
      name: 'TYS Consultant',
      url: 'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/Portfolio%2Fwebp%2Ftysporto.webp?alt=media&token=5cabd7c8-f9e4-4e6b-9b47-8a20fcb9a541',
    },
    {
      number: 7,
      about: 'Catalogue Website',
      name: 'ASK Perfume',
      url: 'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/Portfolio%2Fwebp%2Faskpporto.webp?alt=media&token=e0ee8cd1-241d-46e8-8240-740ed3905ca5',
    },
     {
      number: 8,
      about: 'Social Media App',
      name: 'Aplikasi Suara Konsumen (ASK)',
      url: 'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/Portfolio%2Fwebp%2Faskporto.webp?alt=media&token=d7732037-c1be-4012-9e03-ed07c14721cc',
    },
     
  ];

  const currentImage =
    hoveredButton !== null
      ? database.find((item) => item.number === hoveredButton)?.url
      : defaultImage;

  return (
    <>
    <div>

    
    <div className="bg-white w-screen flex relative">
      <div className='absolute w-full h-full'>
        <div className="w-screen h-screen bg-black flex flex-row-reverse justify-between items-center fixed">
        <div></div>
        <motion.div
          key={currentImage} // React to changes in currentImage
          className="absolute w-[100vh] h-full flex justify-center items-center"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={imageAnimation}
        >
          <Image
  alt="Displayed Image"
  src={currentImage}
  layout="fill" // Ensures the image covers the parent div
  className="object-cover" // Maintains aspect ratio while covering
/>

        </motion.div>
      </div>
      </div>
      <div className='absolute w-full h-full'>
        <ReactLenis root>
      { /* content */ }
         <div className="w-7/12 h-full py-[8%] ps-[5%] flex flex-col gap-4">
         <div className='py-[50%]'></div>
      
        {database.map((item) => (
          <Buttones
            key={item.number}
            number={item.number}
            about={item.about}
            name={item.name}
            onHover={setHoveredButton} // Directly pass setHoveredButton
          />
        ))}
        <div className=' py-40 '></div>
        </div>
    </ReactLenis>
      </div>
      {/* Button List */}
     

      {/* Image Display */}
      
    </div>
    </div>
    </>

  );
};

export default Page;
