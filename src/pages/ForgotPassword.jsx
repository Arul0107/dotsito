import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { Link } from 'react-router-dom'; // For navigation
import '../css/LoginPage.css';

const { Title, Text } = Typography;

const ForgotPassword = () => {
  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <Title level={2} className="forgot-password-title">Forgot Your Password?</Title>
        <Text className="forgot-password-subtitle">Enter your email to receive a reset link.</Text>
        <Form
          name="forgot-password-form"
          className="forgot-password-form"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input placeholder="Email" className="input-field" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="forgot-password-button">
              Send Reset Link
            </Button>
          </Form.Item>
        </Form>

        <div className="extra-links">
          <Link to="/login">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
