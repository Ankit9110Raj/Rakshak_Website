import React from 'react'
import "./Planes.css"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import StarIcon from '@mui/icons-material/Star'
import FlightIcon from '@mui/icons-material/Flight';
import PlanePic from "../../images/skywalker.jpg"

const Planes = () => {
  return (
    <>
    <div className='ourPlanes'>OUR PLANES</div>
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(187 228 214)', color: 'rgb(0 0 0)' }}
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
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
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
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
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
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FlightIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
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
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FlightIcon />}
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
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
    </>
  );
};


export default Planes