import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {

  
    const [datas, setDatas] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await fetch("/shop.json");  // Await fetch call
                const result = await res.json();  // Await response parsing
                setDatas(result) // Log the result (parsed JSON)
            } catch (error) {
                console.log("Error fetching data:", error);  // Handle errors
            }
        };

        fetchData();
    }, [])

    // console.log(datas[0]?.image)

    return (
        <div className='max-w-[1320px] mx-auto px-4 2xl:px-0'>
            <div className={`grid grid-cols-1 md:grid-cols-12  mt-10 gap-5  `}>
                {datas.map((data, i) => (
                    <div className={`
                 ${i === 0 ? "md:col-span-7 " : ""}
                 ${i === 1 ? "md:col-span-5" : ""}
                 ${i > 1 ? "md:col-span-4" : ""}
                 
                 `} key={i}>
                        <div className={` ${i <= 1 ? "h-[500px]" : "h-[320px]"} `}>
                            <div {...(i > 1 && {'data-aos': 'zoom-in',    'data-aos-delay': '100', })}   className='font-inter bg-cover bg-center max-w-full h-full xl:pl-20 lg:pl-12  pl-5 flex flex-col  justify-center rounded-md' style={{ backgroundImage: `url(${data.image})` }}  >
                                <div  {...(i > 0 ? {'data-aos': 'zoom-in',  } : {'data-aos': 'fade-up', })}  className=''>
                                    <h2 className=' md:text-[56px] lg:text-[70px] text-[56px] font-gramond text-white font-[600] uppercase leading-none'>{i === 0 && data.subtitle}</h2>
                                    <h4 className='text-white lg:text-[26px] md:text-[20px] font-[600] text-xl  uppercase mt-3'> {data.title} </h4>
                                    <NavLink className='flex items-center md:gap-4 gap-2 text mt-6  '> <span className='text-white md:text-xl lg:text-xl text-lg leading-none'> {data.buttonText}</span> <FaArrowRight className='lg:text-lg md:text-base text-sm duration-500 ease-in-out  hover:translate-x-1 text-white' />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
                {/* <div className='grid grid-cols-5 '>
                <div className='col-span-3 h-[500px]'>
                <div className=' bg-cover bg-center w-full h-full px-20 flex flex-col  justify-center rounded-md' style={{ backgroundImage: `url("https://i.ibb.co/dQqsgZZ/h-1.webp")` }}  >
                    <h2 className='text-[70px] font-gramond text-white font-[600] uppercase w-[10ch] leading-none'>New Arrivals</h2>
                    <h4 className='text-white text-[34px] uppercase mt-3'>Special Collection</h4>
                    <NavLink className='flex items-center gap-4 text mt-6  '> <span className='text-white text-2xl leading-none'> Skip Now </span> <FaArrowRight className='text-lg duration-500 ease-in-out mt-[6px] hover:translate-x-1 text-white' />
                    </NavLink>
                </div>
                </div>
                <div className='col-span-2'>

                </div>
            </div> */}
            </div>
        </div>
    );
};

export default Hero;