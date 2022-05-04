import { useState } from 'react';
import './assets/contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Contact = () => {

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
  setFullName('');
  setEmail('');
  setSubject('');
  setMessage('');
}

  return (
    <>
      <div className='top'>
        <h1>Contact Me</h1>
        <p>If you want to collaborate or have any questions, please feel free to shoot me an email!</p>
      </div>

      <div className='container'>
        <form className='form col'>
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
          <button type="button" className="btn submit-btn" onClick={handleFormSubmit}>Submit</button>
        </form>
      </div>
    </>
  )
};

export default Contact;