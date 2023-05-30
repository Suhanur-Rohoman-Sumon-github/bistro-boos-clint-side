import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../pages/error/Error";
import Home from "../pages/home/home/Home";
import Menu from "../pages/menu/Menu";
import Order from "../pages/Order/Order";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Login-and-Sinup/Login";
import Sinup from "../pages/Login-and-Sinup/Sinup";

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
    }
])
export default router;