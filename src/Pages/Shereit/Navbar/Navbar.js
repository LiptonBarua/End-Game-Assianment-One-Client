import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {MdOutlineAddBox, MdOutlineExplore, MdOutlineFavoriteBorder} from "react-icons/md";
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import {  IoIosTimer } from "react-icons/io";
import './Navbar.css'



const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }

  const manuItem = <>
    <li><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-10 w-6 h-6 md:w-7 h-7 text-black ml-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
    </Link></li>
    <li><Link to='/message'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className=" w-6 h-6 md:w-7 h-7 fill-current text-black ml-4">
      <path d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"></path>
    </svg>
    </Link></li>
    <li><Link to='/addPost'><MdOutlineAddBox className="w-6 h-6 md:w-7 h-7 text-black ml-4"></MdOutlineAddBox>
    </Link></li>
    <li><Link to="/media"><MdOutlineExplore className="w-6 h-6 md:w-7 h-7 text-black ml-4"></MdOutlineExplore></Link></li>

    <li><Link to="/about"><MdOutlineFavoriteBorder className="w-6 h-6 md:w-7 h-7 text-black mx-4"></MdOutlineFavoriteBorder></Link></li>
  </>
  return (
    <div className=''>

      <div className="navbar bg-slate-50 border md:px-48 ">
  <div className="navbar-start">
  <a className="btn btn-ghost font-italic normal-case text-xl md:text-2xl text-black title">L.B Social</a>
  </div>
  <div className="navbar-center hidden lg:flex">
  <div className="form-control">
  <input type="text" placeholder="Search" className="input input-bordered w-64 h-10" />
    </div>
  </div>
  <div className="navbar-end">
  <div className="">
          <ul className="flex items-center menu-black">
            {manuItem}
          </ul>
        </div>
      {
		user?.uid?
		<div className="dropdown dropdown-end">
		<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
		  <div className=" w-7 md:w-10 rounded-full">
			<img src={user?.photoURL} />
		  </div>
		</label>
		<ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
  <div className="h-full p-3 space-y-2 w-60 dark:bg-gray-900 dark:text-gray-100">
	  <div className="flex items-center p-2 space-x-4">
		  <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
		  <div>
			  <h2 className="text-lg font-semibold">{user?.displayName}</h2>
			  <span className="flex items-center space-x-1">
				  <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">View profile</a>
			  </span>
		  </div>
	  </div>
	  <div className="divide-y mr-10 divide-gray-700">
		  <ul className="pt-2 pb-4 space-y-1 text-sm">
			  <li className="dark:bg-gray-800 dark:text-gray-50">
				  <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
				  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
	<path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
  
					 <Link to='/profile'><span>Profile</span></Link>
				  </a>
			  </li>
			  <li>
				  <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
				  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
	<path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
  </svg>
  
					  <span>Saved</span>
				  </a>
			  </li>
		<li>
				  <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current dark:text-gray-400">
						  <path d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"></path>
						  <path d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"></path>
					  </svg>
					  <span>Settings</span>
				  </a>
			  </li>
			  <li>
				  <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
					
					  <IoIosTimer className="w-6 h-6 fill-current dark:text-gray-400"></IoIosTimer>
					  <span>Your activity</span>
				  </a>
			  </li>
			  <li>
				  <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
				  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
	<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
  </svg>
  
					  <span>Report a problem</span>
				  </a>
			  </li>
			  <li>
				  <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
				  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
	<path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
  </svg>
  
					  <span>Switch accounts</span>
				  </a>
			  </li>
		  </ul>
		  <ul className="pt-4 pb-2 space-y-1 text-sm">
		  {/* <li><a><button onClick={handleLogOut} className="btn ml-4 border-none text-black bg-gradient-to-r from-violet-500 to-fuchsia-500">Log Out</button> </a></li> */}
			  <li>
			  
			{
			user?.uid? <button onClick={handleLogOut} className="btn ml-4 border-none text-black bg-gradient-to-r from-violet-500 to-fuchsia-500">Log Out</button> : <li><Link to='/login'>Login</Link></li>
		  }
  
			  </li>
		  </ul>
	  </div>
  </div>
		
		</ul>
	  </div>
	  :
	  <li><Link to='/login' className='w-full'>Login</Link></li>
	  }
  </div>
</div>
    </div>
  );
};

export default Navbar;