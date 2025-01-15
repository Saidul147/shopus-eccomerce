import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GiCheckMark } from "react-icons/gi";


const Sucess = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    console.log(queryParams)
    const firstName = queryParams.get('firstName');
    const lastName = queryParams.get('lastName');
    const email = queryParams.get('email');
    const phone = queryParams.get('phone');
    const address = queryParams.get('address');
    const country = queryParams.get('country');
    const city = queryParams.get('city');
    const zipCode = queryParams.get('zipCode');

    useEffect(() => {
        localStorage.removeItem("cartItems")
    })

    return (
        <div className="thank-you-page text-center p-8 max-w-[1320px] mx-auto py-36 md:pt-20 pt-2">
            <div className='text-center w-full mx-auto flex justify-center py-4 '>
            <GiCheckMark className='text-6xl text-green-500' />
            </div>
            <h1 className="md:text-4xl text-2xl font-bold">Thank You for Your Order!</h1>
            <p className="text-lg md:mt-4 mt-2">Your payment was successful. Here are your billing details:</p>

            <div className="md:mt-6 mt-3 bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>
                <p><strong>First Name:</strong> {firstName}</p>
                <p><strong>Last Name:</strong> {lastName}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Address:</strong> {address}</p>
                <p><strong>City:</strong> {city}</p>
                <p><strong>Postcode / ZIP:</strong> {zipCode}</p>
            </div>

            <button
                onClick={() => navigate('/')}
                className="mt-6 bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 px-6 rounded shadow"
            >
                Return to Home
            </button>
        </div>
    );
};

export default Sucess;
