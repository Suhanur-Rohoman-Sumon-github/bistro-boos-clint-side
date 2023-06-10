import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/error/Error";
import Home from "../pages/home/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/Order/Order";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Login-and-Sinup/Login";
import Sinup from "../pages/Login-and-Sinup/Sinup";
import Dashboard from "../layout/Dashboard";
import Mycart from "../pages/Dashboard/mycart/Mycart";
import PrivateRoute from "./PrivateRoute";
import Payment from "../pages/Dashboard/payment-history/Payment";
import Resarvation from "../pages/Dashboard/reservatuion/Resarvation";
import AddReview from "../pages/Dashboard/add-review/AddReview";
import UserHome from "../pages/Dashboard/user-home/UserHome";
import MyBooking from "../pages/Dashboard/my-booking/MyBooking";
import AdminHome from "../pages/Dashboard/admin/adminHome/AdminHome";
import AddIItem from "../pages/Dashboard/admin/add-item/AddIItem";
import ManageBooking from "../pages/Dashboard/admin/manage-booking/ManageBooking";
import AllUser from "../pages/Dashboard/admin/manage-user/AllUser";
import ManageItem from "../pages/Dashboard/admin/manage-item/ManageItem";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main />,
        errorElement:<Error />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'menu',
                element:<Menu />
            },
            {
                path:'shop',
                element:<Order />
            },
            {
                path:'shop/:catagory',
                element:<Order />
            },
            {
                path:'/contact',
                element:<ContactUs/>
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/sinup',
                element:<Sinup />
            }
           
        ]
    },
    {
        path:'/dashbord',
        element:<PrivateRoute ><Dashboard /></PrivateRoute>,
        children:[
            {
                path:'/dashbord/mycart',
                element:<Mycart />
            },
            {
                path:'/dashbord/payment-history',
                element: <Payment /> 
            },
            {
                path:'/dashbord/reservation',
                element: <Resarvation />  
            },
            {
                path:'/dashbord/add-review',
                element: <AddReview /> 
            },
            {
                path:'/dashbord/user-home',
                element: <UserHome /> 
            },
            {
                path:'/dashbord/my-booking',
                element: <MyBooking /> 
            },
            {
                path:'/dashbord/admin-home',
                element: <AdminHome />
            },
            {
                path:'/dashbord/add-item',
                element: <AddIItem />
            },
            {
                path:'/dashbord/manage-booking',
                element: <ManageBooking />
            },
            {
                path:'/dashbord/all-user',
                element: <AllUser /> 
            },
            {
                path:'/dashbord/manage-item',
                element: <ManageItem />
            }
        ]
    }
])
export default router;