import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './Login.css'

const Login = () => {
   const{signIn}= useContext(AuthContext);
   const navigate = useNavigate();
  const location = useLocation();

   const from = location?.state?.from?.pathname || '/';


	const handleLogSubmit=(event)=>{
		event.preventDefault();
        const form = event.target;
        const email =form.email.value;
        const password = form.password.value;
        
		signIn(email, password)
		.then(result=>{
			const user= result.user;
			toast.success('Login Successfully');
			form.reset()
			navigate(from, {replace: true})
		})
		.catch(error=>{
			toast.success("Incorrect password'")
		})
	}
	return (
		<div>
		<div className="login-box">
	<h2>Login</h2>
	<form onSubmit={handleLogSubmit}>
		
	  <div className="user-box">
		<input type="email" name="email" required=""/>   
		<label>Email</label>
	  </div>
	  <div className="user-box">
		<input type="password" name="password" required=""/>
		<label>Password</label>
	  </div>
	  <button className='bin'>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		Login
	  </button>
	</form>

	<div className='text-center'>
	<p>Don't have an account? <Link to='/register' className='text-primary mt-10'>Sign Up</Link></p>
	</div>
  </div>
	</div>
	);
};

export default Login;