import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BeakerIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../../../AuthProvider/AuthProvider';



const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>console.error(error))
   }

  const manuItem = <>
    <li><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
    </Link></li>
    <li><Link to='/message'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
    </Link></li>
    <li><Link to="/about"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
    </svg>
    </Link></li>
  
  </>
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {manuItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">L.B Social</a>
        </div>
        <div className="navbar-center flex">
          <ul className="menu menu-horizontal px-1">
            {manuItem}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt="" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box">
              {
                user?.uid?
                <>
                 <li>
                <a className="justify-between">
                  {user?.displayName ? user?.displayName : "Not a Name"}

                </a>
              </li>
              <button onClick={handleLogOut} className="btn btn-secondary">Log Out</button>
                </>
                :
                <li><Link to='/login'>Login</Link></li>
              }
             

              <li><a>Settings</a></li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;