import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Shereit/Navbar/Navbar';

const Main = () => {
    return (
        <div className='overflow-x-hidden'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;