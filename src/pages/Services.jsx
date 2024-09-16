import React from "react";
import { Typography, Button, Row, Col, Card } from "antd";
import "../css/Services.css"; // Import your custom CSS
import fG from "../assets/img/5G.png";
import erp from "../assets/img/enterprice-card.jpg";
import dev from "../assets/img/dev.png";
import gov from "../assets/img/Governance-Risk-and-Compliance-card.jpg";
import itam from "../assets/img/itam.png";
import qa from "../assets/img/qa-card.jpeg";

const { Title, Text } = Typography;

const Services = () => {
  return (
    <div className="services-page">
      {/* Banner Section */}
      <section className="services-banner text-left">
        <div className="banner-overlay">
          <Row>
            <Col xs={24} md={12}>
              <div className="banner-content">
                <Title level={1} className="service-title mt-5">
                  Our Premium Services
                </Title>
                <Text className="service-text left-1">
                  We provide a range of cutting-edge services designed to meet
                  your business needs.
                </Text>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Services Content Section */}
      <section className="services-content text-center container">
        <Title level={2}>Our Expertise</Title>
        <Text>
          Explore our range of services designed to help your business succeed.
        </Text>

        {/* Service Cards */}
        <Row gutter={[16, 16]} className="mt-5 ">
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              className="service-card"
              cover={<img alt="Enterprise Service" src={erp} />}
            >
              <Title level={4}>Enterprise Service Management</Title>
              <Text>
                Experience the direct advantage of cost-savings and operational
                innovation through Dotsito ESM. With our in-depth prowess over
                ServiceNow platform, you can organize all relevant business
                processes and enable digitalization for internal IT systems,
                employees and customers.
              </Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              className="service-card"
              cover={<img alt="DevOps" src={erp} />}
            >
              <Title level={4}>DevOps and Infra Automation</Title>
              <Text>
                Eradicate all silos by integrating development and operations
                activities to elevate organizational productivity. Dotsito’
                DevOps integration is based on automating infrastructure and
                workflows with integrated CI-CD tool chain and change automation
                to minimize time to market.
              </Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              className="service-card"
              cover={<img alt="IT Security" src={dev} />}
            >
              <Title level={4}>IT Security Services</Title>
              <Text>
                Neutralize all security threats by agile detection, mapping,
                ServiceNow Security Operations brings incident data from your
                security tools into a structured response engine that uses
                intelligent workflows, automation, and a deep connection with IT
                to prioritize and resolve threats based on the impact.
              </Text>
            </Card>
          </Col>
          {/* 3 */}
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              className="service-card"
              cover={<img alt="Enterprise Service" src={gov} />}
            >
              <Title level={4}>Governance, Risk, and Compliance (GRC)</Title>
              <Text>
                Dotsito Technologies GRC helps integrate IT and organizational
                processes. It transforms inefficient processes across the
                enterprise into an integrated risk program through continuous
                monitoring and automation. GRC applications deliver a real-time
                view of compliance and risk and improve decision making.
              </Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              className="service-card"
              cover={<img alt="DevOps" src={itam} />}
            >
              <Title level={4}> IT Asset Management (ITAM)</Title>
              <Text>
                Eradicate silos by integrating development and operations
                activities to improve productivity.
              </Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              className="service-card"
              cover={<img alt="IT Security" src={qa} />}
            >
              <Title level={4}>QA and Testing</Title>
              <Text>
                Software Quality and Testing helps Web and Mobile applications
                through software tools. We are proficient in Security &
                Vulnerability, Performance, Compatibility, API, Database &
                Interface. We also provide Cloud, Globalisation, Localisation,
                and Accessibility Testing to ensure efficient and effective test
                coverage.
              </Text>
            </Card>
          </Col>
        {/* 6 */}
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              className="service-card"
              cover={<img alt="DevOps" src={fG} />}
            >
              <Title level={4}>ServiceNow Support</Title>
              <Text>
                Prevent service outages by gaining visibility into IT
                infrastructure and applications, event correlation to reduce NOC
                workload, actionable operational intelligence and cloud
                insights.
              </Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              className="service-card"
              cover={<img alt="IT Security" src={fG} />}
            >
              <Title level={4}>IT Asset Management (ITAM)</Title>
              <Text>
                Drive full lifecycle tracking and visibility into hardware
                assets and software licenses with costs, processes and data on a
                single platform.
              </Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              className="service-card"
              cover={<img alt="IT Security" src={fG} />}
            >
              <Title level={4}>Jira Implementation Support</Title>
              <Text>
                Enhance productivity with seamless JIRA implementation tailored
                to your business needs. We provide configuration, data
                migration, process automation, and integrations with other tools
                to streamline workflows and boost efficiency. Our experts ensure
                smooth onboarding and ongoing support to maximize the value of
                your JIRA environment.
              </Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              className="service-card"
              cover={<img alt="IT Security" src={fG} />}
            >
              <Title level={4}>GenAI Dynamics</Title>
              <Text>
                Leverage the power of generative AI with our specialized tooling
                implementations. We assist in deploying advanced AI models,
                integrating them seamlessly with your existing systems, and
                customizing them to fit your specific needs. Our services
                enhance content creation, automate processes, and drive
                innovation across various business functions, ensuring ongoing
                support and optimization for maximum efficiency.
              </Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              className="service-card"
              cover={<img alt="IT Security" src={fG} />}
            >
              <Title level={4}>Confluence Integration and Support</Title>
              <Text>
                Transform your team's workflow with our expert Confluence
                integration and support. We enhance document management,
                knowledge sharing, and project collaboration by seamlessly
                integrating Confluence with your existing systems. Benefit from
                tailored setup, continuous support, and improved productivity
                through seamless information exchange across your organization.
              </Text>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              hoverable
              className="service-card"
              cover={<img alt="IT Security" src={fG} />}
            >
              <Title level={4}>
                Next-Gen Object Detection and Categorization Suite
              </Title>
              <Text>
                Enhance operational intelligence with our cutting-edge machine
                learning solution. Achieve precise, real-time object detection
                and categorization across multiple camera feeds, seamlessly
                integrating with your systems to optimize efficiency, inventory
                management, and quality control
              </Text>
            </Card>
          </Col>
        </Row>
       
       
      </section>
    </div>
  );
};

export default Services;
