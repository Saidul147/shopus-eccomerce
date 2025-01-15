import React, { useState, useRef, useEffect } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiBag } from "react-icons/pi";
import { SlRefresh } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import logo from "../assets/icons/logo.png"


import cartimg1 from "../assets/product-img-1.png"
import cartimg2 from "../assets/product-img-2.png"
import cartimg3 from "../assets/product-img-3.png"
import cartimg4 from "../assets/product-img-4.png"
import { NavLink } from 'react-router-dom';

const MiddleNav = () => {

  //  const [hoverStates, setHoverStates] = useState({
  //     home: false,
  //     shop: false,
  //     page: false,
  //     cart: false,
  //   });

  // Timeout refs for each item to manage delay
  //   const timeoutRefs = {
  //     home: useRef(null),
  //     shop: useRef(null),
  //     page: useRef(null),
  //     cart: useRef(null),
  //   };

  let shoesRef = useRef(null)
  let timeoutRefs = useRef(null)
  let [hoverStates, setHoverStates] = useState(false)


  const handleMouseEnterNav = (item) => {
    if (timeoutRefs.current) {
      clearTimeout(timeoutRefs.current);
    }
    setHoverStates((prev) => (!prev));
  };

  const handleMouseLeaveNav = (item) => {
    timeoutRefs.current = setTimeout(() => {
      setHoverStates((prev) => (!prev));
    }, 300); // Adjust delay if needed
  };




  let handleShoesMouse = (e) => {

    let outSideClick = shoesRef.current && !shoesRef.current.contains(e.target)

    if (outSideClick) {
      setShoesOption(false)
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", handleShoesMouse)

    return () => {
      document.removeEventListener("mousedown", handleShoesMouse)
    }
  }, [])

  let [shoesOption, setShoesOption] = useState(false)
  let handleShoes = () => {
    setShoesOption(!shoesOption)
  }

  const handleBackdropClick = (e) => {
    // If the click is outside the dropdown, close it
    if (shoesRef.current && !shoesRef.current.contains(e.target)) {
      setShoesOption(false);
    }
  };



    //to update automatically data from localStorage to browser from different component .then we have to use 
    // window.dispatchEvent(new Event("cartUpdated")); 
    // and after that where i want to see the update of data i have to write this code below

    const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cartItems")) || []);

    // Function to update cart from localStorage
    const updateCartFromLocalStorage = () => {
      const updatedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCart(updatedCart);
    };

    useEffect(() => {
      // Initial load
      updateCartFromLocalStorage();

      // Add an event listener for the "cartUpdated" event
      window.addEventListener("cartUpdated", updateCartFromLocalStorage);

      return () => {
        window.removeEventListener("cartUpdated", updateCartFromLocalStorage);
      };
    }, []);

    useEffect(() =>{
      localStorage.setItem("cartItem",JSON.stringify(cart))
    },[cart])

    let handleClose = (id) => {
      let update = cart.filter((itm) => itm.id !== id)
      setCart(update)
      // console.log(update)
    }



  return (
    <div className=''>
      <div className='md:grid hidden grid-cols-8 px-4 2xl:px-0 py-3 max-w-[1320px]  mx-auto ' >

        <div className=' col-span-2'>
          <NavLink to={"/"} className='flex items-center gap-3'>
            <img src={logo} alt="" className='w-[36px] h-[36px]' />
            <h2 className='text-[36px] md:text-[30px] lg:text-[46px] font-inter font-[600] text-yellow-400'>Shop <span className='text-green-500'>Us</span></h2>
          </NavLink>
        </div>


        {/* ==================input fild ====================== */}

        <div className="flex items-center col-span-4 ">
          {/* First input field */}
          <div className="input-border">
            <input
              type="text"
              placeholder="Search Products...."
              className="md:placeholder:text-sm lg:placeholder:text-[16px]  py-[6px] lg:py-2 border-t border-b border-l px-4 focus:outline-none h-full md:w-full w-full"
            />
          </div>

          {/* Divider between input fields */}
          <div className="relative cursor-pointer" onClick={handleShoes} ref={shoesRef}>
            <span
              className="absolute inset-y-0 left-0 w-[1px] bg-gray-400"
              style={{ height: "40%", top: "50%", transform: "translateY(-50%)" }}
            ></span>

            {/* Second input field */}
            <input
              type="text"
              placeholder="Shoes"
              className="md:placeholder:text-sm lg:placeholder:text-[16px] py-[6px] lg:py-2 border-t border-b px-4 focus:outline-none h-full cursor-pointer md:w-full w-full "
              readOnly
            // ref={shoesRef}
            />

            <span className='absolute right-1 top-1/2 translate-y-[-50%] '>
              <MdKeyboardArrowDown className={`text-lg md:text-lg transition-transform duration-300 ${shoesOption ? 'rotate-180' : ''
                }`} />
            </span>
            <ul className={`flex flex-col absolute bg-white max-w-full p-4 gap-3 shadow-md top-[38px] -left-1 
                    transition-all duration-500 ease-in-out text-[16px] text-[#797979] rounded-sm z-20 cursor-pointer
                    ${shoesOption
                ? 'opacity-100 translate-y-1 visible'
                : 'opacity-0 translate-y-0 invisible'}`}>
              <li className='hover:text-rose-700'><a href="">All Categories</a></li>
              <li className='hover:text-rose-700'><a href="">Dresses</a></li>
              <li className='hover:text-rose-700'><a href="">Mens Accesories</a></li>
              <li className='hover:text-rose-700'><a href="">Womens Accesories</a></li>
              <li className='hover:text-rose-700'><a href="">Shoes</a></li>
            </ul>
          </div>
          <button className="btn border-t border-rose-700  bg-rose-700 px-6 lg:py-[7px] md:py-2  text-white text-[16px] md:text-[12px] lg:text-[16px] font-[700]">
            Search
          </button>
          {shoesOption && (
            <div
              className="fixed inset-0 bg-transparent z-10"
              onClick={handleBackdropClick}
            ></div>
          )}
          {/* Search button */}
        </div>


        {/*====================/icons start ==================*/}

        <div className='col-span-2 relative'>
          <div className='flex   items-center  justify-end xl:gap-8 lg:gap-5 md:gap-4  h-full'>
            <div className='relative'>
              <a href="">
                <SlRefresh className='text-[21px] ' />
                <span className='absolute text-[10px] w-4 h-4 flex items-center justify-center text-xs font-[600] text-white bg-rose-700 rounded-full -right-1 -top-1'>0</span>
              </a>
            </div>
            <div className='relative'>
              <a href="">
                <IoIosHeartEmpty className='text-2xl' />
                <span className='absolute text-[10px] w-4 h-4 flex items-center justify-center text-xs font-[600] text-white bg-rose-700 rounded-full -right-1 -top-1'>
                  0
                </span>
              </a>
            </div>
            <div className='relative' onMouseEnter={() => handleMouseEnterNav('cart')}
              onMouseLeave={() => handleMouseLeaveNav('cart')}>
              <NavLink to={cart.length > 0 ? "/cart" : "/empty-cart"}>
                <PiBag className='text-2xl ' />
                <span className='absolute text-[10px] w-4 h-4 flex items-center justify-center text-xs font-[600] text-white bg-rose-700 rounded-full -right-1 -top-1'>
                  {cart.length}
                </span>
              </NavLink>
              {/* <ul
                className={`absolute grid grid-flow-row gap-3 bg-white p-4 z-50 shadow-md top-[20px] -left-[220px]
                transition-all duration-500 ease-in-out text-[16px] md:text-[12px] lg:text-[16px] text-[#797979] rounded-sm
              ${hoverStates ? 'opacity-100 translate-y-1 visible' : 'opacity-0 translate-y-0 invisible'} w-[300px]`}
              >

                {cart.map((item, i) => (
                  <li className="hover:text-rose-700 grid grid-cols-6 gap-3 items-center w-full" >
                    <img src={item.image} className="col-span-2 w-full h-auto object-cover rounded-md bg-rose-200" alt="Product" />
                    <div className="col-span-3">
                      <h2 className="font-semibold text-sm  ">{item.name}</h2>
                      <p className="text-rose-700 text-sm">{item.price}</p>
                    </div>
                    <IoClose onClick={() => handleClose(item.id)} className="justify-self-end text-gray-500 cursor-pointer hover:text-red-500" />
                  </li>
                ))} */}

                {/* <li className="hover:text-rose-700 grid grid-cols-6 gap-3 items-center w-full">
                  <img src={cartimg1} className="col-span-2 w-full h-auto object-cover rounded-md bg-rose-200" alt="Product" />
                  <div className="col-span-3">
                    <h2 className="font-semibold text-sm  ">Classic Design Skirt</h2>
                    <p className="text-rose-700 text-sm">$20.00</p>
                  </div>
                  <IoClose className="justify-self-end text-gray-500 cursor-pointer hover:text-red-500" />
                </li>
                <li className="hover:text-rose-700 grid grid-cols-6 gap-3 items-center w-full">
                  <img src={cartimg2} className="col-span-2 w-full h-auto object-cover rounded-md bg-rose-200" alt="Product" />
                  <div className="col-span-3">
                    <h2 className="font-semibold text-sm  ">Classic Design Skirt</h2>
                    <p className="text-rose-700 text-sm">$20.00</p>
                  </div>
                  <IoClose className="justify-self-end text-gray-500 cursor-pointer hover:text-red-500" />
                </li>
                <li className="hover:text-rose-700 grid grid-cols-6 gap-3 items-center w-full">
                  <img src={cartimg3} className="col-span-2 w-full h-auto object-cover rounded-md bg-rose-200" alt="Product" />
                  <div className="col-span-3">
                    <h2 className="font-semibold text-sm  ">Classic Design Skirt</h2>
                    <p className="text-rose-700  text-sm">$20.00</p>
                  </div>
                  <IoClose className="justify-self-end text-gray-500 cursor-pointer hover:text-red-500" />
                </li>
                <li className="hover:text-rose-700 grid grid-cols-6 gap-3 items-center w-full">
                  <img src={cartimg4} className="col-span-2 w-full h-auto object-cover rounded-md bg-rose-200" alt="Product" />
                  <div className="col-span-3">
                    <h2 className="font-semibold text-sm  ">Classic Design Skirt</h2>
                    <p className="text-rose-700  text-sm">$20.00</p>
                  </div>
                  <IoClose className="justify-self-end text-gray-500 cursor-pointer hover:text-red-500" />
                </li> */}
              {/* </ul> */}
            </div>
            <div>
              <a href="">
                <CiUser className='text-2xl ' />
              </a>
            </div>
          </div>



        </div>

      </div>
    </div>
  )
}

export default MiddleNav


