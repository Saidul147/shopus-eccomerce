import React, { useEffect, useState } from 'react';
import { IoStar } from "react-icons/io5";
import { TfiFullscreen } from "react-icons/tfi";
import { SlRefresh } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";

const TopSellingsProducts = () => {

    let [datas,setDatas] = useState([])

    useEffect(() => {
        
        let fetchData = async () => {
            try {
                let data =await fetch("./sellingProducts.json")
                let res = await data.json()
                setDatas(res)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()

    },[])

    console.log(datas)

 

    return (
        <div>
            <div>
                <div className='bg-[#fff6f5] '>
                    <div className='max-w-[1320px] mx-auto px-4 2xl:px-0  md:py-16 py-[50px]'>
                        <div>
                            <div className='grid grid-cols-2 w-full  text-[#232532] font-jost font-[700] items-center '>
                                <h2 className='  text-[30px]'>Top Sellings Products</h2>
                                <button className='flex justify-end'>View All</button>
                            </div>

                            <div className='grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-3  2xl:gap-5 xl:gap-4 gap-5 mt-10' >
                                {datas.map((item, i) => (

                                    <div key={i} className=' relative flex flex-col bg-white shadow-all-sides rounded-xl hover:border-red-500 border border-white group ' >
                                        <div className='w-full flex items-center justify-center'>
                                            <img src={item.image} className='my-8 md:my-4 max-h-[]' alt="" />
                                        </div>
                                        <div className='md:px-3 lg:px-2 py-4 px-4 flex flex-col items-center md:items-start w-full '>
                                            <p className='flex gap-1'>{Array.from({ length: item.rating }).map((_, i) => (
                                                <IoStar className='text-[#ffa800] text-[14px]' />
                                            ))}
                                            </p>
                                            <h2 className='font-jost md:text-[16px] text-[#232532] font-[700] mt-2 text-[22px]'>{item.name}</h2>
                                            <div className='flex gap-2 md:text-base text-[#797979]  font-[500] md:text-[20px]'>
                                                <p className='line-through'>{item.price}</p>
                                                <p className='text-rose-500'>{item.discountedPrice}</p>
                                            </div>
                                        </div>

                                        {/* <div className='absolute top-1/2 duration-700  transition-all translate-y-1/3 group-hover:-translate-y-1/2 mx-auto opacity-0 group-hover:opacity-100 w-full ' key={i}>
                                            <div className='flex items-center justify-center gap-2'>
                                                <button className='  bg-white w-10 h-10  rounded-full p-[10px] hover:text-white hover:bg-rose-500 duration-300'><TfiFullscreen className=' w-full h-full' /> </button>
                                                <button className='bg-white w-10 h-10  rounded-full p-[10px]  hover:text-white hover:bg-rose-500 duration-300'><IoIosHeartEmpty className=' w-full h-full' /> </button>
                                                <button className='bg-white w-10 h-10  rounded-full p-[10px]  hover:text-white hover:bg-rose-500 duration-300'><SlRefresh className=' w-full h-full' /> </button>
                                            </div>
                                        </div> */}
                                    </div>
                                ))}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopSellingsProducts;