import React from 'react';
import cartImg5 from "../../assets/empty-cart.webp"
import { NavLink } from 'react-router-dom';


const EmptyCart = () => {
    return (
        <div className='max-w-[1320px] mx-auto py-10 pb-[120px] px-4 2xl:px-0'>
            <div className=''>
                        <p className='text-center w-full mb-[30px] md:mb-0 md:text-start'>Home{location.pathname}</p>
                    </div>
            <div className='text-center mt-10'>
                <img src={cartImg5} className='   mx-auto' alt="" />
                <h1 className='my-5 text-[20px] font-inter font-semibold'>Empty! You don't Cart any Products</h1>
                <NavLink to={"/"} className="inline-block text-base font-bold bg-rose-500 text-white py-3 px-[34px] rounded-full" >Back To Shop</NavLink>
            </div>
        </div>
    );
};

export default EmptyCart;