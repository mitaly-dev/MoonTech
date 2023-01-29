import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Cart from "../page/Cart/Cart";
import Home from "../page/Home/Home";
import Wishlist from "../page/Wishlist/Wishlist";

export const router = createBrowserRouter([
    {path:'/',
    element:<Main></Main>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/cart',element:<Cart></Cart>},
        {path:'/wishlist',element:<Wishlist></Wishlist>}
    ]
    }
])