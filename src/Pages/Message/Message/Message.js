import React, { useRef } from 'react';
import './Message.css'
import emailjs from '@emailjs/browser';
// import image from '../../../assets/Image/contact.svg'



const Message = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wbch8yl', 'template_gwmk065', form.current, 'Mwbeb29rmiwI4XusA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div>
            <div className="">
                <div className="form-container my-32">
                    <div className="left-container">
                        <div className="left-inner-container">
                            <img src="https://www.computerhope.com/issues/pictures/send-text-message.png" alt="" className='mt-11' />
                        </div>
                    </div>
                    <div className="right-container">
                        <div className="right-inner-container">
                            <form ref={form} onSubmit={sendEmail}>
                              <div className=''>
                              <h2 className="lg-view">Contact Me</h2>
                           
                           <div>
                               <p>Name</p>
                               <input className="field" type="text" name='user_name' placeholder="Name" required/>                     
                           </div>
                           <div>
                               <p>Email</p>
                               <input className="field" type="email" name='user_email' placeholder="Email" required/>
                           </div>

                           <div>
                               <p>Phone</p>
                               <input className="field" type="phone" name="user_phone" placeholder="Phone" required/>
                           </div>
                           <div>
                               <p>Message</p>
                               <textarea className="field" rows="4" name='message' placeholder="Message" required></textarea>
                           </div>
                            <div className='md:ml-72'>
                            <button className='submit  bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-pink-500 hover:to-yellow-500 text-black'>Submit</button>
                            </div>
            
                              </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Message;