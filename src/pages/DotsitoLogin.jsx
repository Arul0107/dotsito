import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../css/LoginPage.css'; // Add your custom styles for the login page
import loginlogo from '../assets/img/logo.png';

const { Title, Text } = Typography;

const DotsitoLogin = () => {
  const [greeting, setGreeting] = useState(''); // State for dynamic greeting

  // Determine the time of day to set an appropriate greeting
  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  return (
    <div className="login-page">
      {/* Left Side with Welcome and Logo */}
      <div className="login-left">
        <div className="welcome-section">
          <Title level={2} className="welcome-title">Welcome Page</Title>
          <Text className="welcome-subtitle">Sign In to Your Account</Text>
          <div className="login-logo">
            <img src={loginlogo} alt="Dotsito Logo" className='login-logo' />
            <span className='brand-name'>Dotsito</span>
          </div>
          <div className="brand-text">www.yoursite.com</div>
        </div>
      </div>

      {/* Right Side with Login Form */}
      <div className="login-right">
        <div className="login-container">
          <Title level={2} className="login-title">
            Hello! <br /> {greeting}
          </Title>
          <Text className="login-subtitle">
            Login to Your Account
          </Text>
          <Form
            name="login-form"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your Email!' }]}
            >
              <Input placeholder="Email Address" className="input-field" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input.Password placeholder="Password" className="input-field" />
            </Form.Item>

            <div className="login-options">
              <Form.Item name="remember" valuePropName="checked">
                <Input type="checkbox" /> Remember
              </Form.Item>
              <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
            </div>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-button">
                SUBMIT
              </Button>
            </Form.Item>

            <div className="create-account">
              <Text>Don't have an account? <Link to="/signup">Create Account</Link></Text>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default DotsitoLogin;
