import React, { useState } from 'react';
import FlashSale from '../Flash-Sale/FlashSale';
import bg1 from "../../../assets/style-bg-three.webp"
import bg2 from "../../../assets/style-bg-four.webp"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const BestSellsWeek = ({ datas }) => {



    return (
        <div className='bg-[#fff6f5]'>
            <FlashSale datas={datas} title={"Best Sale In This Week"}></FlashSale>
            <div className='max-w-[1320px] mx-auto px-4 2xl:px-0 pb-16'>
                <div className="flex flex-col md:flex-row  gap-8">
                    <div className='h-[460px] flex justify-end bg-cover bg-center z-50 relative w-full rounded-xl' style={{ backgroundImage: `url(${bg1})` }}>
                        <div className='flex flex-col p-[32px]'>
                            <p className='uppercase text-sm font-jost mb-[10px]'>New Style</p>
                            <h2 className='text-[34px] font-jost font-[700] max-w-[11ch] leading-[1.2]'>Get 65% Offer & Make New  Fusion</h2>
                            <HoverButton></HoverButton>
                        </div>
                    </div>
                    <div className='h-[460px] bg-cover bg-center bg-no-repeat z-50 relative w-full rounded-xl' style={{ backgroundImage: `url(${bg2})` }}>
                        <div className='flex flex-col p-[32px]'>
                            <p className='uppercase text-sm font-jost mb-[10px]'>Mega Offer</p>
                            <h2 className='text-[34px] font-jost font-[700] max-w-[12ch] leading-[1.2] '>Make Your New Styles With our products</h2>
                            <HoverButton></HoverButton>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BestSellsWeek;

const HoverButton = () => {

    const [isHovered, setIsHovered] = useState(false);
    const [leftPosition, setLeftPosition] = useState('-100%'); // Initial position
    const [isVisible, setIsVisible] = useState(true); // Track visibility

    const handleMouseEnter = (e) => {
        setIsHovered(true)
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
        <div key={1} className='max-w-max bg-white mt-10 rounded-[30px] duration-200   flex items-center  gap-2  group font-bold text-white sellerBg`'
            style={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
            }}
            onMouseEnter={() => handleMouseEnter(true)}
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
            <span className='flex items-center py-[10px] px-[20px] gap-3'
                style={{
                    position: 'relative',
                    zIndex: 10,
                    color: isHovered ? 'white' : 'white',
                }}
            >
                <h2 className=' relative z-10 text-black group-hover:text-white transition-all duration-700 text-sm   '>Shop Now</h2>
                <MdOutlineKeyboardArrowRight className=' relative z-10 text-black group-hover:text-white transition-all duration-1000 group-hover:translate-x-1' />
            </span>
        </div>
    );
};

