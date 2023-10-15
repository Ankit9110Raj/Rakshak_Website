import React from 'react'
// import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import "./Contact.css"
import 'font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube ,faFacebook,faInstagram,faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';







const email = 'rakshak.uavs@gmail.com';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send the form data (e.g., API call)

    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

 
  return (
    <>
    <div className='contact-h'>
    <p className='c-heading'>REACH OUT TO US</p>
    </div>
   <div style={{display:'flex'}}>
   <div className='mapsection'>
    <iframe width="100%" title="Rakshak Map" height="400" frameborder="0" scrolling="yes" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=IITB%20Rakshak%20Team%20Lab,%20Basement,%20Aero%20Annex%20Building,%20Academic%20Area,%20IIT%20Bombay,%20Powai,%20Mumbai,%20400076+(Rakshak%20Lab)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population Estimator map</a></iframe>
    </div>
    {/* form */}
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
    </div>
    

    
   
    

    <div className="container">
      <div className='email-contact'> 
        <FontAwesomeIcon icon={faEnvelope} size="3x"/>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div className='call-contact'>
        <FontAwesomeIcon icon={faPhone} size="3x"/>
        <p>vice president: +91 9110112945 <br/> president: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+91 9110112945</p>
        
      </div> 
    </div>

    
    

    
    
  
   
    
    <div className="social-container">
      <h2>Follow Us on Social Media:</h2>
      <ul className="social-links">
        <li>
          <a href="https://instagram.com/rakshakiitb?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="3x"/> <p>Instagram</p>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/TeamRakshak?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="3x"/> <p>Facebook</p>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@teamrakshakiitb2540" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="3x"/> <p>YouTube</p>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/rakshak-iit-bombay/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="3x"/> <p>Linkedin</p>
          </a>
        </li>
      </ul>
      </div>
   
    </>
  )
}

export default Contact;