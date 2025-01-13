import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import cartimg1 from "../../assets/product-img-1.png"
import cartimg2 from "../../assets/product-img-2.png"
import cartimg3 from "../../assets/product-img-3.png"
import cartimg4 from "../../assets/product-img-4.png"


const cartItems = [
    {
        id:1,
      productName: "Classic Oxford Shirt",
      price: 10.00,
      quantity: 1,
      total: 10.00,
      img:cartimg1
    },
    {
        id:2,
      productName: "Black Shirt",
      price: 5.00,
      quantity: 1,
      total: 5.00,
      img:cartimg2
    },
    {
        id:3,
      productName: "Blue Party Shirt",
      price: 30.00,
      quantity: 1,
      total: 30.00,
      img:cartimg3
    },
    {
        id:4,
      productName: "Red Party Dress",
      price: 20.00,
      quantity: 1,
      total: 20.00,
      img:cartimg4
    }
  ];
  

const Cart = () => {


  // for getting path name dynamically
    const location = useLocation()
    // console.log(location.pathname)



    //  quantity - and + function is here   ============

    // let [quantity,setQuantity] = useState(cartItems)
    // let navigate = useNavigate()

    // let handleQuantity = (e, index, value) => {

    //   let updateQuantity = quantity.map((item, i) => {
    //         if (i === index) {
    //           const newQuantity = value === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1);
    //           return {
    //             ...item,
    //             quantity: newQuantity,
    //             total: item.price * newQuantity, 
    //           };
    //         }
    //         return item;
    //       })
          
    //       setQuantity(updateQuantity)
    //   };

    //   let handleClose = (id) => {
    //     let filterd = quantity.filter((item) => item.id !== id)
    //       setQuantity(filterd)

    //       // if every cart is close then it automatically goes to empty-cart page
    //       if(filterd.length === 0){
    //         navigate("/empty-cart");
    //       }
    //   }

    //   //  clear button to clear all item of cart at once
    //   let handleClear = (e) => {
    //     setQuantity([])
    //   }

    //     const [items,setItems] = useState(quantity)
    //   console.log(items)


    //   // to scroll top with smoothly============

      let handleScroll = (e) => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
      }

    
   

    const [quantity, setQuantity] = useState(() => {
      const savedItems = localStorage.getItem("cartItems");
      return savedItems ? JSON.parse(savedItems) : cartItems;
    });
  
    const navigate = useNavigate();
  
    const handleQuantity = (e, index, value) => {
      const updatedQuantity = quantity.map((item, i) => {
        if (i === index) {
          const newQuantity = value === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1);
          return {
            ...item,
            quantity: newQuantity,
            total: item.price * newQuantity, // Updating total price
          };
        }
        return item;
      });
  
      setQuantity(updatedQuantity);
    };
  
    const handleClose = (id) => {
      const filteredItems = quantity.filter((item) => item.id !== id);
      setQuantity(filteredItems);
  
      if (filteredItems.length === 0) {
        navigate("/empty-cart");
      }
    };
  
    const handleClear = () => {
      setQuantity([]);
      localStorage.removeItem("cartItems");
      navigate("/empty-cart");
    };
  
    // Save updated quantity to localStorage whenever quantity changes
    useEffect(() => {
      localStorage.setItem("cartItems", JSON.stringify(quantity));
    }, [quantity]);
  
    // Function to update localStorage only when proceeding to checkout
    const updateStorage = () => {
      localStorage.setItem("cartItems", JSON.stringify(quantity));
    };
      console.log(quantity)

    return (
        <div className='bg-white'>
            <div className='bg-[#fffafe] '>
                <div className='max-w-[1320px] mx-auto  px-4 2xl:px-0 '>
                    <div className='lg:py-16 md:py-12 py-6'>
                        <p className='text-center w-full mb-[30px] md:mb-0 md:text-start'>Home{location.pathname}</p>
                        <h1 className='w-full text-center text-3xl font-jost font-[700]'>Cart</h1>
                    </div>
                </div>
            </div>
            <div className='max-w-[1320px] mx-auto  px-4 2xl:px-0 pb-[150px]  mt-[60px]  '>
                <div className="grid grid-cols-6 px-4 bg-rose-100 py-5 md:pl-10 pl-2 font-jost font-[500] border border-[#e9e7e7] md:text-[16px] text-[12px]">
                    <div className='col-span-2 '>
                        <h2 className='uppercase'>Products</h2>
                    </div>
                    <div className='col-span-1 '>
                        <h2 className='uppercase text-center'>Price</h2>
                    </div>
                    <div className='col-span-1'>
                        <h2 className='uppercase text-center'>Quantity</h2>
                    </div>
                    <div className='col-span-1'>
                        <h2 className='uppercase text-center'>Total</h2>
                    </div>
                    <div className='col-span-1'>
                        <h2 className='uppercase text-center'>Action</h2>
                    </div>
                </div>
              <div>
              <ul
                    className={`grid grid-flow-row  bg-white font-jost `}
                >

                    {  quantity.map((items,index) => (
                            <li key={items.id} className={`grid grid-cols-6 md:p-4 py-2 md:pl-10 pl-2 gap-3 items-center w-full border ${items.id === quantity.length ? "border":"border-b-0"}`}>
                            <div className='col-span-2 flex items-center md:gap-4 gap-2'>
                                    <img src={items.image} className="md:w-[80px] md:h-[80px] w-[70px] object-cover border-[#f9edf7] border rounded-md " alt="Product" />
                                <h2 className="md:font-semibold font-medium md:text-base text-[12px]   ">{items.name}</h2>
                            </div>
                            <div className="col-span-1 md:font-semibold font-medium md:text-base text-[12px]  text-center">
                                <p className="text-black  ">{items.price}</p>
                            </div>
                            <div className="col-span-1 text-base font-[600] text-center xl:px-8 lg:px-4 ">
                                <div className='border flex justify-center md:gap-3 gap-1 py-1 rounded-md'>                           
                                    <button className='text-[12px] md:text-base'  onClick={(e) => handleQuantity(e,index,"decrease")}> <FiMinus /> </button>
                                    <span className='md:text-base text-[12px]'> {items.quantity} </span>
                                    <button className='md:text-base text-[12px]' onClick={(e) => handleQuantity(e,index,"increase")} > <IoMdAdd /> </button>
                                </div>
                            </div>
                            <div className="col-span-1 text-base font-[600] text-center">
                                <p className="text-black md:text-base text-[12px] ">${items.price * items.quantity}</p>
                            </div>
                            <div className="col-span-1 text-base font-[600] text-center">
                            <IoClose onClick={(e)=>handleClose(items.id)} className="w-full text-gray-500 cursor-pointer hover:text-red-500" />
                            </div>
                        </li>
                    ))}
                </ul>
              </div>

              <div className={` ${quantity.length < 1 && "hidden"} flex md:flex-row flex-col  gap-4 items-center mt-10`}>
                <NavLink to={"/empty-cart"} onClick={(e) => handleClear(e)} className="text-red-500 text-base font-bold ">Clear Cart</NavLink>
                <NavLink to={"/cart"} className=" w-full md:w-auto text-center text-base font-bold bg-zinc-100 py-3 px-[34px] rounded-full " onClick={handleScroll}>Update Cart</NavLink>
                <NavLink to={"/checkout"} onClick={updateStorage} className="w-full md:w-auto  text-center text-base font-bold bg-rose-500 text-white py-3 px-[34px] rounded-full" >Proceed to Checkout</NavLink>    
              </div>

            </div>
        </div>
    );
};

export default Cart;