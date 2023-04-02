import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import About from "../../Pages/About/About/About";
import AddPost from "../../Pages/AddPost/AddPost/AddPost";
import CommentDetails from "../../Pages/CommentDetails/CommentDetails/CommentDetails";
import DefaultPage from "../../Pages/DefaultPage/DefaultPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Media from "../../Pages/Media/Media/Media";
import Message from "../../Pages/Message/Message/Message";
import Profile from "../../Pages/Profile/Profile/Profile";
import Register from "../../Pages/Register/Register";
import Uploading from "../../Pages/Uploading/Uploading/Uploading";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const router= createBrowserRouter([
    {
    path: '/', element: <Main></Main>, 
    errorElement: <DefaultPage></DefaultPage>,
    children: [
        {
            path: '/', element: <PrivateRouter><Home></Home></PrivateRouter>
        },
        {
            path: '/message', element: <PrivateRouter><Message></Message></PrivateRouter>
        },
        {
            path: '/addPost', element: <PrivateRouter><Uploading></Uploading></PrivateRouter>
        },
        {
            path: '/media', element: <PrivateRouter><Media></Media></PrivateRouter>
        },
        {
            path: '/profile', element: <PrivateRouter><Profile></Profile></PrivateRouter>
        },
  
        {
            path: '/comment/:id',
             element: <CommentDetails></CommentDetails>,
            loader: ({params})=>fetch(`http://localhost:5000/upload/${params.id}`)
        },
  
        {
            path: '/about', element: <PrivateRouter><About></About></PrivateRouter>
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