import React from 'react'

// import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Competition.css"
import Youth from "../../images/Youth.gif"
import Sih from "../../images/sih.gif"
import Auvsi from "../../images/auvsi.gif"

const Competition = () => {
  return (
    
    <>
    <div className='competition'>Targated Competition</div>

    <div className="container-c" style={{ marginTop: '20px' }}>
   <div className="text-even" >
   <h2 className="/">Air Cargo Challenge</h2>
        <p>The Air Cargo Challenge (ACC) is a competition aimed at engineering students.
          It was created to excite students for aviation and to experience the challenges of an engineering task.
          Within one year, an unmanned aircraft is designed and built to compete against other teams from all over the world.</p>
      </div>
      <div className="image-c">
        <img
          src={Sih}
          alt="Image1"
          className="responsive-image"
        />
      </div>  
    </div>

    <div className="container-c">
      <div className="image-c">
        <img
          src={Auvsi}
          alt="Image1"
          className="responsive-image"
          style={{maxwidth: '100%',
            width: 'auto', height:'500px'}}
        />
      </div>  
      <div className="text">
      <h2 className="/">AUVSI SUAS</h2>
        <p>The AUVSI SUAS Competition is designed to foster interest in Unmanned Aerial Systems (UAS), stimulate interest in UAS technologies and careers, and to engage students in a challenging UAS mission. The competition requires students to design, integrate, report on, and demonstrate a UAS capable of autonomous flight and navigation, remote sensing via onboard payload sensors, and execution of a specific set of tasks.</p>
      </div>
    </div>

    <div className="container-c" style={{ marginTop: '20px' }}>
   <div className="text-even">
   <h2 className="/">Smart India Hackathon</h2>
        <p>Smart India Hackathon is a nationwide initiative to provide students with a platform to solve some of the pressing problems which we face in our daily lives, and thus inculcate a culture of product innovation and a mindset of problem-solving and to promote innovation out-of-the-box thinking in young minds, especially engineering students from across India.</p>
      </div>
      <div className="image-c">
        <img
          src={Sih}
          alt="Image1"
          className="responsive-image"
        />
      </div>  
    </div>

    <div className="container-c" style={{ marginTop: '20px' }}>
      <div className="image-c">
        <img
          src={Youth}
          alt="Image1"
          className="responsive-image"
          style={{maxwidth: '100%',
            width: 'auto', height:'340px'}}
        />
      </div>  
      <div className="text">
        <h2 className="/">Youth Conclave</h2>

        <p>The Youth Conclave is an initiative of the Indian National Academy of Engineering, In which engineering students from all over the country and INAE Fellows participated in the deliberation. The Competition requires student groups to prepare a complete report on the problem statement chosen by them and to arrive at a detailed case study with a well-developed strategy to solve the problem.</p>
      </div>
    </div>

    

    
    </>    
    
  )
}

export default Competition