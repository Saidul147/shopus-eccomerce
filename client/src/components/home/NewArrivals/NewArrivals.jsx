import React, { useEffect, useState } from 'react';
import { IoStar } from "react-icons/io5";
import { TfiFullscreen } from "react-icons/tfi";
import { SlRefresh } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";

import { getLocalStorage,setLocalStorage } from '../../LocalStorage';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NewArrivals = ({datas}) => {

    // const handleButton = (item) => {
    //     // Get existing cart from localStorage or initialize an empty array
    //     let cart = JSON.parse(localStorage.getItem("cartItems")) || [];
      
    //     // Check if the item already exists in the cart
    //     let existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
       
      
    //     if (existingItemIndex >= 0) {
    //       // If the item exists, update its quantity
    //       cart[existingItemIndex].quantity += 1;
    //       cart[existingItemIndex].total = cart[existingItemIndex].price * cart[existingItemIndex].quantity; // Update total
    //     } else {
    //       // If the item does not exist, add it with initial quantity of 1
    //       cart.push({ ...item, quantity: 1, total: item.price });
    //     }
      
    //     // Save updated cart to localStorage
    //     localStorage.setItem("cartItems", JSON.stringify(cart));
      
    //     console.log("Item added to cart:", cart);
    //   };

    let handleButton = (items) => {

        toast.success("Your order has been Added to the Cart.");
        // let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

        let cart = getLocalStorage()

        let existingItem = cart.findIndex((itm) => itm.id === items.id)

        console.log(existingItem)

        if(existingItem === -1){
            cart.push({...items})
        }
        setLocalStorage(cart)

        window.dispatchEvent(new Event("cartUpdated"));
    }



    return (
        <div className='bg-white'>
            <div className='max-w-[1320px] mx-auto px-4 2xl:px-0  md:py-16 py-[50px]'>
                <div>
                    <div className='flex  w-full justify-between text-[#232532] font-jost font-[700]'>
                        <h2 className='text-[30px]'>NEW ARRIVALS</h2>
                        <button className=''><div className='hoverd-line'>View All</div></button>
                    </div>

                    <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-4' >
                        {datas.map((item, i) => (

                            <div data-aos="fade-up" className=' relative flex flex-col  shadow-all-sides rounded-xl hover:border-red-500 border border-white group ' >
                                <div className='w-full flex items-center justify-center'>
                                    <img src={item.image} className='my-8 md:my-4 max-h-[]' alt="" />
                                </div>
                                <div className='md:px-3 lg:px-4 px-4 flex flex-col items-center md:items-start w-full '>
                                    <p className='flex gap-1'>{Array.from({ length: item.rating }).map((_, i) => (
                                        <IoStar className='text-[#ffa800] text-[14px]' />
                                    ))}
                                    </p>
                                    <h2 className='font-jost text-[18px] text-[#232532] font-[700] mt-2 '>{item.name}</h2>
                                    <div className='flex gap-2 text-base text-[#797979] mb-2 font-[500]'>
                                        <p className='line-through'>{item.price}</p>
                                        <p className='text-rose-500'>{item.discountedPrice}</p>
                                    </div>
                                </div>
                                <button className='  flex justify-end h-full items-end' onClick={() => handleButton(item)}>
                                    <span  className=' font-bold text-rose-700 bg-rose-300 hover:bg-rose-700 hover:text-white py-3 pr-4 pl-6 rounded-tl-[40px] rounded-br-xl duration-300'>Add To Cart</span>
                                </button>

                                <div className='absolute top-1/2 duration-700  transition-all translate-y-1/3 group-hover:-translate-y-1/2 mx-auto opacity-0 group-hover:opacity-100 w-full ' key={i}>
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
    );
};

export default NewArrivals;