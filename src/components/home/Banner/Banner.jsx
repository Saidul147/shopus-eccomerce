import React, { useState } from 'react';
import bg from '../../../assets/discount-bg.webp'
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {

          const [isHovered, setIsHovered] = useState(false);
                const [leftPosition, setLeftPosition] = useState('-100%'); // Initial position
                const [isVisible, setIsVisible] = useState(true); // Track visibility
        
                const handleMouseEnter = () => {
                  setIsHovered(true);
                  setIsVisible(true); // Ensure the background is visible
                  setLeftPosition('0%'); // Start entering from left to right
                };
        
                const handleMouseLeave = () => {
                  setLeftPosition('100%'); // Slide out to the right
                  setTimeout(() => {
                    setIsVisible(false); // Hide background before resetting
                    setLeftPosition('-100%'); // Reset to the left
                  }, 500); // Match the transition duration (0.5s)
        
                  setTimeout(() => {
                    setIsVisible(false); // Make the background visible again after reset
                  }, 400); // Add a slight delay to avoid flickering
                };

    return (
        <div className='py-16'>
            <div className='max-w-[1320px] mx-auto px-4 2xl:px-0'>
            <div className="w-full h-[305px]">
                <div className='bg-cover bg-center bg-no-repeat w-full h-full' style={{ backgroundImage: `url(${bg})`, }}>
                    <div className='flex flex-col items-center justify-center h-full gap-3 text-center font-inter'>
                        <p className=' text-base font-[400] text-white'>New Style</p>
                        <h1 className='text text-[46px] font-[700] text-white leading-[1.2]'>Get 65%  <span className='text-rose-500'>Offer </span> <br />
                            & Make New Fusion.</h1>
                            
                             <div className='bg-rose-400 mt-3 rounded-xl duration-200   flex items-center  gap-2  group font-bold text-white sellerBg`'
                                         style={{
                                           position: 'relative',
                                           overflow: 'hidden',
                                           cursor: 'pointer',
                                         }}
                                         onMouseEnter={handleMouseEnter}
                                         onMouseLeave={handleMouseLeave}
                                       >
                                         <div
                                           style={{
                                             position: 'absolute',
                                             top: 0,
                                             left: leftPosition,
                                             width: '100%',
                                             height: '100%',
                                             backgroundColor: 'black',
                                             zIndex: 0,
                                             opacity: isVisible ? 1 : 0, // Hide when resetting
                                             transition: 'left 0.5s ease-in-out, opacity 0.1s ease-in-out',
                                           }}
                                         ></div>
                                         <span className='flex items-center md:px-6 px-3 py-4 gap-3'
                                           style={{
                                             position: 'relative',
                                             zIndex: 10,
                                             color: isHovered ? 'white' : 'white',
                                           }}
                                         >
                                           <h2 className=' relative z-10 text-white group-hover:text-white transition-all duration-700 text-sm   '>Shop Now</h2>
                                           <FaArrowRight className=' relative z-10 text-white group-hover:text-white transition-all duration-1000 group-hover:translate-x-1' />
                                         </span>
                                       </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;        