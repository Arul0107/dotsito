import React, { useEffect } from 'react';
import AOS from 'aos'; // AOS for scroll animations
import 'aos/dist/aos.css'; // Import AOS styles
import '@fortawesome/fontawesome-free/css/all.min.css'; // FontAwesome for icons
import "../css/ServiceNowHome.css"; // Your custom CSS

const ServiceNowHome = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div className="container text-center ser">
      <h1 data-aos="fade-up">Why ServiceNow for Your Enterprise Needs?</h1>
      <p className="subtitle" data-aos="fade-up" data-aos-delay="200">
        Discover the advantages of choosing ServiceNow's platform for optimizing your enterprise.
      </p>

      <div className="features-grid">
        <div className="feature-item" data-aos="fade-up" data-aos-delay="300">
          <i className="fas fa-cogs"></i>
          <p>Enhanced Workflow Automation</p>
        </div>
        <div className="feature-item" data-aos="fade-up" data-aos-delay="400">
          <i className="fas fa-chart-line"></i>
          <p>Personalized Dashboards for Tailored Insights</p>
        </div>
        <div className="feature-item" data-aos="fade-up" data-aos-delay="500">
          <i className="fas fa-tools"></i>
          <p>Tailored Solutions for Unique Requirements</p>
        </div>
        <div className="feature-item" data-aos="fade-up" data-aos-delay="600">
          <i className="fas fa-exclamation-triangle"></i>
          <p>Integrated Incident and Problem Management</p>
        </div>
        <div className="feature-item" data-aos="fade-up" data-aos-delay="700">
          <i className="fas fa-database"></i>
          <p>Enrich and Centralize Existing Data</p>
        </div>
        <div className="feature-item" data-aos="fade-up" data-aos-delay="800">
          <i className="fas fa-file-export"></i>
          <p>Seamless Data Export</p>
        </div>
      </div>

      <div className="cta-button" >
        <button>Learn More...</button>
      </div>
    </div>
  );
};

export default ServiceNowHome;
