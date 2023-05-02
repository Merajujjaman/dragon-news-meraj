import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../pages/Home/Home";
import Category from "../pages/Category/Category";
import NewsLayouts from "../Layouts/NewsLayouts/NewsLayouts";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import LoginLayout from "../Layouts/LoginLayout/LoginLayout";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import PrivateRout from "./PrivateRout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/category',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <NewsLayouts></NewsLayouts>,
        children : [
            {
                path: ':id',
                element: <PrivateRout><NewsDetails></NewsDetails></PrivateRout>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;