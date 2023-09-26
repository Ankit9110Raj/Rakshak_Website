import React from 'react'
import Carousel from 'react-material-ui-carousel';
import "./Subsystem.css"
import Control1 from "../../images/controls1.jpeg"
import Control2 from "../../images/controls2.png"
import Control3 from "../../images/controls3.png"
import Control4 from "../../images/controls4.png"

const data = [Control1,Control2,Control3,Control4]



export default function Controls() {
  return (
    <>
    <div className='carasousel-controls'>
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

    <p className='control-text'>
      <p>
      The subsystem conducts regular tests for sensor calibration and adjusting the gains of the controller. The UAV is given various flight paths during the test to assess the performance of the UAV and accordingly modify the control parameters to achieve acceptable performance. The flight path is developed using path planning algorithms to avoid pre-identified obstacles. Communication is responsible for proper communication between plane & ground control station and interoperability, i.e., autonomous collection of mission plan data from a remote server and upload of collected data to the server.
      </p>
      <p>The aim of this subsystem is to achieve the following for the UAV:</p>
      <p>
      Autonomous Navigation - based on MAVLink protocol<br/>
      Autonomous Takeoff<br/>
      Autonomous Landing<br/>
      Obstacle Avoidance - Stationary and Moving<br/>
      Uninterrupted Communication - Communication between UAV and Ground Station, Server Communication
      </p>
    </p>
    </>
  )
}
