import React from "react";
import '../routes/portfolio.css'
import About from "../components/about-me/Aboutme";
import Navbar from "../components/navbar/Navbar";
import PortfolioSection from "../components/portfolio-section/portfolio-section";
import ServiceSection from "../components/service-section/service-section";
import ContactSection from "../components/contact-section/contact-section";
import CopyrightSection from "../components/copyright-section/copyright-section";
import Login from "../components/admin-section/login";
import { Introduction } from "../introduction/introduction";


const Portfolio = () => {
    return (
        <div id="header">
            <Navbar />
            <Introduction />
            <About />
            <PortfolioSection />
            <ServiceSection />
            <ContactSection />
            <CopyrightSection />
        </div>
    );
}

export default Portfolio;