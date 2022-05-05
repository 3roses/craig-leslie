import { useState } from 'react';
import './assets/contact.css'

const Contact = () => {

  function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const [fullName, setFullName] = useState('');
const [email, setEmail] = useState('');
const [subject, setSubject] = useState('');
const [message, setMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');

const handleInputChange = (e) => {
  const { name, value } = e.target;

  if (name === 'fullName') {
    setFullName(value)
  } else if (name === 'email') {
    setEmail(value)
  } else if (name === 'subject') {
    setSubject(value) 
  } else if (name === 'message') {
    setMessage(value)
  }
}

const handleFormSubmit = (e) => {
  e.preventDefault();
  
  if(!validateEmail(email) || !fullName || !subject || !message){
    setErrorMessage('Please fill out the entire form!');
    return
  }
  setFullName('');
  setEmail('');
  setSubject('');
  setMessage('');
  setErrorMessage('');
}

  return (
    <>
      <div className='top'>
        <h1>Contact Me</h1>
        <p>If you want to collaborate or have any questions, please feel free to shoot me an email!</p>
      </div>

      <div className='container'>
        <form className='form col' onSubmit={handleFormSubmit}>
        <input
            value={fullName}
            name="fullName"
            onChange={handleInputChange}
            type="text"
            placeholder="Your Full Name"
          />
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="text"
            placeholder="Your Email Address"
          />
          <input
            value={subject}
            name="subject"
            onChange={handleInputChange}
            type="text"
            placeholder="Subject"
          />
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
            placeholder=""
          />
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </div>
    </>
  )
};

export default Contact;