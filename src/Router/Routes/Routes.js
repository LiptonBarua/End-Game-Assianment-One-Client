import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import About from "../../Pages/About/About/About";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Message from "../../Pages/Message/Message/Message";
import Register from "../../Pages/Register/Register";

const router= createBrowserRouter([
    {
    path: '/', element: <Main></Main>, children: [
        {
            path: '/', element: <Home></Home>
        },
        {
            path: '/', element: <Home></Home>
        },
        {
            path: '/message', element: <Message></Message>
        },
        {
            path: '/about', element: <About></About>
        },
        {
            path: '/login', element: <Login></Login>
        },
        {
            path: '/register', element: <Register></Register>
        },
    ]
    }
])

export default router;