import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";


const Checkout = () => {

    const [selectedOption, setSelectedOption] = useState("");

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`You selected: ${selectedOption}`);
    };

   
    let cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    console.log(cart)

    let [total,setTotal] = useState()

    


    return (
        <div>
            <div className='bg-white'>
                <div className='bg-[#fffafe] '>
                    <div className='max-w-[1320px] mx-auto  px-4 2xl:px-0 '>
                        <div className='lg:py-16 md:py-12 py-6 '>
                            <p className='text-center w-full mb-[30px] md:mb-0 md:text-start'>Home{location.pathname}</p>
                            <h1 className='w-full text-center text-3xl font-jost font-[700]'>Checkout</h1>
                        </div>
                    </div>
                </div>
                <div className='max-w-[1320px] mx-auto  px-4 2xl:px-0 pb-[120px] font-jost'>
                    <div className='grid lg:grid-cols-2 gap-5'>
                        <div className='text-[#797979]'>
                            <h1 className='text-center bg-rose-700 text-white  py-3 rounded-md'>Log Into Your Acount</h1>

                            <div className='border border-rose-50 mt-10 p-6 md:p-3 lg:p-6'>
                                <form action="">
                                    <h1 className='text-3xl font-bold font-jost text-[#232532] mb-10'>Billing Details</h1>
                                    <div className='grid grid-flow-row gap-5'>
                                        <div className='flex flex-col md:flex-row gap-4 '>
                                            <div className='w-full'>
                                                <label htmlFor="" className=''>First Name*</label>
                                                <input className='mt-2 focus:outline-none border py-[10px] px-5 w-full' type="text" placeholder='First Name' />
                                            </div>
                                            <div className='w-full'>
                                                <label htmlFor="">Last Name*</label>
                                                <input className='mt-2 focus:outline-none border py-[10px] px-5 w-full' type="text" placeholder='Last Name' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col md:flex-row gap-4 '>
                                            <div className='w-full'>
                                                <label htmlFor="">Email*</label>
                                                <input className='mt-2 focus:outline-none border py-[10px] px-5 w-full' type="email" placeholder='user@gmail.com' />
                                            </div>
                                            <div className='w-full'>
                                                <label htmlFor="">Phone*</label>
                                                <input className='mt-2 focus:outline-none border py-[10px] px-5 w-full' type="text" placeholder='+8802323434' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <label htmlFor="country">Country*</label>
                                            <div className='w-full relative'>
                                                <select className='appearance-none focus:outline-none border py-[10px] px-5 w-full' name="country" id="country" required>
                                                    <option value="" disabled selected>
                                                        Choose...
                                                    </option>
                                                    <option value="Bangladesh">Bangladesh</option>
                                                    <option value="United Kingdom">United Kingdom</option>
                                                    <option value="United States">United States</option>
                                                </select>
                                                <div className='absolute text-3xl -translate-y-[50%] top-[50%] right-[8px]'>
                                                    <RiArrowDropDownLine />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <label htmlFor="">Address*</label>
                                            <input className='mt-2 focus:outline-none border py-[10px] px-5 w-full' type="email" placeholder='Enter Your Address' />
                                        </div>

                                        <div className='flex gap-4 '>
                                            <div className='flex flex-col gap-2 w-full'>
                                                <label htmlFor="country">Town/City*</label>
                                                <div className='w-full relative'>
                                                    <select className='appearance-none focus:outline-none border py-[10px] px-5 w-full' name="country" id="country" required>
                                                        <option value="" disabled selected>
                                                            Choose...
                                                        </option>
                                                        <option value="Dhaka">Dhaka</option>
                                                        <option value="London">London</option>
                                                        <option value="New York">New York</option>
                                                    </select>
                                                    <div className='absolute text-3xl -translate-y-[50%] top-[50%] right-[8px]'>
                                                        <RiArrowDropDownLine />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='w-full'>
                                                <label htmlFor="">Postcode / ZIP*</label>
                                                <input className='mt-2 focus:outline-none border py-[10px] px-5 w-full' type="number" placeholder='0' />
                                            </div>

                                        </div>

                                        <div className='flex gap-[10px]'>
                                            <input
                                                type="checkbox"
                                                id=""
                                                name="shipping"
                                                value=""
                                                className=''
                                                style={{ accentColor: "#AE1C9A" }}
                                            />
                                            <label htmlFor="" className='text-[15px] font-jost' >Create an account</label>
                                        </div>

                                        <div>
                                            <h1 className='text-3xl font-bold font-jost text-[#232532]'>Shipping Address</h1>
                                        </div>
                                        <div className='flex gap-[10px]'>
                                            <input
                                                type="checkbox"
                                                id=""
                                                name="shipping"
                                                value=""
                                                className=''
                                                style={{ accentColor: "#AE1C9A" }}
                                            />
                                            <label htmlFor="" className='text-[15px] font-jost' >Create an account</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className='font-jost'>
                            <div>
                                <h1 className='text-center bg-rose-700 text-white  py-3 rounded-md'>Enter Coupon Code</h1>

                                <div className='border border-rose-50 mt-10 p-6 md:p-3 lg:p-6'>
                                    <div className='grid grid-flow-row gap-4'>
                                        <h1 className='text-3xl font-bold font-jost text-[#232532] mb-5'>Order Sumary</h1>
                                        <div className='uppercase flex justify-between text-[15px] pb-4 border-b border-rose-100 "                                                        '>
                                            <h2>Product</h2>
                                            <h2 className=''>Total</h2>
                                        </div>

                                        {cart.map((item,i) => (
                                            <div>
                                                <div className='flex justify-between  items-center   '>
                                            <div className='flex items-center gap-3'>
                                                <img src={item.img} className='w-[70px] border' alt="" />
                                                <div>
                                                <h1 className='font-jost text-[15px] text-[#232532]'>{item.productName} x {item.quantity} </h1>
                                                <p className='text-[13px] font-inter text-[#797979]'>price {item.price} * {item.quantity}</p>
                                                </div>
                                            </div>
                                            <div > ${item.total} </div>
                                        </div>
                                            </div>
                                        ))}

                                        {/* <div className='flex justify-between py-4 items-center border-b border-t  border-rose-100'>
                                            <div className='flex flex-col'>
                                                <h1 className='font-jost text-[15px] text-[#232532]'>Apple Watch X1 </h1>
                                                <p className='text-[13px] font-inter text-[#797979]'>64GB,Black,44mm,Chain Belt</p>
                                            </div>
                                            <div> $38 </div>
                                        </div> */}
                                        <div className='flex justify-between pt-4 border-t border-rose-100'>
                                            <h3>SUBTOTAL</h3>
                                            <span>$365</span>
                                        </div>
                                        <div className='flex flex-col gap-1 border-b pb-4 border-rose-100'>
                                            <p className='uppercase text-[#797979]'>Shipping</p>
                                            <div className='flex justify-between'>
                                                <p className='text-[#232532]'>Free Shipping</p>
                                                <span className=''>+$0</span>
                                            </div>
                                        </div>
                                        <div className='flex justify-between text-[25px] font-[500]'>
                                            <h1>TOTAL</h1>
                                            <span className='text-rose-500'>$365</span>
                                        </div>
                                    </div>
                                    <div className=" mt-5">
                                        <form onSubmit={handleSubmit} className="">
                                            <div className="flex items-center space-x-5 px-4 py-2 hover:bg-rose-200 transition-all duration-300 rounded-md">
                                                <input
                                                    type="radio"
                                                    id="BankTransfer"
                                                    name="paymentMethod"
                                                    value="Bank Transfer"
                                                    checked={selectedOption === "Bank Transfer"}
                                                    onChange={handleChange}
                                                    style={{ accentColor: "#AE1C9A"}}
                                                />
                                                <div>
                                                <label htmlFor="creditCard" className="text-[20px] font-medium text-gray-700">
                                                    Direct Bank Transfer
                                                </label>
                                                <p className='text-[#797979] text-[15px] font-inter max-w-[50ch] '>Make your payment directly into our bank account. Please use
                                                your Order ID as the payment reference.</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center space-x-5 px-4 py-4 hover:bg-rose-200 transition-all duration-300 rounded-md">
                                                <input
                                                    type="radio"
                                                    id="CashOn"
                                                    name="paymentMethod"
                                                    value="Cash On"
                                                    checked={selectedOption === "Cash On"}
                                                    onChange={handleChange}
                                                    
                                                    style={{ accentColor: "#AE1C9A"}}
                                                />
                                                <label htmlFor="paypal" className="text-[20px] font-medium text-gray-700">
                                                    Cash On Delivery
                                                </label>
                                            </div>

                                            <div className="flex items-center space-x-5 px-4 py-4 hover:bg-rose-200 transition-all duration-300 rounded-md">
                                                <input
                                                    type="radio"
                                                    id="creditCard"
                                                    name="paymentMethod"
                                                    value="Credit Card"
                                                    checked={selectedOption === "Credit Card"}
                                                    onChange={handleChange}
                                                    
                                                    style={{ accentColor: "#AE1C9A"}}
                                                />
                                                <label htmlFor="bankTransfer" className="text-[20px] font-medium text-gray-700">
                                                Credit/Debit Cards or Paypal
                                                </label>
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full bg-rose-600 text-white py-2 px-4 mt-4 rounded-lg text-center font-semibold hover:bg-rose-700"
                                            >
                                                Place Order Now
                                            </button>
                                        </form>

                                        {selectedOption && (
                                            <p className="mt-4 text-sm text-gray-700">
                                                You selected: <span className="font-medium">{selectedOption}</span>
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;