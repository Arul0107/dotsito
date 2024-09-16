import React from "react";
import { Card, Row, Col, Typography } from "antd";
import '../css/ProductSection.css'; // Custom CSS for styling

import DotSpotImage from '../assets/img/accu.png'; // Correct image path for Dot Spot
import RecruitmentImage from '../assets/img/ban.png'; // Correct image path for Recruitment Portal
import CustomerServiceImage from '../assets/img/buliding.png'; // Correct image path for Customer Service Portal

const { Title, Text } = Typography;

const ProductSection = () => {
  const products = [
    {
      id: 1,
      title: "Dot Spot",
      description: "Using AI object detection for better performance and accuracy.",
      image: DotSpotImage,
      link: "#", // Replace with the actual link for this product
    },
    {
      id: 2,
      title: "Recruitment Portal",
      description: "A portal designed to streamline the hiring process for companies.",
      image: RecruitmentImage,
      link: "#", // Replace with the actual link for this product
    },
    {
      id: 3,
      title: "Customer Service Portal",
      description: "Optimized portal to enhance customer service operations.",
      image: CustomerServiceImage,
      link: "#", // Replace with the actual link for this product
    },
 
  ];

  return (
    <div className="product-section">
      <Title level={2} className="product-title">Our company product Products</Title>
      <div className="product-container">
        <Row gutter={[16, 24]} justify="center" className="product-grid">
          {products.map((product) => (
            <Col xs={24} sm={12} md={8} key={product.id}>
              <Card
                hoverable
                cover={<img alt={product.title} src={product.image} className="product-image" />}
                className="product-card"
              >
                <Card.Meta
                  title={<Title level={4} className="product-card-title">{product.title}</Title>}
                  description={
                    <>
                      <Text className="product-description">{product.description}</Text>
                      <a href={product.link} className="read-more">Read More &gt;</a>
                    </>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ProductSection;
