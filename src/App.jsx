import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './pages/About';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import DotsitoLogin from './pages/DotsitoLogin';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';

function Layout({ children }) {
  const location = useLocation();

  // Check if the current page is login, signup, or forgot-password to hide the navbar
  const hideNavbarOnPaths = ['/login', '/signup', '/forgot-password'];
  const shouldHideNavbar = hideNavbarOnPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />} {/* Conditionally render the Navbar */}
      {children}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />  
            <Route path="/about" element={<About />} />  
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/solutions" element={<Solutions />} />  
            <Route path="/contact" element={<Contact />} />  
            <Route path="/careers" element={<Careers />} />  
            <Route path="/login" element={<DotsitoLogin />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
      </Layout>
    </Router>
  );
}

export default App;
