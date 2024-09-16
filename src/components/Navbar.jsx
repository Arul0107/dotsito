import React, { useState } from 'react';
import { Menu, Dropdown, Drawer, Button } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from '../assets/img/logo.png';
import ExampleImage from '../assets/img/logo.png';
import '../css/Navbar.css';

function Navbar() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  // About Dropdown Menu
  const aboutMenu = (
    <div className="split-dropdown-content container">
      <div className="left-side">
        <Menu>
          <Menu.Item key="1"><Link to="/about">Who We Are</Link></Menu.Item>
          <Menu.Item key="2"><Link to="#">Our Leadership</Link></Menu.Item>
          <Menu.Item key="3"><Link to="#">Life @ Dotsito</Link></Menu.Item>
          <Menu.Divider />
          <Menu.Item key="4"><Link to="#">Learning</Link></Menu.Item>
        </Menu>
      </div>
      <div className="right-side">
        <img src={ExampleImage} alt="Example" className="dropdown-image" />
        <div className="dropdown-text">Why Choose Us?</div>
      </div>
    </div>
  );

  // Solutions Dropdown Menu
  const solutionsMenu = (
    <div className="split-dropdown-content container">
      <div className="left-side">
        <Menu>
          <Menu.Item key="1"><Link to="/solutions">Enterprise Service Management</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/solutions/mobile">Governance, Risk, and Compliance(GRC)</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/solutions/ecommerce">ServiceNow Managed Services</Link></Menu.Item>
          <Menu.Item key="4"><Link to="/solutions/ecommerce">GenAl Dynamics</Link></Menu.Item>
          <Menu.Item key="5"><Link to="/solutions/ecommerce">Devops and Infra Automation</Link></Menu.Item>
          <Menu.Item key="6"><Link to="/solutions/ecommerce">IT Asset Management</Link></Menu.Item>
          <Menu.Item key="7"><Link to="/solutions/ecommerce">Jira implementation Support</Link></Menu.Item>
          <Menu.Item key="8"><Link to="/solutions/ecommerce">IT Security Services</Link></Menu.Item>
          <Menu.Item key="9"><Link to="/solutions/ecommerce">QA and Testing</Link></Menu.Item>
          <Menu.Item key="10"><Link to="/solutions/ecommerce">Confluence Integration and Support</Link></Menu.Item>
        </Menu>
      </div>
      <div className="right-side">
        <img src={ExampleImage} alt="Solutions" className="dropdown-image" />
        <div className="dropdown-text">Explore Our Solutions</div>
      </div>
    </div>
  );

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={Logo} alt="Dotsito Logo" width="40" height="50" />
            <span className="navbar-title">Dotsito Technologies</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-menu">
          {/* About Dropdown */}
          <Dropdown overlay={aboutMenu} trigger={['hover']}>
            <Link className="ant-dropdown-link" to="/about">About</Link>
          </Dropdown>

          {/* Solutions Dropdown */}
          <Dropdown overlay={solutionsMenu} trigger={['hover']}>
            <Link className="ant-dropdown-link" to="/solutions">Solutions</Link>
          </Dropdown>

          {/* Standard Links */}
          <Link className="ant-menu-link" to="/services">Services</Link>
          <Link className="ant-menu-link" to="/contact">Contact</Link>
          <Link className="ant-menu-link" to="/blog">Blog</Link>
          <Link className="ant-menu-link" to="/careers">Careers</Link>
          <Link className="ant-menu-link" to="/login">
            <Button type="primary">Login</Button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <Button
          className="menu-mobile"
          icon={drawerVisible ? <CloseOutlined /> : <MenuOutlined />}
          onClick={showDrawer}
        />
      </div>

      {/* Drawer for Mobile Menu */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={drawerVisible}
        closeIcon={<CloseOutlined />}
      >
        <Dropdown overlay={aboutMenu} trigger={['hover']}>
          <Link to="/about" className="ant-drawer-link">About</Link>
        </Dropdown>
        <Dropdown overlay={solutionsMenu} trigger={['hover']}>
          <Link to="/solutions" className="ant-drawer-link">Solutions</Link>
        </Dropdown>
        <Link to="/services" className="ant-drawer-link">Services</Link>
        <Link to="/contact" className="ant-drawer-link">Contact</Link>
        <Link to="/blog" className="ant-drawer-link">Blog</Link>
        <Link to="/careers" className="ant-drawer-link">Careers</Link>
        <Link className="ant-menu-link" to="/login">
            <Button type="primary">Login</Button>
          </Link>
      </Drawer>
    </div>
  );
}

export default Navbar;
