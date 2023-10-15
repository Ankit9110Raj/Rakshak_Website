import React, { useEffect } from 'react';
import { motion} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import './Team.css';
import 'font-awesome/css/font-awesome.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram,faLinkedin  } from '@fortawesome/free-brands-svg-icons';
import imag1 from '../../images/sunidhi.jpeg'


const Team = () => {

  const lineStyles = {
    width: '80%',  
    border: '1px solid #000',  
    margin: '0 auto',  
  };

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };
  

  const backgroundStyle = {
    backgroundImage: `url(${require('./background2.jpeg')})`, 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    backgroundAttachment: 'fixed', 
  };

 const avionics = [
  {
    name: 'John Doe',
    image: imag1,
    instagram: 'https://www.instagram.com/johndoe/',
    linkedin: 'https://www.linkedin.com/in/johndoe/',
  },
  {
    name: 'John Doe',
    image: imag1,
    instagram: 'https://www.instagram.com/johndoe/',
    linkedin: 'https://www.linkedin.com/in/johndoe/',
  },
  {
    name: 'John Doe',
    image: imag1,
    instagram: 'https://www.instagram.com/johndoe/',
    linkedin: 'https://www.linkedin.com/in/johndoe/',
  },
    
  {
    name: 'John Doe',
    image: imag1,
    instagram: 'https://www.instagram.com/johndoe/',
    linkedin: 'https://www.linkedin.com/in/johndoe/',
  },

  {
    name: 'John Doe',
    image: imag1,
    instagram: 'https://www.instagram.com/johndoe/',
    linkedin: 'https://www.linkedin.com/in/johndoe/',
  },

  {
    name: 'John Doe',
    image: imag1,
    instagram: 'https://www.instagram.com/johndoe/',
    linkedin: 'https://www.linkedin.com/in/johndoe/',
  },

  {
    name: 'John Doe',
    image: imag1,
    instagram: 'https://www.instagram.com/johndoe/',
    linkedin: 'https://www.linkedin.com/in/johndoe/',
  },

  {
    name: 'John Doe',
    image: imag1,
    instagram: 'https://www.instagram.com/johndoe/',
    linkedin: 'https://www.linkedin.com/in/johndoe/',
  },

  {
    name: 'John Doe',
    image: imag1,
    instagram: 'https://www.instagram.com/johndoe/',
    linkedin: 'https://www.linkedin.com/in/johndoe/',
  },

  {
    name: 'John Doe',
    image: imag1,
    instagram: 'https://www.instagram.com/johndoe/',
    linkedin: 'https://www.linkedin.com/in/johndoe/',
  },

  {
    name: 'John Doe',
    image: imag1,
    instagram: 'https://www.instagram.com/johndoe/',
    linkedin: 'https://www.linkedin.com/in/johndoe/',
  },

  {
    name: 'John Doe',
    image: imag1,
    instagram: 'https://www.instagram.com/johndoe/',
    linkedin: 'https://www.linkedin.com/in/johndoe/',
  },

  {
    name: 'John Doe',
    image: imag1,
    instagram: 'https://www.instagram.com/johndoe/',
    linkedin: 'https://www.linkedin.com/in/johndoe/',
  },

  {
    name: 'John Doe',
    image: imag1,
    instagram: 'https://www.instagram.com/johndoe/',
    linkedin: 'https://www.linkedin.com/in/johndoe/',
  },
  ];

  const aerodynamics = [
    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },
    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },
    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },
      
    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },
  
    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },
  
    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },
  
    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },
  
    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },
  
    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },
  
    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },
  
    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },
  
    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },
  
    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },
  
    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    }
    ];

  const teamMembers = [
    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },
    {
      name: 'Jane Smith',
      image: imag1,
      instagram: 'https://www.instagram.com/janesmith/',
      linkedin: 'https://www.linkedin.com/in/janesmith/',
    },
    {
      name: 'Bob Johnson',
      image: imag1,
      instagram: 'https://www.instagram.com/bobjohnson/',
      linkedin: 'https://www.linkedin.com/in/bobjohnson/',
    }
    
    
  ];


  const software = [
    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },
    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },
    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },
    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },
    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },

    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },

    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },

    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },

    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },

    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },

    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },

    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },

  ];

  const Business = [
    

    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },

    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },

    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },

    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },

    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },

    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },

    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },

    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },

    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },

    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },

    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },

    {
      name: 'John Doe',
      image: imag1,
      instagram: 'https://www.instagram.com/johndoe/',
      linkedin: 'https://www.linkedin.com/in/johndoe/',
    },
  ]


  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

    
  return (
    
    <div className="Apps" style={backgroundStyle}>
    <div className="image-gallery-container">
      <div className='first'>
    <p className='teamlead' style={{ marginTop: '20px' }}>TEAM LEADS</p>
    <div className="image-gallery" style={{ marginTop: '20px' }}>
      {teamMembers.map((member, index) => (
        <div key={index} className="gallery-item">
          <img
            src={member.image}
            alt={`image ${index + 1}`}
            className="gallery-image"
          />
          <p className="member-name">{member.name}</p>
          <div className="social-icons">
            <a href={member.instagram} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="1x"/>
            </a>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="1x"/>
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>


    <div className='line' style={{ marginTop: '50px' }}>
    {/* Render the horizontal line */}
    <hr style={lineStyles} />
    </div>
    <p className='teamlead'>Avionics</p>
    <div className="image-gallery" style={{ marginTop: '20px' }}>
      {avionics.map((member, index) => (
        <div key={index} className="gallery-item">
          <img
            src={member.image}
            alt={`Image ${index + 1}`}
            className="gallery-image"
          />
          <p className="member-name">{member.name}</p>
          <div className="social-icons">
            <a href={member.instagram} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="1x"/>
            </a>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="1x"/>
            </a>
          </div>
        </div>
      ))}
    </div>

   <div className='line' style={{ marginTop: '50px' }}>
    {/* Render the horizontal line */}
    <hr style={lineStyles} />
    </div>
    <p className='teamlead'>Software</p>
    <div className="image-gallery" style={{ marginTop: '20px' }}>
      {software.map((member, index) => (
        <div key={index} className="gallery-item">
          <img
            src={member.image}
            alt={`Image ${index + 1}`}
            className="gallery-image"
          />
          <p className="member-name">{member.name}</p>
          <div className="social-icons">
            <a href={member.instagram} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="1x"/>
            </a>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="1x"/>
            </a>
          </div>
        </div>
      ))}
    </div>
   


    <div className='line' style={{ marginTop: '50px' }}>
    {/* Render the horizontal line */}
    <hr style={lineStyles} />
    </div>
    <p className='teamlead'>Aerodynamics</p>
    
    <div className="image-gallery"  style={{ marginTop: '20px' }}>
      {aerodynamics.map((member, index) => (
        <div key={index} className="gallery-item">
          <img
            src={member.image}
            alt={`Image ${index + 1}`}
            className="gallery-image"
          />
          <p className="member-name">{member.name}</p>
          <div className="social-icons">
            <a href={member.instagram} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="1x"/>
            </a>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="1x"/>
            </a>
          </div>
        </div>
      ))}
    </div>
   

    <div className='line' style={{ marginTop: '50px' }}>
    {/* Render the horizontal line */}
    <hr style={lineStyles} />
    </div>
    <p className='teamlead' >Business</p>
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="visible"
      animate={control}
    >
    <div className="image-gallery"style={{ marginTop: '20px' }} >
      {Business.map((member, index) => (
        <div key={index} className="gallery-item">
          <img
            src={member.image}
            alt={`Image ${index + 1}`}
            className="gallery-image"
          />
          <p className="member-name">{member.name}</p>
          <div className="social-icons">
            <a href={member.instagram} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="1x"/>
            </a>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="1x"/>
            </a>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
  </div>
  </div>

    
  )
}

export default Team