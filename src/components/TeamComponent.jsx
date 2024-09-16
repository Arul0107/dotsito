import React from 'react';
import { Row, Col, Typography } from 'antd';
import '../css/team-section.css';
import ser1 from '../assets/img/service.png'; // Example image import

const { Title, Text } = Typography;

const TeamSection = () => {
  return (
    <div className="team-section container">
      <Row gutter={[16, 24]} justify="center" className="team-grid">
        {/* Left Side with Text and Icons */}
        <Col xs={24} sm={24} md={12}>
          <Title level={2} className="team-title">
            Data for Your Entire Team
          </Title>
          <Text className="team-intro">
            Whether you're managing a startup, a multi-million-dollar
            enterprise, or working as a sales rep, marketer, or recruiter, our
            team helps you reach your goals. Each team plays a crucial role in
            ensuring smooth operations and delivering quality solutions.
          </Text>

          <div className="features-container">
            <div className="feature-item">
              <i className="fas fa-user-tie feature-icon"></i>
              <div>
                <Title level={4} className="feature-title">HR Team</Title>
                <Text className="feature-text">Manages recruitment and employee relations.</Text>
              </div>
            </div>

            <div className="feature-item">
              <i className="fas fa-code feature-icon"></i>
              <div>
                <Title level={4} className="feature-title">Developer Team</Title>
                <Text className="feature-text">Builds and maintains our technical solutions.</Text>
              </div>
            </div>

            <div className="feature-item">
              <i className="fas fa-user-shield feature-icon"></i>
              <div>
                <Title level={4} className="feature-title">ServiceNow Developer</Title>
                <Text className="feature-text">Optimizes and supports our ServiceNow platform.</Text>
              </div>
            </div>

            <div className="feature-item">
              <i className="fas fa-tools feature-icon"></i>
              <div>
                <Title level={4} className="feature-title">Snow Tool Team</Title>
                <Text className="feature-text">Leverages advanced tools to ensure compliance and support.</Text>
              </div>
            </div>
          </div>
        </Col>

        {/* Right Side with Image */}
        <Col xs={24} sm={24} md={12} className="team-image-container">
          <img src={ser1} alt="Team" className="team-image" />
        </Col>
      </Row>
    </div>
  );
};

export default TeamSection;
