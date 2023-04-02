import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loading from '../../Pages/Loading/Loading/Loading';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return  <div>
            <Loading></Loading>
        </div>
    }
   if(!user){
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
   }
   return children;
};

export default PrivateRouter;