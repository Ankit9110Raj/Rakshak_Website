
/*import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import "./Contact.css"
import 'font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube ,faFacebook,faInstagram,faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';







const email = 'rakshak.uavs@gmail.com' 
        
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "replace with service id",
        "replace with template id",
        form.current,
        "replace with user id"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  
    

  
    return (
      <>

<StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
        <div className='mapsection'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.29592731265!2d-77.47713270775661!3d25.0326996781907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7c99b981dbc9%3A0x2aef01d3485e50d2!2sNassau%2C%20Bahamy!5e0!3m2!1spl!2spl!4v1624445118063!5m2!1spl!2spl'
            className='map'
            height='400'
            width='400'
            loading='lazy'
            title="Google Map"
          ></iframe>
        </div>



 
                
                 
             
        <div className='social-container'>
          <h3>Follow Us on Social Media:</h3>
          <ul className='social-links'>
            <li>
              <a href='https://instagram.com/rakshakiitb?igshid=MzRlODBiNWFlZA==' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faInstagram} size='3x' /> <p>Instagram</p>
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/TeamRakshak?mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faFacebook} size='3x' /> <p>Facebook</p>
              </a>
            </li>
            <li>
              <a href='https://www.youtube.com/@teamrakshakiitb2540' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faYoutube} size='3x' /> <p>YouTube</p>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/company/rakshak-iit-bombay/' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faLinkedin} size='3x' /> <p>Linkedin</p>
              </a>
            </li>
          </ul>
        </div>



      </>
    );
  }


export default Contact;



const StyledContactForm = styled.div`



width: 400px;

form {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  font-size: 16px;
  background-color:red;


    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }

  
  }
`;

<div class="mapouter"><div class="gmap_canvas"><iframe src="https://maps.google.com/maps?q=aero%20annex%20building%20iit%20bombay&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" style="width: 460px; height: 400px;"></iframe><style>.mapouter{position:relative;height:400px;width:460px;background:#fff;} .maprouter a{color:#fff !important;position:absolute !important;top:0 !important;z-index:0 !important;}</style><a href="https://blooketjoin.org/blooket-host/">blooket host</a><style>.gmap_canvas{overflow:hidden;height:400px;width:460px}.gmap_canvas iframe{position:relative;z-index:2}</style></div></div>
https://maps.google.com/maps?q=aero%20annex%20building%20iit%20bombay&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed

import emailjs from "@emailjs/browser";
import styled from "styled-components";
import "./Contact.css";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import React, { useRef, useEffect } from "react";

const Contact = () => {

  

  

  



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "replace with service id",
        "replace with template id",
        form.current,
        "replace with user id"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <StyledContainer>
        <StyledContactForm>
          <h2>Contact Us</h2>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </StyledContactForm>

        <div className='mapsection'>
          <iframe
            src=''
            className='map'
            width='500'
            loading='lazy'
            title="Google Map"
            
          ></iframe>
        </div>
      </StyledContainer>
      
      <div className='social-container'>
      <h3>Follow Us on Social Media:</h3>
          <ul className='social-links'>
            <li>
              <a href='https://instagram.com/rakshakiitb?igshid=MzRlODBiNWFlZA==' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faInstagram} size='3x' /> <p>Instagram</p>
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/TeamRakshak?mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faFacebook} size='3x' /> <p>Facebook</p>
              </a>
            </li>
            <li>
              <a href='https://www.youtube.com/@teamrakshakiitb2540' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faYoutube} size='3x' /> <p>YouTube</p>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/company/rakshak-iit-bombay/' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faLinkedin} size='3x' /> <p>Linkedin</p>
              </a>
            </li>
          </ul>
      </div>
    </>
  );
}

export default Contact;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 20px;
  margin: 20px;


  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width:80%;
    height:auto;
    

  }
`;

const StyledContactForm = styled.div`
  width: 500px;
  background-color: red;
  padding: 20px;
  border-radius: 10px;
  
  
  form {
    display: flex;
    flex-direction: column;
    

    input, textarea {
      width: 100%;
      padding: 7px;
      margin-top: 10px;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;*/

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import "./Contact.css";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "replace with service id",
        "replace with template id",
        form.current,
        "replace with user id"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <StyledContainer>
        <StyledContactForm>
          <h2>Contact Us</h2>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </StyledContactForm>

        <StyledMapSection>
          <iframe
            src='https://maps.google.com/maps?q=aero%20annex%20building%20iit%20bombay&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed'
            className='map'
            height='400'
            width='400'
            loading='lazy'
            title="Google Map"
          ></iframe>
        </StyledMapSection>ˀ
      </StyledContainer>

      <div className='social-container'>
        <h3 className="social">Follow Us on Social Media:</h3>
        <ul className='social-links'>
          <li>
              <a href='https://instagram.com/rakshakiitb?igshid=MzRlODBiNWFlZA==' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faInstagram} size='3x' /> <p>Instagram</p>
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/TeamRakshak?mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faFacebook} size='3x' /> <p>Facebook</p>
              </a>
            </li>
            <li>
              <a href='https://www.youtube.com/@teamrakshakiitb2540' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faYoutube} size='3x' /> <p>YouTube</p>
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/company/rakshak-iit-bombay/' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faLinkedin} size='3x' /> <p>Linkedin</p>
              </a>
            </li>
        </ul>
      </div>
    </>
  );
}

export default Contact;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 2px;
  margin: 20px;
  padding-left:150px;
  padding-right:150px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding-left:0px;
    padding-right:0px;
  }
`;

const StyledContactForm = styled.div`
  flex: 1;
  background-color: red;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
    
  }

  h2 {
    color: white;
    @media (max-width: 768px) {
      font-size:medium;
    }
  
  }

  form {
    display: flex;
    flex-direction: column;

    input, textarea {
      width: 100%;
      padding: 7px;
      margin-top: 10px;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;

const StyledMapSection = styled.div`
  flex: 1;
  iframe {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
  }
`;