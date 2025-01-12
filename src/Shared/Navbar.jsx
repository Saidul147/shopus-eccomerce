import React, { useState, useRef, useEffect } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import bd from "../assets/bd.png"
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PiBag } from "react-icons/pi";
import { SlRefresh } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import img from "../assets/7039196.jpg"
import { FaPersonDress } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoBagSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/icons/logo.png"
import icon1 from "../assets/icons/dress_12698380.png"
import icon2 from "../assets/icons/bags_3225000.png"
import icon3 from "../assets/icons/sweater_6247278.png"
import icon4 from "../assets/icons/boots_5896330.png"
import icon6 from "../assets/icons/presents_9324958.png"
import icon5 from "../assets/icons/boots_5896330.png"
import icon7 from "../assets/icons/sneakers_17206283.png"
import icon8 from "../assets/icons/watch_6839373.png"
import icon9 from "../assets/icons/cap_18073592.png"




const Navbar = () => {  


        //=================================
        // seller Button animation code 
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
        // // seller Button animation code end
        //===============================================


        //===========================================
        // main function for hover mouseEnter and hoverMouseLeave

        let [homeHover, setHomeHover] = useState(false)

        const timeoutRef = useRef(null);

        const handleMouseEnterHome = () => {
          // If there's a timeout already running, clear it
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          // Immediately set hover to true
          setHomeHover(true);
        };

        const handleMouseLeaveHome = () => {
          // Set a timeout to delay the hover removal
          timeoutRef.current = setTimeout(() => {
            setHomeHover(false);
          }, 300); // 1 second delay before setting hover to false
        };
        //=============================


        //=================================
        // State to track hover for each item

        const [hoverStates, setHoverStates] = useState({
          home: false,
          shop: false,
          page: false,
        });

        // Timeout refs for each item to manage delay
        const timeoutRefs = {
          home: useRef(null),
          shop: useRef(null),
          page: useRef(null),
        };

        const handleMouseEnterNav = (item) => {
          if (timeoutRefs[item].current) {
            clearTimeout(timeoutRefs[item].current);
          }
          setHoverStates((prev) => ({ ...prev, [item]: true }));
        };

        const handleMouseLeaveNav = (item) => {
          timeoutRefs[item].current = setTimeout(() => {
            setHoverStates((prev) => ({ ...prev, [item]: false }));
          }, 300); // Adjust delay if needed
        };
        //======================================


        let [catagoryOpen, setCatagoryOpen] = useState(false)
        let [sideBar, setSideBar] = useState(false)

        let catagoryRef = useRef(null)
        let sideBarRef = useRef(null)

        let handleCatagoryMouse = (e) => {
          let outSideClick = catagoryRef.current && !catagoryRef.current.contains(e.target)
          let outSideBar = sideBarRef.current && !sideBarRef.current.contains(e.target)
          // console.log(outSideClick)

          if (outSideClick) {
            setCatagoryOpen(false)
          }
          if (outSideBar) {
            setSideBar(false)
          }
        }

        useEffect(() => {
          document.addEventListener("mousedown", handleCatagoryMouse)

          return () => {
            document.removeEventListener("mousedown", handleCatagoryMouse)
          }
        }, [])

        let handleCatagory = (e) => {

          setCatagoryOpen(!catagoryOpen)
        }

        let handleSideBar = (e) => {
          setSideBar(!sideBar)
        }




  return (
    <div className=''>

      {/* navBar start  */}

      <div className='color-schema hidden md:block'>
        <div className='max-w-[1320px]  mx-auto font-poppins relative px-4 2xl:px-0 '>
          <div className='flex  items-center   h-[63px] '>
            <div className='relative flex items-center  cursor-pointer bg-white lg:pb-8 md:pb-6  lg:mt-[19px] md:mt-[12px] pt-[14px]   lg:gap-6 lg:text-[15px] md:text-[12px] text-sm font-poppins justify-between rounded-t-md px-3' ref={catagoryRef} onClick={(e) => handleCatagory(e)} >
              <div className='flex items-center lg:gap-3 gap-2 lg:mr-16 md:mr-10'>
                <RiMenu2Fill />
                <p className='text-[#232532] font-[600] min-w-[12ch]'>All Catagories</p>
              </div>
              <MdKeyboardArrowDown className={`text-lg md:text-lg transition-transform duration-300 ${catagoryOpen ? 'rotate-180' : ''
                }`} />
              <ul
                className={`absolute left-0 w-full flex flex-col  shadow-[10px_4px_20px_rgba(0,0,0,0.2)] top-[48px] bg-white z-10 transition-all duration-300 overflow-hidden  ease-in-out ${catagoryOpen ? "max-h-[1210px] " : "max-h-0 "
                  }`}
              >
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="hover:bg-rose-700 px-3 py-4 hover:text-white border-b transition-all duration-700 "
                  >
                    <a href="#" className="flex items-center justify-between">
                      <div className="flex gap-4">
                        {item.icon}
                        <span className="text-[15px] font-[600]">{item.label}</span>
                      </div>
                      <MdKeyboardArrowRight className="text-lg" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='font-inter'>
              <ul className='lg:text-sm md:text-xs text-sm text-white md:flex hidden lg:gap-5 md:gap-[10px]  xl:ml-10 md:ml-2 lg:ml-5 ml-10 '>
                <li onMouseEnter={() => handleMouseEnterNav('home')}
                  onMouseLeave={() => handleMouseLeaveNav('home')}
                  className='relative group'>
                  <a href="">Home</a>
                  <ul className={`flex flex-col absolute bg-white w-40 p-4 gap-3 shadow-md top-[38px] -left-1 
                    transition-all duration-500 ease-in-out text-[16px] md:text-[12px] lg:text-[16px] text-[#797979] rounded-sm
                    ${hoverStates.home
                      ? 'opacity-100 translate-y-1 visible'
                      : 'opacity-0 translate-y-0 invisible'}`}>
                    <li className='hover:text-rose-700'><a href="">Home 1</a></li>
                    <li className='hover:text-rose-700'><a href="">Home 2</a></li>
                    <li className='hover:text-rose-700'><a href="">Home 3</a></li>
                  </ul>
                </li>
                <li onMouseEnter={() => handleMouseEnterNav('shop')}
                  onMouseLeave={() => handleMouseLeaveNav('shop')}
                  className=' group' ><a href="">Shop +</a>
                  <ul className={`grid grid-cols-4 items-center   absolute bg-white text-[#797979] 2xl:max-w-[1320px] p-4 gap-5 shadow-md top-[58px] left-0 
                    transition-all duration-500 ease-in-out justify-items-center font-inter rounded-sm mx-4 2xl:mx-0 
                    ${hoverStates.shop
                      ? 'opacity-100 translate-y-1 visible'
                      : 'opacity-0 translate-y-0 invisible'}`}>

                    {
                      menuData[1].subMenu.map((item, index) => {
                        return (
                          <div className='' key={index*.5}>
                            <h2 className='font-[700] text-[20px] md:text-[16px] lg:text-[20px] text-black mb-4'>{item.category}</h2>
                            {item.items.map((name) => (
                              <li className='mb-2 text-[16px] md:text-[12px] lg:text-[16px] hover:text-rose-700'><a href="">{name}</a></li>
                            ))}
                          </div>
                        )
                      })
                    }
                    <div className="mt-2 "><img src={img} alt="" /></div>

                  </ul>
                </li>
                <li className='group relative' onMouseEnter={() => handleMouseEnterNav('page')} onMouseLeave={() => handleMouseLeaveNav('page')}  ><a href="">Pages +</a>

                  <ul className={`flex flex-col absolute bg-white text-[#797979] w-[200px] py-6 p-4 gap-3 shadow-md top-[38px] -left-1 rounded-sm
                    transition-all duration-500 ease-in-out  ${hoverStates.page ? "opacity-100 translate-y-1 visible" : "opacity-0 translate-y-0 invisible "}`} >
                    {menuData[2].subMenu.map((item, i) => (
                      <li key={i} className='hover:text-rose-700 text-[16px] md:text-[12px] lg:text-[16px]' key={i} ><a href="">{item.name}</a></li>
                    ))}
                  </ul>

                </li>
                <li className=''><a href="">About</a></li>
                <li className=''><a href="">Blog</a></li>
                <li className=''><a href="">User Dashboard</a></li>
                <li className=''><a href="">Contact</a></li>
              </ul>
            </div>
            {/* <div className={`bg-white duration-200 ml-auto flex items-center px-4 py-2 gap-2  group group-hover:text-white sellerBg`}
            >
              <h2 className='ml-2 relative z-10 group-hover:text-white'>Become a Seller</h2>
              <MdOutlineKeyboardArrowRight className=' relative z-10 text-black group-hover:text-white transition-all duration-1000 group-hover:translate-x-1' />
            </div> */}
            <div className='bg-white duration-200 ml-auto flex items-center lg:px-4 md:px-2 py-2 gap-2  group group-hover:text-white sellerBg`'
              style={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                background: "white",
                color: 'black',
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
              <span className='flex items-center gap-4'
                style={{
                  position: 'relative',
                  zIndex: 10,
                  color: isHovered ? 'white' : 'black',
                }}
              >
                <h2 className='lg:ml-2  relative z-10 text-black group-hover:text-white transition-all duration-700 text-sm md:text-xs lg:text-sm'>Become a Seller</h2>
                <MdOutlineKeyboardArrowRight className=' relative z-10 text-black group-hover:text-white transition-all duration-1000 group-hover:translate-x-1' />
              </span>
            </div>


          </div>
        </div>
      </div>

      {/*====================== for mobile sidebar============================= */}


      <div className='grid md:hidden grid-cols-6 max-w-[1320px] mx-auto px-4 2xl:px-0 my-4 items-center '>
        <div ref={sideBarRef}>
          <button onClick={() => handleSideBar()} className='relative z-50' >
            <RiMenu2Fill />
          </button>


           <div className= {` ${sideBar ? "w-[250px] duration-700 opacity-100 z-50":"w-0 opacity-0 "} transition-all duration-300  ease-in-out   bg-white overflow-auto h-screen fixed top-0 left-0 px-5 custom-scrollbar`}>
            <div className='grid grid-flow-row mt-12 gap-8'>
              <div className='flex gap-6 items-center '>
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
                <div className='flex justify-end w-full' onClick={() => setSideBar(!sideBar)}>
                  <IoClose className="justify-self-end text-white cursor-pointer text-2xl p-[2px]  bg-rose-500 rounded-full " />
                </div>
              </div>

              <div className='relative border-red-200'>
                <input type="text" placeholder='search....' className='border p-2 pl-3 focus:outline-none rounded-md' />
                <span className='absolute right-5 top-1/2 translate-y-[-50%]'>
                  <FaSearch className="text-2xl" />
                </span>
              </div>

              <ul
                className={` left-0 w-full grid grid-flow-row gap-8  bg-white z-10 transition-all duration-300 overflow-hidden  
                  }`}
              >
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="  transition-all duration-700 "
                  >
                    <a href="#" className="flex items-center justify-between">
                      <div className="flex gap-4">
                        {item.icon}
                        <span className="text-[15px] font-[600]">{item.label}</span>
                      </div>
                      <MdKeyboardArrowRight className="text-lg text-rose-700" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
        <div className='col-span-4'>
          <a href="" className='flex items-center justify-center gap-3'>
            <img src={logo} alt="" className='w-[36px] h-[36px]' />
            <h2 className='text-[24px] font-inter font-[600] text-yellow-400'>Shop <span className='text-green-500'>Us</span></h2>
          </a>
        </div>
        <div className='flex justify-end relative'>
          <a href="">
            <PiBag className='text-2xl ' />
            <span className='absolute text-[10px] w-4 h-4 flex items-center justify-center text-xs font-[600] text-white bg-rose-700 rounded-full -right-1 -top-1'>
              0
            </span>
          </a>
        </div>

      </div>

    </div >
  );
};

export default Navbar;











const menuData = [
  {
    name: 'Home',
    subMenu: [
      { name: 'Home 1' },
      { name: 'Home 2' },
      { name: 'Home 3' },
    ],
  },
  {
    name: 'Shop',
    subMenu: [
      {
        category: 'Dresses',
        items: ['Shirt', 'Skirt', 'T-Shirt'],
      },
      {
        category: 'Bags',
        items: ['Handbags', 'Mobile Bags', 'School Bags'],
      },
      {
        category: 'Cosmetics',
        items: ['Lipstick', 'Foundation', 'Eye Liner'],
      },
    ],
  },
  {
    name: 'Pages',
    subMenu: [
      { name: 'Product-details' },
      { name: 'Privacy Policy' },
      { name: 'Terms & Condition' },
      { name: 'FAQ' },
      { name: 'Shop Category Icon' },
      { name: 'Shop List View' },
    ],
  },
];

const menuItems = [
  {
    icon: <img src={icon1} className='w-5 h-5' alt="" />,
    label: "Dresses",
  },
  {
    icon: <img src={icon2} className='w-5 h-5' alt="" />,
    label: "Bags",
  },
  {
    icon: <img src={icon3} className='w-5 h-5' alt="" />,
    label: "Sweaters",
  },
  {
    icon: <img src={icon4} className='w-5 h-5' alt="" />,
    label: "Boots",
  },
  {
    icon: <img src={icon5} className='w-5 h-5' alt="" />,
    label: "Gifts",
  },
  {
    icon: <img src={icon6} className='w-5 h-5' alt="" />,
    label: "Sneakers",
  },
  {
    icon: <img src={icon8} className='w-5 h-5' alt="" />,
    label: "Watches",
  },
  {
    icon: <img src={icon9} className='w-5 h-5' alt="" />,
    label: "Gold Ring",
  },
  {
    icon: <img src={icon9} className='w-5 h-5' alt="" />,
    label: "Cap",
  },
  {
    icon: <img src={icon3} className='w-5 h-5' alt="" />,
    label: "Sunglasses",
  },
  {
    icon: <img src={icon2} className='w-5 h-5' alt="" />,
    label: "Baby Shop",
  },
];
