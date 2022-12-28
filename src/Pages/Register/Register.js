import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './Register.css'

const Register = () => {

  const{createUser, updateUserProfile}= useContext(AuthContext);


  const handleSignUp=(event)=>{

    
    event.preventDefault()
    const form = event.target;
    const name= form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password= form.password.value;

    createUser(email, password)
    .then(result=>{
        const user = result.user;
        form.reset();
       
        handleUpdateProfile(name, photoURL)
        toast.success('Please your email verify');
        console.log(user)
        
    })
    .catch(error=>{
      // setError(error.message);
     })
};

const handleUpdateProfile=(name, photoURL)=>{
  const profile = {
    displayName: name,
    photoURL: photoURL
  }
  updateUserProfile(profile)
  .then(()=>{})
  .catch(error=>console.error(error))
}
    return (
        <div>
        <div>
     <div className="login-box">
 <h2>Register</h2>
 <form onSubmit={handleSignUp}>
   <div className="user-box">
     <input type="text" name="name" required=""/>  
     <label>Name</label>
   </div>
   <div className="user-box">
     <input name='photoURL' type="text" placeholder="Photo URL" required=""/>  
     <label>Image</label>
   </div>
   <div className="user-box">
     <input type="email" name="email" required=""/>
     <label>Email</label>
   </div>
   <div className="user-box">
     <input type="password" name="password" required=""/>
     <label>Password</label>
   </div>
   <button className='text-center bin' value='SIGN UP'>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     Register
   </button>
 </form>

 <div className='text-center'>
 <p>Already have an account? <Link to='/login' className='text-primary mt-10'>Please Login</Link></p>
 </div>

</div>
 </div>
 </div>
    );
};

export default Register;