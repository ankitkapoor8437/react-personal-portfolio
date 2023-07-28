import './App.css';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './routes/portfolio';
import React from "react";
import '../src/routes/portfolio.css'
// import About from "../src/components/about-me/Aboutme";
// import Navbar from "../src/components/navbar/Navbar";
// import PortfolioSection from "../src/components/portfolio-section/portfolio-section";
// import ServiceSection from "../src/components/service-section/service-section";
// import ContactSection from "../src/components/contact-section/contact-section";
// import CopyrightSection from "../src/components/copyright-section/copyright-section";
// import Login from "../src/components/admin-section/login";
import AdminRoute from './routes/admin-route';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Portfolio/>} />
        <Route path='/admin' element={<AdminRoute/>} />
      </Routes>

      {/* <div id="header">
        <Navbar />
        <About />
        <PortfolioSection />
        <ServiceSection />
        <ContactSection />
        <CopyrightSection />
        <Login />
      </div> */}
    </div>
  );
}

export default App;
