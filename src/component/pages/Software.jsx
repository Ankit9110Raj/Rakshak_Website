import React from 'react'
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
    <div className='carasousel-soft'>
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

    <p className='soft-text'>
      <p>The Software subsystem is responsible for the onboard processing and analysis of the images collected during the mission. This includes identifying the potential targets, classifying them and geotagging them for future purpose.</p>
      </p>
      <p>The subsystem is categorised into:</p>
      <p>Object detection and Classification- Identifying the potential targets and classifying them with precision. The identified objects are then geotagged.</p>
      <p>Interoperability - Responsible for autonomous update of detected targets to the server</p>
      <p>Mapping - Responsible for generating the map of the surveyed regions during the mission.</p>
    </>
  )
}
