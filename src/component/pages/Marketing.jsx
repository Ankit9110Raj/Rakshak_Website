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
    <div className='carasousel-aero'>
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

    <p className='marketing-text'>

    Marketing Subsystem Deals with the all non-technical work like design, publicity, bringing the sponsors for the team, handling accounts and logistics of our team. The current sponsor for the team is Boeing (from the Aerospace Department). This subsystem is responsible for :
    </p>
    <p>Monetary association with sponsors<br/>
    Technical association with leading industries<br/>
    Overseeing outside vendors and agencies<br/>
    Publicise the team on every social media account<br/>
    Design & Graphics related work of the team
    </p>
    </>
  )
}
