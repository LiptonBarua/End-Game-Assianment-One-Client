import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import About from "../../Pages/About/About/About";
import CommentDetails from "../../Pages/CommentDetails/CommentDetails/CommentDetails";
import DefaultPage from "../../Pages/DefaultPage/DefaultPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Media from "../../Pages/Media/Media/Media";
import Message from "../../Pages/Message/Message/Message";
import Register from "../../Pages/Register/Register";
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
            path: '/media', element: <PrivateRouter><Media></Media></PrivateRouter>
        },
  
        {
            path: '/commentDetails/:id',
             element: <CommentDetails></CommentDetails>,
            loader: ({params})=>fetch(`https://end-game-assianment-server-1.vercel.app/upload/${params.id}`)
        },
  
        {
            path: '/message', element: <PrivateRouter><Message></Message></PrivateRouter>
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