import React, { useRef, useState } from 'react';
import '../styles/contact.css';
import emailjs from '@emailjs/browser';
import { useHistory } from 'react-router-dom';


const Contact = () => {
  const form = useRef();
  const history = useHistory();
  const[sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      `${process.env.REACT_APP_YOUR_SERVICE_ID}`, 
      `${process.env.REACT_APP_YOUR_TEMPLATE_ID}` ,
      form.current, 
      `${process.env.REACT_APP_YOUR_USER_ID}`)
      .then((result) => {
        // console.log(result.text);
        setSent(true);
      }).then((error) => {
          console.log(error.text);
        });
  };

  return <div className='contact_box'>

      <div className='contact_box_2'>
        <form onSubmit={handleSubmit} ref={form} >
          <div >
            <input 
            required 
            name="userName" 
            type="text"
            placeholder="Full Name" />
          </div>
          <div >
            <input 
            name="userEmail" 
            type="email" 
            placeholder="Your Email" 
            required />
          </div>
          <div >
            <textarea name="userMessage" 
            required 
            placeholder="Enter your Message here" />
          </div>
  
         { sent ? <button  onClick={()=> history.push('/')} >Home </button> : <button type='submit'> Send Email</button>}
         {sent &&  "Thanks for your Email!"}
        </form>
      
    </div>
  </div>


}

export default Contact;
