'use client'
import React, {useState} from 'react'
import { Parallax } from 'react-parallax'
import { motion } from "framer-motion";

const page = () => {

    const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
   <>
   <div>
      <div className='bg-black w-screen h-[50px]'></div>
     <div className='w-screen min-h-screen flex bg-white'>
        <div className='w-5/12 bg-black'>
        <Parallax className='w-full h-full p-[5%] flex flex-col justify-center bg-cover'  bgImage="https://firebasestorage.googleapis.com/v0/b/saptaloka-web.appspot.com/o/images%2Fwebp%2Flong.webp?alt=media&token=fe9f5378-7059-4a0e-9c94-2853a5aaacb5" strength={400}/>
        </div>
        <div className='w-7/12 px-[5%] pt-20 pb-10'>
        <p className='text-black font-semibold text-4xl uppercase'>Get In Touch</p>
        
        <div>
          <form className="flex md:flex-row flex-col mt-7">
          <div className="w-full flex flex-col gap-3">
            <div className="w-full">
              <p className="text-[14px] font-bold">
                WHAT KIND OF SERVICE DO YOU NEED?
              </p>
              <div className="relative">
                <input
                  type="text"
                  className="border-b-[1.5px] border-[#00103E] text-[16px] bg-transparent w-full h-10 focus:outline-none focus:border-black cursor-pointer pr-8"
                  placeholder="Select an option..."
                  onClick={toggleDropdown}
                  value={selectedOption}
                  readOnly
                />
                <div
                  className="absolute right-2 top-3 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transition-transform ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {isOpen && (
                  <motion.div
                    initial={{ scaleY: 0, transformOrigin: "top" }}
                    animate={{ scaleY: 1, transformOrigin: "top" }}
                    exit={{ scaleY: 0, transformOrigin: "top" }}
                    transition={{ duration: 0.2 }}
                    className="absolute z-10 mt-2 bg-[#000] shadow-lg w-full"
                  >
                    <ul>
                      <li
                        className="px-4 py-1 text-[#D8F3FF] hover:text-[#00103E] hover:bg-[#D8F3FF] cursor-pointer border-b border-[#D8F3FF]"
                        onClick={() => selectOption("GENERAL INQUIRY")}
                      >
                        GENERAL INQUIRY 
                      </li>
                      <li
                        className="px-4 py-1 text-[#D8F3FF] hover:text-[#00103E] hover:bg-[#D8F3FF] cursor-pointer border-b border-[#D8F3FF]"
                        onClick={() =>
                          selectOption(
                            "BUSINESS DIGITAL SOLUTION - SAPTALOKA ERP"
                          )
                        }
                      >
                        BUSINESS DIGITAL SOLUTION - SAPTALOKA ERP
                      </li>
                      <li
                        className="px-4 py-1 text-[#D8F3FF] hover:text-[#00103E] hover:bg-[#D8F3FF] cursor-pointer border-b border-[#D8F3FF]"
                        onClick={() =>
                          selectOption(
                            "BUSINESS DIGITAL SOLUTION - SAPTALOKA MES"
                          )
                        }
                      >
                        BUSINESS DIGITAL SOLUTION - SAPTALOKA MES
                      </li>
                      <li
                        className="px-4 py-1 text-[#D8F3FF] hover:text-[#00103E] hover:bg-[#D8F3FF] cursor-pointer border-b border-[#D8F3FF]"
                        onClick={() =>
                          selectOption(
                            "BUSINESS DIGITAL SOLUTION - SAPTALOKA POS"
                          )
                        }
                      >
                        BUSINESS DIGITAL SOLUTION - SAPTALOKA POS
                      </li>
                      <li
                        className="px-4 py-1 text-[#D8F3FF] hover:text-[#00103E] hover:bg-[#D8F3FF] cursor-pointer border-b border-[#D8F3FF]"
                        onClick={() =>
                          selectOption(
                            "IT SOLUTION - SAPTALOKA SOFTWARE DEVELOPMENT"
                          )
                        }
                      >
                        IT SOLUTION - SAPTALOKA SOFTWARE DEVELOPMENT
                      </li>
                      <li
                        className="px-4 py-1 text-[#D8F3FF] hover:text-[#00103E] hover:bg-[#D8F3FF] cursor-pointer border-b border-[#D8F3FF]"
                        onClick={() =>
                          selectOption(
                            "IT SOLUTION - SAPTALOKA WEBSITE DEVELOPMENT"
                          )
                        }
                      >
                        IT SOLUTION - SAPTALOKA WEBSITE DEVELOPMENT
                      </li>
                      <li
                        className="px-4 py-1 text-[#D8F3FF] hover:text-[#00103E] hover:bg-[#D8F3FF] cursor-pointer border-b border-[#D8F3FF]"
                        onClick={() =>
                          selectOption(
                            "IT SOLUTION - SAPTALOKA GAME DEVELOPMENT"
                          )
                        }
                      >
                        IT SOLUTION - SAPTALOKA GAME DEVELOPMENT
                      </li>
                    </ul>
                  </motion.div>
                )}
              </div>
            </div>
            <div className="w-full">
              <p className="text-[14px] font-bold">NAME</p>
              <input
                required
                type="text"
                className="border-b-[1.5px] border-[#00103E] text-[16px] bg-transparent w-full h-10 focus:outline-none focus:border-black"
                placeholder=""
              />
            </div>
            <div className="w-full">
              <p className="text-[14px] font-bold">EMAIL</p>
              <input
                required
                type="text"
                className="border-b-[1.5px] border-[#00103E] text-[16px] bg-transparent w-full h-10 focus:outline-none focus:border-black"
                placeholder=""
              />
            </div>
            <div className="w-full">
              <p className="text-[14px] font-bold">PHONE NUMBER</p>
              <input
                type="text"
                className="border-b-[1.5px] border-[#00103E] text-[16px] bg-transparent w-full h-10 focus:outline-none focus:border-black"
                placeholder=""
              />
            </div>
            <div className="w-full">
              <p className="text-[14px] font-bold">SUBJECT</p>
              <input
                required
                type="text"
                className="border-b-[1.5px] border-[#00103E] text-[16px] bg-transparent w-full h-10 focus:outline-none focus:border-black"
                placeholder=""
              />
            </div>
            <div className="w-full">
              <p className="text-[14px] font-bold">MESSAGE</p>
              <textarea
                required
                rows={5}
                className="border-b-[1.5px] border-[#00103E] text-[16px] bg-transparent w-full focus:outline-none focus:border-black"
                placeholder=""
              />
            </div>
            <div className="w-full h-full flex flex-col gap-5">
              <a
                href="mailto:saptalokadigital@gmail.com"
                type="submit"
                className="w-full md:h-full h-10 bg-[#000] hover:bg-[#363636] text-[#D8F3FF] text-[14px] font-bold flex justify-center items-center gap-2 hover:gap-4 duration-200 py-4" 
              >
                <p className='text-white text-xl'>Let&#39;s Talk!</p>
                <div>
                  
                </div>
              </a>
              <p className='w-full text-center'>Or</p>
               <a
                href="mailto:saptalokadigital@gmail.com"
                type="submit"
                className="w-full md:h-full h-10 bg-[#000] hover:bg-[#363636] text-[#D8F3FF] text-[14px] font-bold flex justify-center items-center gap-2 hover:gap-4 duration-200 py-4" 
              >
                <p className='text-white text-xl'>Contact us via WhatsApp</p>
                <div>
                  
                </div>
              </a>
            </div>
          </div>
          
        </form>

        </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default page
