import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loading from '../../Pages/Loading/Loading/Loading';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const loacation = useLocation();
    if(loading){
        return  <Loading></Loading>
    }
   if(!user){
    return <Navigate to='/login' state={{from: loacation}} replace></Navigate>
   }
   return children;
};

export default PrivateRouter;