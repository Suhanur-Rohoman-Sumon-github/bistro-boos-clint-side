import React from 'react';
import Navbar from '../pages/shered/navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/shered/footer/Footer';

const Main = () => {
    const location = useLocation()
    const noNavbarandFooter = location.pathname.includes('/login') || location.pathname.includes('/sinup')
    return (
        <div>
            {/* navbar start */}
            {noNavbarandFooter || <Navbar />}
             {/* navbar end */}
             
            {/* outlet start*/}
            <Outlet />
             {/* outlet end*/}

            {/* footer start */}
           {noNavbarandFooter || <Footer/>}
            {/* footer end */}
        </div>
    );
};

export default Main;