import React from 'react';
import logo1 from "../../../assets/10844877.png"
import logo2 from "../../../assets/save-icon-front-side-white-background.png"
import logo3 from "../../../assets/save-icon-front-side-white-background.png"
import logo4 from "../../../assets/top-view-blue-pink-arrows.png"
import logo5 from "../../../assets/10844877.png"
import logo6 from "../../../assets/download.png"


let items = [
    {
        logo:logo1,
        name:'Jansjina'
    },
    {
        logo:logo2,
        name:'Graoishta'
    },
    {
        logo:logo4,
        name:'Toaksiua'
    },
    {
        logo:logo5,
        name:'Rouaop'
    },
    {
        logo:logo6,
        name:'Goloasx'
    },
    {
        logo:logo3,
        name:'Lkasafiak'
    },
]

const BestSellers = () => {
    return (
        <div className='pb-16'>
            <div className='max-w-[1320px] mx-auto  bg-white  py-8 px-4 rounded-xl'>
            <div className='grid grid-cols-2 w-full  text-[#232532] font-jost font-[700] items-center'>
                            <h2 className='  text-[30px]'>Best Sellers</h2>
                            <button className='flex justify-end'>View All</button>
                        </div>
                <div className='grid md:grid-cols-4 lg:grid-cols-6 gap-y-6 grid-cols-2 gap-10'>
                    {items.map((item,i) => (
                            <div className='flex flex-col items-center justify-between'>
                                <img src={item.logo} alt="" className='hover:scale-110 duration-300' />
                                <p className='text-[20px] font-[500]'>{item.name}</p>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestSellers;