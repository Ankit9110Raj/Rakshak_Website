import React from 'react'
import "./Contact.css"
import 'font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube ,faFacebook,faInstagram,faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Youth from "../../images/Youth.gif"
import Sunidhi from "../../images/sunidhi.jpeg"



const teamMembers = [
  {
    name: 'John Doe',
    position: 'Developer',
    email: 'john@example.com',
    image: Youth, 
  },
  {
    name: 'Sunidhi Rana',
    position: 'Marketing Subsystem Head',
    email: '+91 9110112945',
    image: Sunidhi, 
  },
  {
    name: 'Bob Johnson',
    position: 'Marketing',
    email: 'bob@example.com',
    image: Youth, 
  },
  {
    name: 'Bob Johnson',
    position: 'Marketing',
    email: 'bob@example.com',
    image: Youth, 
  },
  
];


const email = 'rakshak.uavs@gmail.com';

const Contact = () => {
  return (
    <>
    <div className='contact-h'>
    <p className='c-heading'>REACH OUT TO US</p>
    </div>

    

    <div className="container">
      <p>
        <FontAwesomeIcon icon={faEnvelope} size="3x"/>
        Email us at <br/><a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>Address: Aerospace building</p>
    </div>

    

  
   <div className="App">
      <h1>Call Us</h1>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p> {member.position}</p>
            <p><FontAwesomeIcon icon={faPhone} /> {member.email}</p>
          </div>
        ))}
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