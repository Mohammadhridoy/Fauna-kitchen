import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/root";
import Login from "../Login/Singup/Login";
import Home from "../Home/Home";
import AllFood from "../AllFood/AllFood";
import Blog from "../Blog/Blog";
import Singup from "../Login/Singup/Singup";
import AddFood from "../AddFood/AddFood";
import ErrorPage from "../ErrorPage/ErrorPage";


const MyRoute = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:'allfood',
                element:<AllFood></AllFood>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'login',
                element: <Login></Login>
            },
            {
                path:'singup',
                element:<Singup></Singup>
            },
            {
                path:'addfood',
                element: <AddFood></AddFood>
            }
        ]
    }

])

export default MyRoute;