
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

/*body {
    margin: 0;
    padding: 0;
     
  }

  .image-gallery-container {
    text-align: center;
    padding: 16px;
  }
  
  .image-gallery {
    display: flex;
    flex-wrap: wrap;
    padding-left:10%;
    padding-right: 10%;
    gap: 20px;
    justify-content: center;
    
  }
  
  .gallery-item {
    text-align: center;
    margin: 8px; 
    
    
  
    @media screen and (min-width: 320px) and (max-width: 480px) {
        max-width: 100%; 
      }
    
      @media screen and (min-width: 481px) {
        max-width: calc(25% - 16px); 
        
    }
    
    @media screen and (min-width: 769px) {
      max-width: calc(33.33% - 16px); 
      
    }
  
    @media screen and (min-width: 1025px) {
      max-width: calc(50% - 16px); 
    }
}

.gallery-item{
  text-align: center;
  margin: 8px; 

  @media screen and (max-width: 480px) {
    max-width: 100%;
  }

  @media screen and (min-width: 481px) {
    max-width: calc(33.33% - 16px); 
  }
}

.gallery-image {
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  border: 5px aqua;
  overflow: hidden;
  width: 100%; 
  max-height: 200px; 
}

.member-name {
  font-weight: bold;
  margin-top: 8px;
}

.social-icons {
  margin-top: 8px;
}

.social-icons a {
  color: #333;
  text-decoration: none;
  margin: 0 8px;
  font-size: 20px;
}

.social-icons a:hover {
  color: #0077b5;
}

.social-icons a:nth-child(2):hover {
  color: #e4405f;
}

.teamlead {
  font-size: 4vw; 
  border-bottom: 2px solid #000; 
  display: inline; 
  padding-bottom: 5px; 
}

.gallery-item:hover .gallery-image {
  transform: scale(1.1); 
  transition: transform 0.3s ease; 
} 

.gallery-item-three:hover .gallery-image{
  transform: scale(1.1); 
  transition: transform 0.3s ease; 
} 

.gallery-item {
  animation: slideIn 0.5s ease forwards;
  opacity: 0; 
} 

@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0); 
    opacity: 1; 
  }
}

.slide-in {
  animation: slideIn 0.5s ease forwards;
  opacity: 0;
}

.first{
 background-image: url('background2.jpeg'); 
background-size: cover;
background-position: center;
}*/

