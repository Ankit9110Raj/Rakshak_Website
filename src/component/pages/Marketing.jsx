import React from 'react'
import "./Subsystem.css";
import Carousel from 'react-material-ui-carousel';
import marketing1 from "../../images/marketing1.jpeg";

const data = [
  marketing1
]

export default function Marketing() {
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
                        paddingLeft:'40%',
                        paddingRight:'40%'
                        
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

    Marketing Subsystem Deals with the all non-technical work like design, publicity, bringing the sponsors for the team, handling accounts and logistics of our team. The current sponsor for the team is Boeing (from the Aerospace Department). This subsystem is responsible for :
    

    <p className='aerotext'><span className="highlight-aero">Monetary association with sponsors </span></p>
    <p className='aerotext'><span className="highlight-aero"> Technical association with leading industries</span></p>
    <p className='aerotext'><span className="highlight-aero"> Overseeing outside vendors and agencies</span></p>
    <p className='aerotext'><span className="highlight-aero"> Publicise the team on every social media account</span></p>
    <p className='aerotext'><span className="highlight-aero">Design & Graphics related work of the team </span></p>
    </p>
    
    
    </>
  )
}
