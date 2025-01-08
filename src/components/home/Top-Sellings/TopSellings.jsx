import React from 'react';
import { IoStar } from "react-icons/io5";
import { TfiFullscreen } from "react-icons/tfi";
import { SlRefresh } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";

const TopSellings = ({ datas }) => {

    // ===makes the data random ==========
    const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
      };
      
      const randomData = shuffleArray(datas.slice(2, 8));

    return (
        <div>
            <div className='bg-[#f8f8f8] hidden md:block'>
                <div className='max-w-[1320px] mx-auto px-4 2xl:px-0  md:py-16 py-[50px]'>
                    <div>
                        <div className='grid grid-cols-2 w-full  text-[#232532] font-jost font-[700] items-center '>
                            <h2 className='  text-[30px]'>Top Sellings Products</h2>
                            <button className='flex justify-end'>View All</button>
                        </div>

                        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10' >
                            {randomData.map((item, i) => (

                                <div className=' relative grid grid-cols-2 gap-2 items-center p-4 shadow-all-sides rounded-xl hover:border-red-500 border border-white group bg-white' >
                                    <div className='w-full flex items-center justify-center'>
                                        <img src={item.image} className=' bg-rose-100' alt="" />
                                    </div>
                                    <div className='md:px-3 lg:px-4 px-4 flex flex-col items-center md:items-start w-full '>
                                        <p className='flex gap-1'>{Array.from({ length: item.rating }).map((_, i) => (
                                            <IoStar className='text-[#ffa800] text-[14px]' />
                                        ))}
                                        </p>
                                        <h2 className='font-jost text-[18px] lg:text-base xl:text-[18px] text-[#232532] font-[700] mt-2 '>{item.name}</h2>
                                        <div className='flex gap-2 text-base text-[#797979] mb-2 font-[500]'>
                                            <p className='line-through'>{item.price}</p>
                                            <p className='text-rose-500'>{item.discountedPrice}</p>
                                        </div>
                                    </div>
                                    <button className=' absolute bottom-0 right-0 flex justify-end'>
                                                <span className='text-sm xl:text-[16px] font-bold text-rose-700 bg-rose-300 hover:bg-rose-700 hover:text-white py-3 xl:py-3 xl:px-6 lg:py-1 lg:px-4 pr-4 pl-6 rounded-tl-[40px] rounded-br-xl duration-300'>Add To Cart</span>
                                            </button>
                                    <div className='absolute top-1/2 duration-700   transition-all -translate-x-1/4 translate-y-1/3 group-hover:-translate-y-1/2 group-hover:-translate- mx-auto opacity-0 group-hover:opacity-100 w-full ' key={i}>
                                        <div className='flex items-center justify-center gap-2'>
                                            <button className='  bg-white w-10 h-10  rounded-full p-[10px] hover:text-white hover:bg-rose-500 duration-300'><TfiFullscreen className=' w-full h-full' /> </button>
                                            <button className='bg-white w-10 h-10  rounded-full p-[10px]  hover:text-white hover:bg-rose-500 duration-300'><IoIosHeartEmpty className=' w-full h-full' /> </button>
                                            <button className='bg-white w-10 h-10  rounded-full p-[10px]  hover:text-white hover:bg-rose-500 duration-300'><SlRefresh className=' w-full h-full' /> </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSellings;