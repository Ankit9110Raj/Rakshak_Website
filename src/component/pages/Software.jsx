/*import React from 'react'
import Carousel from 'react-material-ui-carousel';
import "./Subsystem.css"
import software1 from "../../images/software1.png"
import software2 from "../../images/software2.jpeg"

const data = [
  software1,software2
]


export default function Software() {
  return (
    <>
    <div className='carasousel-subsystem'>
    <Carousel
        className="carasousel"
                autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        background: "#fff",
                        color: "#494949",
                        borderRadius: 0,
                        marginTop: -22,
                        height: "104px",
                        
                    }
                }}>
                {
                    data.map((imag, i) => {
                        return (
                            <>
                                <img src={imag} alt="img" key={i} className="banner_img" />
                            </>
                        )
                    })
                }

    </Carousel>
    </div>
    <p className='aero-text'>
    The Software subsystem is responsible for the onboard processing and analysis of the images collected during the mission. This includes identifying the potential targets, classifying them and geotagging them for future purpose.
     <p className='aerotext'>
    <span className="highlight-aero">The subsystem is categorised into: </span></p>

    <p className='aerotext'><span className="highlight-aero">Object detection and Classification: </span>Identifying the potential targets and classifying them with precision. The identified objects are then geotagged.</p>

   <p className='aerotext'> <span className="highlight-aero">Interoperability:</span> Responsible for autonomous update of detected targets to the server.</p>

    <p className='aerotext'> <span className="highlight-aero">Mapping: </span>Responsible for generating the map of the surveyed regions during the mission.</p>
    </p>
    
    </>
  )
}


/*<p className='soft-text'>
      The Software subsystem is responsible for the onboard processing and analysis of the images collected during the mission. This includes identifying the potential targets, classifying them and geotagging them for future purpose.
      
      <p className='heading-software'>The subsystem is categorised into:</p>
      <p className='software-text'> <span className='highlight-soft'>Object detection and Classification </span>- Identifying the potential targets and classifying them with precision. The identified objects are then geotagged.</p>
      <p className='software-text'> <span className='highlight-soft'>Interoperability </span>- Responsible for autonomous update of detected targets to the server</p>
      <p className='software-text'><span className='highlight-soft'>Mapping </span>- Responsible for generating the map of the surveyed regions during the mission.</p>
      </p>*/


import React from 'react'
import "./Subsystem.css";
import Carousel from 'react-material-ui-carousel';
import Aero1 from "../../images/aero1.jpeg";
import Aero2 from "../../images/aero2.png";
import Aero3 from "../../images/aero3.png";
import Aero4 from "../../images/aero4.png";


const data = [
  Aero1,Aero2,Aero3,Aero4
]


export default function Aero() {
  return (
    <>
    <div className='carasousel-subsystem'>
    <Carousel
        className="carasousel"
                autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        background: "#fff",
                        color: "#494949",
                        borderRadius: 0,
                        marginTop: -22,
                        height: "104px",
                        
                    }
                }}>
                {
                    data.map((imag, i) => {
                        return (
                            <>
                                <img src={imag} alt="img" key={i} className="banner_img" />
                            </>
                        )
                    })
                }

    </Carousel>
    </div>
    <p className='aero-text'>
    From conceptual design to building the large plane number of tasks are completed by the aerodynamics subsystem. Aerodynamics and manufacturing subsystem can be further subdivided into the following groups:
     <p className='aerotext'>
    <span className="highlight-aero">Aerodynamics: </span>All the CFD analysis required to meet the given performance requirements is carried out.</p>

    <p className='aerotext'><span className="highlight-aero">Structures: </span>CAD modelling and structural analysis of the plane body is done in this group.</p>

   <p className='aerotext'> <span className="highlight-aero">Payload:</span> Designing the payload deployment mechanism for the precise delivery of the freight.</p>

    <p className='aerotext'> <span className="highlight-aero">UGV: </span>Development of an unmanned ground vehicle to be deployed as a payload to carry the necessary goods to the exact location on the map.</p>
    </p>
    </>
  )
}
