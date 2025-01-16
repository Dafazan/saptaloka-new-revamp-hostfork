
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
        setColor("text-[#000000]");
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
          <p className={`text-3xl font-light ${color}`}>{number}</p>
        </div>
        <div className="flex flex-col items-start">
          <p className={`text-lg ${color}`}>{about}</p>
          <p className={`text-5xl font-bold uppercase ${color}`}>{name}</p>
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
      url: 'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58',
    },
    {
      number: 2,
      about: 'Spare Management',
      name: 'Telkom Infra',
      url: 'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/Portfolio%2FDSC02329.JPG?alt=media&token=d527863d-9c5f-4677-b2d5-29cf38dd15a7',
    },
    {
      number: 3,
      about: 'Inventory Management',
      name: 'Indolakto',
      url: 'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/Portfolio%2FDSC02343.JPG?alt=media&token=79b3a29e-22da-4672-939c-b7d5e158306e',
    },
    {
      number: 4,
      about: 'Waste Water Treatment Simulator',
      name: 'Vosen',
      url: 'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fbanner.png?alt=media&token=e5561bb9-1af4-4224-8743-0462f5f34c58',
    },
    {
      number: 5,
      about: 'Online Umrah Platform',
      name: 'Ibadahku',
      url: 'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/Portfolio%2FDSC02338.JPG?alt=media&token=1f2342e2-d79a-45bd-a594-4ec28a77c607',
    },
    {
      number: 6,
      about: 'Company Profile',
      name: 'TYS Consultant',
      url: 'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/Portfolio%2FDSC02338.JPG?alt=media&token=1f2342e2-d79a-45bd-a594-4ec28a77c607',
    },
    {
      number: 7,
      about: 'Catalogue Website',
      name: 'ASK Perfume',
      url: 'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/Portfolio%2FDSC02338.JPG?alt=media&token=1f2342e2-d79a-45bd-a594-4ec28a77c607',
    },
     {
      number: 8,
      about: 'Social Media App',
      name: 'Aplikasi Suara Konsumen (ASK)',
      url: 'https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/Portfolio%2FDSC02338.JPG?alt=media&token=1f2342e2-d79a-45bd-a594-4ec28a77c607',
    },
  ];

  const currentImage =
    hoveredButton !== null
      ? database.find((item) => item.number === hoveredButton)?.url
      : defaultImage;

  return (
    <div className="bg-white w-screen h-screen flex overflow-hidden">
      {/* Button List */}
      <div className="w-7/12 h-full overflow-y-scroll py-[8%] ps-[5%] flex flex-col gap-4">
        {database.map((item) => (
          <Buttones
            key={item.number}
            number={item.number}
            about={item.about}
            name={item.name}
            onHover={setHoveredButton} // Directly pass setHoveredButton
          />
        ))}
      </div>

      {/* Image Display */}
      <div className="w-5/12 h-full bg-black flex justify-center items-center relative">
        <motion.div
          key={currentImage} // React to changes in currentImage
          className="absolute w-full h-full flex justify-center items-center"
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
  );
};

export default Page;
