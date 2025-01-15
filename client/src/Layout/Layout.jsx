import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import TopNav from '../Shared/TopNav';
import MiddleNav from '../Shared/MiddleNav';
import Footer from '../Shared/Footer';

const Layout = () => {
    return (
        <div className='bg-[#f8f8f8]'>
            <TopNav></TopNav>
            <MiddleNav></MiddleNav>
            <Navbar></Navbar>
           <Outlet/> 
           <Footer></Footer>
        </div>
    );
};

export default Layout;