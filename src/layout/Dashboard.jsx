import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaAlignJustify, FaBook, FaCalendarAlt, FaCartArrowDown, FaCommentDollar, FaHome, FaPen, FaPhoneAlt, FaRegCalendarCheck, FaShoppingBag, FaSlidersH, FaUsers, FaWallet } from "react-icons/fa";
import useCarts from '../hook/useCarts';
import useAdmin from '../hook/useAdmin';


const Dashboard = () => {
    const [data] = useCarts()
    const isAdmin = true
    // const [isAdmin] = useAdmin()
    return (
        <div className=' w-full bg-slate-100'>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content ">

                    <div className='w-11/12 p-4 mx-auto bg-[#FFFFFF]'>
                        <Outlet />
                    </div>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>


                </div>
                <div className="drawer-side ml-1 bg-[#D1A054] ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul id="sidebar" className="menu px-4 pt-0 w-80    ">
                        <NavLink to={'/'}>  <div className='text-center  text-black'>
                            <h1 className='text-3xl font-bold'>BISTRO BOSS  </h1>
                            <p className='text-xl'>Restaurant</p>
                        </div>
                        </NavLink>
                        {isAdmin ? <><li className='mt-4'><NavLink className={({ isActive }) => isActive ? "text-white" : ""} to={'/dashbord/user-home'}><FaHome />Admin Home</NavLink></li>
                        <li className='mt-4'><NavLink className={({ isActive }) => isActive ? "text-white" : ""} to={'/dashbord/add-item'}><FaPen /> add items</NavLink></li>
                        <li className='mt-4'><NavLink className={({ isActive }) => isActive ? "text-white" : ""} to={'/dashbord/manage-item'}><FaSlidersH />manage items</NavLink></li>
                        <li className='mt-4'><NavLink className={({ isActive }) => isActive ? "text-white" : ""} to={'/dashbord/manage-booking'}><FaBook />Manage bookings</NavLink> </li>
                        <li className='mt-4'><NavLink className={({ isActive }) => isActive ? "text-white" : ""} to={'/dashbord/all-user'}><FaUsers />all users</NavLink></li></> :  <> <li className='mt-4'><NavLink className={({ isActive }) => isActive ? "text-white" : ""} to={'/dashbord/user-home'}><FaHome />User Home</NavLink></li>
                        <li className='mt-4'><NavLink className={({ isActive }) => isActive ? "text-white" : ""} to={'/dashbord/reservation'}><FaCalendarAlt /> reservetion</NavLink></li>
                        <li className='mt-4'><NavLink className={({ isActive }) => isActive ? "text-white" : ""} to={'/dashbord/payment-history'}><FaWallet /> payment history</NavLink></li>
                        <li className='mt-4'><NavLink className={({ isActive }) => isActive ? "text-white" : ""} to={'/dashbord/mycart'}><FaCartArrowDown /> my cart <div className="badge badge-secondary">{data ? data.length : 0}</div></NavLink> </li>
                        <li className='mt-4'><NavLink className={({ isActive }) => isActive ? "text-white" : ""} to={'/dashbord/add-review'}><FaCommentDollar />add review</NavLink></li>
                        <li className='mt-4'><NavLink className={({ isActive }) => isActive ? "text-white" : ""} to={'/dashbord/my-booking'}><FaRegCalendarCheck />my booking</NavLink></li></>}

                    <div className="divider">OR</div>
                    <li className='mt-4'><NavLink to={'/'}><FaHome /> Home</NavLink></li>
                    <li className='mt-4'><NavLink to={'/menu'}><FaAlignJustify /> Our Menu</NavLink></li>
                    <li className='mt-4'><NavLink to={'/shop'}><FaShoppingBag /> Our Shop</NavLink></li>
                    <li className='mt-4'><NavLink to={'/contact'}><FaPhoneAlt /> CONTACT us</NavLink></li>
                </ul>

            </div>
        </div>
        </div >
    );
};

export default Dashboard;