import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { Link } from 'react-router-dom'; // For navigation
import '../css/LoginPage.css';

const { Title, Text } = Typography;

const SignUp = () => {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <Title level={2} className="signup-title">Create Your Account</Title>
        <Text className="signup-subtitle">Join us today and explore all the possibilities!</Text>
        <Form
          name="signup-form"
          className="signup-form"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input placeholder="Email" className="input-field" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password placeholder="Password" className="input-field" />
          </Form.Item>

          <Form.Item
            name="confirm-password"
            rules={[{ required: true, message: 'Please confirm your Password!' }]}
          >
            <Input.Password placeholder="Confirm Password" className="input-field" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="signup-button">
              Sign Up
            </Button>
          </Form.Item>
        </Form>

        <div className="extra-links">
          <Text>Already have an account? <Link to="/login">Login</Link></Text>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
