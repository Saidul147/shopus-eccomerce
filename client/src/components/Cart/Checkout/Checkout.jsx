import React, { useEffect, useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Payment from './Payment';



const Checkout = () => {

    const [selectedOption, setSelectedOption] = useState("");
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        address: '',
        city: '',
        zipCode: '',
    });

    const handleChange = (e) => {

        if (e.target.value === "Bank Transfer" || e.target.value === "Credit Card" || e.target.value === "Cash On") {
            setSelectedOption(e.target.value)
        }

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     alert(`You selected: ${selectedOption}`);
    // };

    let [carts, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem("cartItems") || []);
    })


    // console.log(cart)

    let [totals, setTotals] = useState()


    useEffect(() => {
        let total = 0;
        let cartTotal = carts.map((item) => {
            total += item.total
        })
        setTotals(total.toFixed(2))
    }, [])

    const handleSubmit = async (e) => {

        e.preventDefault();

        alert(`You selected: ${selectedOption}`);

        const stripe = await loadStripe("pk_test_51Qh2QOG3aDMDTkQPu4qT5lnRsNxsYe0D16vTVUQ9T1nrIRwMe4zzvxVSqjWXZPnNoIRdMQhuT8SbJSqNP9PkyJ2G00228UJeHh");
        console.log("Making payment request...");

        const body = { products: carts, customerDetails: formData };
        const headers = { "Content-Type": "application/json" };

        const response = await fetch("http://localhost:7000/create-checkout-session", {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body),
        });

        console.log("Response Status: ", response.status);
        const session = await response.json();
        console.log("Session ID: ", session.id);

        const result = await stripe.redirectToCheckout({ sessionId: session.id });

        if (result.error) {
            console.error("Redirect Error:", result.error.message);
        }
    };




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
                    <form onSubmit={handleSubmit}>
                        <div className='grid lg:grid-cols-2 gap-5'>
                            <div className='text-[#797979]'>
                                <h1 className='text-center bg-rose-700 text-white  py-3 rounded-md'>Log Into Your Acount</h1>

                                <div className='border border-rose-50 mt-10 p-6 md:p-3 lg:p-6'>
                                    <div>
                                        <h1 className='text-3xl font-bold font-jost text-[#232532] mb-10'>Billing Details</h1>
                                        <div className='grid grid-flow-row gap-5'>
                                            <div className='flex flex-col md:flex-row gap-4 '>
                                                <div className='w-full'>
                                                    <label htmlFor="" className=''>First Name*</label>
                                                    <input className='mt-2 focus:outline-none border py-[10px] px-5 w-full' type='text'
                                                        name='firstName'
                                                        value={formData.firstName}
                                                        onChange={handleChange}
                                                        placeholder='First Name'
                                                        require />
                                                </div>
                                                <div className='w-full'>
                                                    <label htmlFor="">Last Name*</label>
                                                    <input className='mt-2 focus:outline-none border py-[10px] px-5 w-full' type='text'
                                                        name='lastName'
                                                        value={formData.lastName}
                                                        onChange={handleChange}
                                                        placeholder='Last Name'
                                                        require />
                                                </div>
                                            </div>
                                            <div className='flex flex-col md:flex-row gap-4 '>
                                                <div className='w-full'>
                                                    <label htmlFor="">Email*</label>
                                                    <input className='mt-2 focus:outline-none border py-[10px] px-5 w-full' type='email'
                                                        name='email'
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        placeholder='user@gmail.com'
                                                        require />
                                                </div>
                                                <div className='w-full'>
                                                    <label htmlFor="">Phone*</label>
                                                    <input className='mt-2 focus:outline-none border py-[10px] px-5 w-full' type='text'
                                                        name='phone'
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder='+8802323434'
                                                        require />
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-2'>
                                                <label htmlFor="country">Country*</label>
                                                <div className='w-full relative'>
                                                    <select className='appearance-none focus:outline-none border py-[10px] px-5 w-full' name='country'
                                                        value={formData.country}
                                                        onChange={handleChange}
                                                        require>
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
                                                <input className='mt-2 focus:outline-none border py-[10px] px-5 w-full' type='text'
                                                    name='address'
                                                    value={formData.address}
                                                    onChange={handleChange}
                                                    placeholder='Enter Your Address'
                                                    require />
                                            </div>

                                            <div className='flex gap-4 '>
                                                <div className='flex flex-col gap-2 w-full'>
                                                    <label htmlFor="country">Town/City*</label>
                                                    <div className='w-full relative'>
                                                        <select className='appearance-none focus:outline-none border py-[10px] px-5 w-full' name='city'
                                                            value={formData.city}
                                                            onChange={handleChange}
                                                            require
                                                        >
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
                                                    <input className='mt-2 focus:outline-none border py-[10px] px-5 w-full' type='number'
                                                        name='zipCode'
                                                        value={formData.zipCode}
                                                        onChange={handleChange}
                                                        placeholder='0'
                                                        require />
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
                                    </div>
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

                                            {carts.map((item, i) => (
                                                <div>
                                                    <div className='flex justify-between  items-center   '>
                                                        <div className='flex items-center gap-3'>
                                                            <img src={item.image} className='w-[70px] border' alt="" />
                                                            <div>
                                                                <h1 className='font-jost text-[15px] text-[#232532]'>{item.name} x {item.quantity} </h1>
                                                                <p className='text-[13px] font-inter text-[#797979]'>Price Per Item ${item.price}</p>
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
                                                <span>{totals}</span>
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
                                                <span className='text-rose-500'>{totals}</span>
                                            </div>
                                        </div>
                                        <div className=" mt-5">
                                            <div className="">
                                                <div className="flex items-center space-x-5 px-4 py-2 hover:bg-rose-200 transition-all duration-300 rounded-md">
                                                    <input
                                                        type="radio"
                                                        id="BankTransfer"
                                                        name="paymentMethod"
                                                        value="Bank Transfer"
                                                        checked={selectedOption === "Bank Transfer"}
                                                        onChange={handleChange}
                                                        className='cursor-pointer'
                                                        style={{ accentColor: "#AE1C9A" }}
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
                                                        className='cursor-pointer'

                                                        style={{ accentColor: "#AE1C9A" }}
                                                    />
                                                    <label htmlFor="paypal" className="text-[20px] font-medium text-gray-700">
                                                        Cash On Delivery
                                                    </label>
                                                </div>

                                                <div className="flex items-center space-x-5 px-4 py-4 hover:bg-rose-200 transition-all duration-300 rounded-md" >
                                                    <input
                                                        type="radio"
                                                        id="creditCard"
                                                        name="paymentMethod"
                                                        value="Credit Card"
                                                        checked={selectedOption === "Credit Card"}
                                                        onChange={handleChange}
                                                        className='cursor-pointer'

                                                        style={{ accentColor: "#AE1C9A" }}
                                                    />
                                                    <label htmlFor="bankTransfer" className="text-[20px] font-medium text-gray-700 ">
                                                        Credit/Debit Cards or Paypal
                                                    </label>
                                                </div>

                                                <button

                                                    // onClick={makePayment}
                                                    type="submit"
                                                    className="w-full bg-rose-600 text-white py-2 px-4 mt-4 rounded-lg text-center font-semibold hover:bg-rose-700"
                                                >
                                                    Place Order Now
                                                </button>
                                            </div>

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
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;