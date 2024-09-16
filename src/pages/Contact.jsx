import React from "react";
import { Form, Input, Button, Row, Col, Typography } from "antd";
import "../css/Contact.css";
import Footer from "../components/Footer";

const { Title, Text } = Typography;

const Contact = () => {
  const onFinish = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <div className="contact-page">
      {/* Banner Section */}
      <section className="contact-banner">
        <div className="banner-content">
          <Title level={1} className="banner-title">
            Get in Touch with Us
          </Title>
          <Text className="banner-text">
            We'd love to hear from you! Reach out to our team for any queries,
            feedback, or support.
          </Text>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Title level={2} className="form-title">
                Send Us a Message
              </Title>
              <Form layout="vertical" onFinish={onFinish}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: "Please enter your name" }]}
                >
                  <Input placeholder="Your Name" />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: "Please enter your email" }]}
                >
                  <Input placeholder="Your Email" />
                </Form.Item>
                <Form.Item
                  label="Message"
                  name="message"
                  rules={[{ required: true, message: "Please enter your message" }]}
                >
                  <Input.TextArea rows={5} placeholder="Your Message" />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form>
            </Col>

            <Col xs={24} md={12}>
              <div className="contact-info">
                <Title level={3}>Contact Information</Title>
                <Text>Email: contact@dotsito.com</Text>
                <br />
                <Text>Phone: +1 (123) 456-7890</Text>
                <br />
                <Text>Address: 123 Innovation Blvd, Suite 500</Text>

                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.590416366053!2d77.56384557509173!3d10.994256389168129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba99900755c1513%3A0x6fb5de480a85caca!2sDotsito%20Technologies!5e0!3m2!1sen!2sin!4v1726370596899!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
