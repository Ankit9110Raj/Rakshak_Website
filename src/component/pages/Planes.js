import React from 'react'
import "./Planes.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import StarIcon from '@mui/icons-material/Star'
import FlightIcon from '@mui/icons-material/Flight';
import PlanePic from "../../images/skywalker.jpg"
import sandy2 from "../../images/sandy2.0.jpeg"
import sandy from "../../images/sandy.jpeg"
import smokey from "../../images/smokey.jpeg"
import saeplane from "../../images/saeplane.jpeg"
import { motion } from 'framer-motion';

const Planes = () => {
  return (
    <>
    <div className='ourPlanes'>OUR PLANES</div>
    <motion.div
  initial={{ opacity: 0, scale: 0.5 }}
  animate={{ opacity: 1, scale: 1 }}
  exit={{ opacity: 0, scale: 0.5 }}
  transition={{ duration: 1 }}
>
  <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'lightblue', color: 'rgb(0 0 0)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(187 228 214)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FlightIcon />}
  >
    <h3 className="vertical-timeline-element-title">SKYWALKER</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <div className="responsive-image-container">
            <img
              src={PlanePic}
              alt="Plane"
              className="responsive-image"
            />
          </div>
    <p>
    Built in 2017, a recent addition to the Team's plane collection. Designed for the AUVSI-SUAS competition, the plane has an endurance of 30-40 minutes of completely autonomous operation of object detection and classification, interoperability, waypoint navigation, flight, take-off and landing. It has a take-off gross weight of 7.5Kgs with a cruise speed of 12 m/s.
    </p>
    <div style={{display:'flex'}}>
      <div className='specs'>
        <h4 style={{fontSize:'20px', fontWeight:'bolder',marginTop:'10px'}}>Wing Span</h4>
        <p style={{marginTop:'-5px'}}>14cm</p>
        </div>
      <div className='specs'>
        <h4 style={{fontSize:'20px', fontWeight:'bolder',marginTop:'10px'}}>Cruise Speed </h4>
        <p style={{marginTop:'-5px'}}>30kmph</p>
      </div>
      <div className='specs'>
        <h4 style={{fontSize:'20px', fontWeight:'bolder',marginTop:'10px'}}>Weight</h4>
        <p style={{marginTop:'-5px'}}>5kg</p>
      </div>
    </div>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(187 228 214)', color: 'rgb(0 0 0)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(187 228 214)' }}
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FlightIcon />}
  >
    <h3 className="vertical-timeline-element-title">Sandy 2.0</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
     <div className="responsive-image-container">
            <img
              src={sandy2}
              alt="Plane"
              className="responsive-image"
            />
          </div>
    <p>
    A variant of Sandy with the same role as Sandy 1.0 but with twin motors and a camera mounted at the front to test the image capture features and is one of the finest planes built in the team's history. It is a highly stable plane but has the capability of vertical loop, roll etc. manoeuvers when let loose, thanks to its twin motors. It has a gross take-off weight of 2.25 Kgs and a cruise speed of 12 m/s.
    </p>
    <div style={{display:'flex'}}>
      <div className='specs'>
        <h4 style={{fontSize:'20px', fontWeight:'bolder' ,marginTop:'10px'}}>Wing Span</h4>
        <p style={{marginTop:'-5px'}}>14cm</p>
        </div>
      <div className='specs'>
        <h4 style={{fontSize:'20px', fontWeight:'bolder',marginTop:'10px'}}>Cruise Speed </h4>
        <p style={{marginTop:'-5px'}}>30kmph</p>
      </div>
      <div className='specs'>
        <h4 style={{fontSize:'20px', fontWeight:'bolder',marginTop:'10px'}}>Weight</h4>
        <p style={{marginTop:'-5px'}}>5kg</p>
      </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(187 228 214)', color: 'rgb(0 0 0)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(187 228 214)' }}
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FlightIcon />}
  >
    <h3 className="vertical-timeline-element-title">Sandy</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
     <div className="responsive-image-container">
            <img
              src={sandy}
              alt="Plane"
              className="responsive-image"
            />
          </div>
    <p>
    A relatively small plane used for testing of individual components. It saw change in airfoil, from thin airfoil to thicker airfoil, compared to all predecessors. This plane was our first test dummy for autonomous flying and has provided excellent results to proceed autonomy to bigger plane.
    </p>
    <div style={{display:'flex'}}>
      <div className='specs'>
        <h4 style={{fontSize:'20px', fontWeight:'bolder',marginTop:'10px'}}>Wing Span</h4>
        <p style={{marginTop:'-5px'}}>14cm</p>
        </div>
      <div className='specs'>
        <h4 style={{fontSize:'20px', fontWeight:'bolder',marginTop:'10px'}}>Cruise Speed </h4>
        <p style={{marginTop:'-5px'}}>30kmph</p>
      </div>
      <div className='specs'>
        <h4 style={{fontSize:'20px', fontWeight:'bolder',marginTop:'10px'}}>Weight</h4>
        <p style={{marginTop:'-5px'}}>5kg</p>
      </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(187 228 214)', color: 'rgb(0 0 0)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(187 228 214)' }}
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FlightIcon />}
  >
    <h3 className="vertical-timeline-element-title">Smokey</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
     <div className="responsive-image-container">
            <img
              src={smokey}
              alt="Plane"
              className="responsive-image"
            />
          </div>
    <p>
    Built in 2015, this plane was the first to have the capability of an autonomous system ingrained within. It was designed for the AUVSI competition in the year 2015. It has a gross take-off weight of 5 Kgs and a cruise speed of 12 m/s.
    </p>
    <div style={{display:'flex'}}>
      <div className='specs'>
        <h4 style={{fontSize:'20px', fontWeight:'bolder',marginTop:'10px'}}>Wing Span</h4>
        <p style={{marginTop:'-5px'}}>14cm</p>
        </div>
      <div className='specs'>
        <h4 style={{fontSize:'20px', fontWeight:'bolder',marginTop:'10px'}}>Cruise Speed </h4>
        <p style={{marginTop:'-5px'}}>30kmph</p>
      </div>
      <div className='specs'>
        <h4 style={{fontSize:'20px', fontWeight:'bolder',marginTop:'10px'}}>Weight</h4>
        <p style={{marginTop:'-5px'}}>5kg</p>
      </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(187 228 214)', color: 'rgb(0 0 0)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(187 228 214)' }}
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FlightIcon />}
  >
    <h3 className="vertical-timeline-element-title">Saeplane</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
     <div className="responsive-image-container">
            <img
              src={saeplane}
              alt="Plane"
              className="responsive-image"
            />
          </div>
    <p>
    Built in 2015, this plane represented our team in SAE-2015 competition. A stable, robust and payload efficient plane, it allowed us to win 7th place in design and 12th place overall. It has an empty weight of 4.5 Kgs and lifted a payload of 2 Kgs.
    </p>
    <div style={{display:'flex'}}>
      <div className='specs'>
        <h4 style={{fontSize:'20px', fontWeight:'bolder',marginTop:'10px'}}>Wing Span</h4>
        <p style={{marginTop:'-5px'}}>14cm</p>
        </div>
      <div className='specs'>
        <h4 style={{fontSize:'20px', fontWeight:'bolder',marginTop:'10px'}}>Cruise Speed </h4>
        <p style={{marginTop:'-5px'}}>30kmph</p>
      </div>
      <div className='specs'>
        <h4 style={{fontSize:'20px', fontWeight:'bolder',marginTop:'10px'}}>Weight</h4>
        <p style={{marginTop:'-5px'}}>5kg</p>
      </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(187 228 214)', color: 'rgb(0 0 0)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(187 228 214)' }}
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FlightIcon />}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <div className="responsive-image-container">
            <img
              src={PlanePic}
              alt="Plane"
              className="responsive-image"
            />
          </div>
    <p>
    Built in 2017, a recent addition to the Team's plane collection. Designed for the AUVSI-SUAS competition, the plane has an endurance of 30-40 minutes of completely autonomous operation of object detection and classification, interoperability, waypoint navigation, flight, take-off and landing. It has a take-off gross weight of 7.5Kgs with a cruise speed of 12 m/s.
    </p>
    <div style={{display:'flex'}}>
      <div className='specs'>
        <h4 style={{fontSize:'20px', fontWeight:'bolder',marginTop:'10px'}}>Wing Span</h4>
        <p style={{marginTop:'-5px'}}>14cm</p>
        </div>
      <div className='specs'>
        <h4 style={{fontSize:'20px', fontWeight:'bolder',marginTop:'10px'}}>Cruise Speed </h4>
        <p style={{marginTop:'-5px'}}>30kmph</p>
      </div>
      <div className='specs'>
        <h4 style={{fontSize:'20px', fontWeight:'bolder',marginTop:'10px'}}>Weight</h4>
        <p style={{marginTop:'-5px'}}>5kg</p>
      </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(187 228 214)', color: 'rgb(0 0 0)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(187 228 214)' }}
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FlightIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <div className="responsive-image-container">
            <img
              src={PlanePic}
              alt="Plane"
              className="responsive-image"
            />
          </div>
    <p>
    Built in 2017, a recent addition to the Team's plane collection. Designed for the AUVSI-SUAS competition, the plane has an endurance of 30-40 minutes of completely autonomous operation of object detection and classification, interoperability, waypoint navigation, flight, take-off and landing. It has a take-off gross weight of 7.5Kgs with a cruise speed of 12 m/s.
    </p>
    <div style={{display:'flex'}}>
      <div className='specs'>
        <h4 style={{fontSize:'20px', fontWeight:'bolder',marginTop:'10px'}}>Wing Span</h4>
        <p style={{marginTop:'-5px'}}>14cm</p>
        </div>
      <div className='specs'>
        <h4 style={{fontSize:'20px', fontWeight:'bolder',marginTop:'10px'}}>Cruise Speed </h4>
        <p style={{marginTop:'-5px'}}>30kmph</p>
      </div>
      <div className='specs'>
        <h4 style={{fontSize:'20px', fontWeight:'bolder',marginTop:'10px'}}>Weight</h4>
        <p style={{marginTop:'-5px'}}>5kg</p>
      </div>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  />
</VerticalTimeline>
</motion.div>
    </>
  );
};


export default Planes



