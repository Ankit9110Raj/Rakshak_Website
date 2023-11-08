import React from 'react';
import Carousel from 'react-material-ui-carousel';
import './Home.css';
//import background1 from "../../images/background1.jpeg";

const data = [
    "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
    " https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
    "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
]

const backgroundStyle = {
  backgroundImage: `url(${require('./background1.jpeg')})`, 
  backgroundSize: 'cover', 
  backgroundRepeat: 'no-repeat', 
  backgroundAttachment: 'fixed', 
};


const Home = () =>{
  return (
    <div className="Apps" style={backgroundStyle}>
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
                        borderRadius:50,
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
    <div className="centered-container-home">
      <p className="tagline">A mile of highway will take you a mile but a mile of runway can take you anywhere</p>
    </div>
    <div className="paragraph-container-home">
    <p className="about">About Us</p>
        <p className="responsive-paragraph">Rakshak IITB is the official team of IIT Bombay consisting of 40+ students from various disciplines who work collaboratively to develop a fleet of robust Unmanned Aerial Vehicles (UAVs) to support Search and Rescue Operations (SRO) in the event of a disaster. The team was formed in the year 2015 by some of the IITB enthusiasts to build drones/planes that can be used for rescue missions. These aircraft can provide relief measures in the disaster-stricken area (e.g., Landslide, Flood, Earthquake) and can be used for surveys & mapping of cities and conservation of wildlife with slight modifications. Our design efficiently tackles the above problems cost-effectively without compromising on human safety.
        As of now, we have developed five planes. Each year we are trying to stretch our limits by our innovation and teamwork. We would also like to thank IITB for supporting us and providing the platform to showcase our talent at the international level.</p>
    </div>
   

   
    
    

    

    

    <div className="video-container">
      <iframe
        title="YouTube Video"
        src="https://www.youtube.com/embed/wG5wcbJa85s"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="responsive-iframe"
      ></iframe>
    </div>

    </div>
  )
}

export default Home