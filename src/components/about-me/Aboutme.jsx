import React, { useState } from "react";
import "../about-me/Aboutme.css";
import mainImage from "../../assets/main-image.jpeg";
import Experiences from "./experience";
import Skills from "./skills";
import Education from "./education";

const About = () => {
    const [activeTab, setActiveTab] = useState("experience");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="about-col1">
                        <img src={mainImage} alt="mainImage" />
                    </div>

                    <div className="about-col2">
                        <h1 className="subTitle">About Me</h1>
                        <p>
                            I'm a web developer based in Punjab, originally from Himachal
                            Pradesh. When I'm not coding, you can find me playing the guitar,
                            listening to music, traveling, watching anime, and reading about
                            history. I also love exploring new cafes and trying different
                            cuisines, and weekend getaways are always on my list. My hobbies
                            keep me inspired and help me bring a fresh perspective to my work.
                        </p>

                        <div className="tab-titles">
                            <p
                                className={`tab-links ${activeTab === "experience" ? "active-link" : ""}`}
                                onClick={() => handleTabClick("experience")}
                            >
                                Experience
                            </p>
                            <p
                                className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`}
                                onClick={() => handleTabClick("skills")}
                            >
                                Skills
                            </p>
                            <p
                                className={`tab-links ${activeTab === "education" ? "active-link" : ""}`}
                                onClick={() => handleTabClick("education")}
                            >
                                Education
                            </p>
                        </div>

                        <div className={`tab-contents ${activeTab === "experience" ? "active-tab" : ""}`} id="experience">
                            <ul>
                                {
                                    Experiences.map(({ company, location, position, startDate, endDate, description }) => (
                                        <li >
                                            <span>
                                                {company}, {location} — <i>{position}</i>
                                            </span>
                                            <br />
                                            <i>{startDate} - {endDate}</i>
                                            <br />
                                            {description}
                                            <br />
                                            <br />
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className={`tab-contents ${activeTab === "skills" ? "active-tab" : ""}`} id="skills">
                            <ul>
                                {Skills.map(({ heading, skill }) => (
                                    <li>
                                        <span>{heading}</span>
                                        <br />
                                        <i>{skill}</i>
                                        <br />
                                        <br />
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                        <div className={`tab-contents ${activeTab === "education" ? "active-tab" : ""}`} id="education">
                            <ul>
                                {Education.map(({ school, duration, description }) => (
                                    <li>
                                        <span>{school}</span>
                                        <br />
                                        <i>{duration}</i>
                                        <br />
                                        {description}
                                        <br />
                                        <br />
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div >

    );
}

export default About;