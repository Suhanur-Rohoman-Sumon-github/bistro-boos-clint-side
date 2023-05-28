import React from 'react';
import Navbar from '../pages/shered/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shered/footer/Footer';

const Main = () => {
    return (
        <div>
            {/* navbar start */}
            <Navbar />
             {/* navbar end */}
             
            {/* outlet start*/}
            <Outlet />
             {/* outlet end*/}

            {/* footer start */}
            <Footer/>
            {/* footer end */}
        </div>
    );
};

export default Main;