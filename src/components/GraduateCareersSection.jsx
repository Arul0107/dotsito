import React from 'react';
import { Typography } from 'antd';
import '../css/Careers.css'; // Add relevant styling in this file

const { Title, Text } = Typography;

const GraduateCareersSection = () => {
  

  return (
    
    <section className="graduate-careers">
      <div className="container">
        <div className="video-section">
          <div className="text-content">
            <Title level={2}>Graduate Careers at Dotsito</Title>
            <Text>
              Meet our recent campus joiners and see how they are embracing change to drive innovative solutions for our clients and communities.
              They share their candid experiences of working at the heart of change, getting all the scope to take their careers to the next level.
            </Text>
            <div className="transcript-link">
              <a href="#">View Transcript</a>
            </div>
          </div>
          <iframe className='vedio'
            width="560"
            height="315"
            src="https://www.youtube.com/embed/unX8MRN3y_A?si=s9JWMFLV2N9DJ3nP"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>        </div>
      </div>
    </section>
  );
};

export default GraduateCareersSection;
