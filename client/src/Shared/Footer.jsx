import React from 'react';
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineRefresh } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { BsTrophy } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { IoCallOutline } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import bg from "../assets/footer-bg.webp"

const Footer = () => {
    return (
        <div className='bg-cover bg-center bg-no-repeat pb-16 ' style={{ backgroundImage: `url(${bg})` }}>
            <div className='max-w-[1320px] mx-auto px-4 2xl:px-0 '>

        {/*============== footer top  ==============*/}

                <div className='relative h-full xl:-top-[50px] md:-top-20 lg:-top-[60px] -top-[70px]  grid md:grid-cols-2 lg:grid-cols-4 items-center md:place-items-center w-full gap-4 bg-rose-700 text-white md:py-7 p-7 rounded-md'>
                    <div className='flex  gap-4'>
                        <div className='w-[44px] h-[44px]'><LiaShippingFastSolid className='w-full h-full ' /></div>
                        <div className='flex flex-col'>
                            <h2 className='text-base font-jost font-[700]'>Free Shipping</h2>
                            <p className='text-sm font-inter'>When ordering over $100</p>
                        </div>
                    </div>
                    <div className='flex  gap-4'>
                        <div className='w-[44px] h-[44px]'><RiSecurePaymentFill className='w-full h-full ' /></div>
                        <div className='flex flex-col'>
                            <h2 className='text-base font-jost font-[700]'>Secure Payment</h2>
                            <p className='text-sm font-inter'>100% Secure Online Payment</p>
                        </div>
                    </div>
                    <div className='flex  gap-4'>
                        <div className='w-[44px] h-[44px]'><MdOutlineRefresh className='w-full h-full ' /></div>
                        <div className='flex flex-col'>
                            <h2 className='text-base font-jost font-[700]'>Free Return</h2>
                            <p className='text-sm font-inter'>Get Return within 30 days</p>
                        </div>
                    </div>
                    <div className='flex  gap-4'>
                        <div className='w-[44px] h-[44px]'><BsTrophy className='w-full h-full ' /></div>
                        <div className='flex flex-col'>
                            <h2 className='text-base font-jost font-[700]'>Best Quality</h2>
                            <p className='text-sm font-inter'>Original Product Guarenteed</p>
                        </div>
                    </div>
                </div>

        {/*========= footer bottom ============= */}

                <div className='grid gap-10 lg:grid-cols-4 md:grid-cols-2  pb-10 border-b border-b-[#f3b4ea3a]'>
                    <div className='flex flex-col gap-10 justify-between font-inter text-[15px] text-[#c8c8c8]'>
                        <div className='flex gap-2'>
                            <div className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text">
                                <FaShippingFast className="text-[28px]" />
                            </div>
                            <h2 className='text-[28px] font-bold text-white leading-none'> ShopUs</h2>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <p className=''><a href="">Track Order</a></p>
                            <p><a href="">Delivery & Returns</a></p>
                            <p><a href="">Warranty</a></p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 font-inter text-[15px] text-[#c8c8c8]'>
                        <h2 className='text-2xl font-bold text-white font-jost text-[20px]'>About Use</h2>
                        <p className=''><a href="">Rave's Story</a></p>
                        <p><a href="">Work With Us</a></p>
                        <p><a href="">Corporate News</a></p>
                        <p><a href="">Investors</a></p>
                    </div>
                    <div className='flex flex-col gap-5 font-inter text-[15px] text-[#c8c8c8]'>
                        <h2 className='text-2xl font-bold text-white font-jost text-[20px]'>Useful Links</h2>
                        <p className=''><a href="">Secure Payment</a></p>
                        <p><a href="">Privacy Policy</a></p>
                        <p><a href="">Terms Of Use</a></p>
                        <p><a href="">Archived Products</a></p>
                    </div>
                    <div className='flex flex-col gap-6 justify-between font-inter text-[15px] text-[#c8c8c8]'>
                        <h2 className='text-2xl font-bold text-white font-jost text-[20px]'>Contact Info</h2>
                        <div className='flex gap-4 items-start'>
                            <div className=" "><SiGooglemaps className='w-[44px] h-[44px] p-3  rounded-full border-[#c8c8c8] border' />
                            </div>
                            <div><h2 className='text-2xl font-bold text-white font-jost text-[20px] leading-none mb-3'>AddressS:</h2>
                                <span>4517 Washington Ave,Manchester,Lentucky 39495</span>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className=" "><IoCallOutline className='w-[44px] h-[44px] p-3 rounded-full border-[#c8c8c8] border' /></div>
                            <div ><h2 className='text-2xl font-bold text-white font-jost text-[20px] leading-none mb-3'>Phone:</h2>
                                <span>+880171889547</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;