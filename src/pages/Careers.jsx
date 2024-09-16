import React, { useState } from 'react';
import { Typography, Button, Card, Row, Col } from 'antd';
import '../css/Careers.css'; // Ensure correct CSS path
import JobModal from "../components/JobModal";
import HireSection from "../components/HireSection"; // Reusable component
import account from '../assets/img/job-img/account.png'
import web from '../assets/img/job-img/web.png'
import react from '../assets/img/job-img/react.png'
import servicenow from '../assets/img/job-img/service.png'
import GraduateCareersSection from '../components/GraduateCareersSection';
import Footer from '../components/Footer';
const { Title, Text } = Typography;

const Careers = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const showModal = (job) => {
    setSelectedJob(job);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setSelectedJob(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedJob(null);
  };

  const jobData = [
    {
      title: "Chartered Accountant",
      company: "Futures and Careers",
      location: "Erode",
      posted: "16 hours ago",
      description: "Full job description goes here for Chartered Accountant...",
      image:account , // Image URL here
    },
    {
      title: "Web Developer",
      company: "Tech Solutions",
      location: "Bangalore",
      posted: "3 days ago",
      description: "Looking for a skilled Web Developer with 2+ years of experience...",
      image:web , // Image URL here
    },
    {
      title: "React JS Developer",
      company: "Innovatech",
      location: "Remote",
      posted: "1 week ago",
      description: "React JS Developer needed with 3+ years of experience...",
      image:react, // Image URL here
    },
    {
      title: "ServiceNow Developer",
      company: "CloudWorks",
      location: "Hyderabad",
      posted: "2 weeks ago",
      description: "Experienced ServiceNow Developer proficient in SNOW tools...",
      image:servicenow, // Image URL here
    },
  ];

  return (
    <div className="careers-page">
      {/* Header Section */}
      <section className="careers-banner">
        <div className="career-inner ">
          <Title level={1} className="heading-xl" style={{ color: '#fff' }}>
            Find your Best Careers
          </Title>
          <Text className="paragraph" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Be a part of a dynamic and innovative team that is shaping the future of technology.
          </Text><br />
          <div className="">
            <Button type="primary" size="large" className="btn btn-darken">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="job-listings">
        <div className="container">
          <Title level={2} className="section-title">
            Current Openings
          </Title>
          <Row gutter={[16, 16]}>
            {jobData.map((job, index) => (
              <Col key={index} xs={24} sm={12} md={8}>
                <Card
                  hoverable
                  cover={<img alt={job.title} src={job.image} />}
                  title={job.title}
                >
                  <Text>Company: {job.company}</Text><br />
                  <Text>Location: {job.location}</Text><br />
                  <Text>Posted: {job.posted}</Text><br />
                  <Button type="primary" onClick={() => showModal(job)}>
                    View Details
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Job Modal */}
      <JobModal
        job={selectedJob}
        isVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />   
      <GraduateCareersSection/>
      <HireSection />
      <Footer />
    </div>
  );
};

export default Careers;
