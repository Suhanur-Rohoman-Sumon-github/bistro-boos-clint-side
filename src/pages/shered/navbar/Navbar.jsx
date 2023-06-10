import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import { Authcontext } from '../../../provider/AuthProvider';
import useCarts from '../../../hook/useCarts';

const Navbar = () => {
    const { user, handleLogout } = useContext(Authcontext)
    const [data] = useCarts()
    const navItem = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/contact'}>CONTACT us</Link></li>
        <li><Link to={'/menu'}>DASHBOARD</Link></li>
        <li><Link to={'/menu'}>Our Menu</Link></li>
        <li><Link to={'/shop'}>Our Shop</Link></li>

    </>
    const handleSinout = () => {
        handleLogout()
            .then(() => { })
            .catch(error => console.log(error));
    }
    return (
        <div className="navbar bg-black bg-opacity-25 w-11/12 text-white fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                {user && <li><Link to={'/dashbord/mycart'}> <button className="btn btn-outline btn-warning text-white mr-4 gap-2">
                    <FaCartArrowDown />
                    <div className="badge badge-secondary">{data?data.length : 0}</div>
                </button> </Link></li>}
                {!user && <Link to={'/login'}><button className='btn btn-warning text-white'>login</button></Link>}
                {user && <Link to={'/'}><button onClick={handleSinout} className='btn btn-warning text-white'>logout</button></Link>}
            </div>
        </div>
    );
};

export default Navbar;