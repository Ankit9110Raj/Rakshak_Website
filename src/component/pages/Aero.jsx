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
    
    <Carousel
        className="carasousel-subsystem"
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
                                <img src={imag} alt="img" key={i} className="bannerimg" />
                            </>
                        )
                    })
                }

    </Carousel>
    
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
