import React from 'react'
import '../components/navbar/Navbar.css'
import ExampleComponent from "../components/typed-animation/typed";


export const Introduction = () => {
    return (
        <div className='container'>
            <div className="header-text">
                <p>
                    Front-End Developer.
                </p>
                <h1>Hi, I am <span ><ExampleComponent /></span>.</h1>
                <p className="description">
                    As a Front End Developer, my objective is to deliver innovative and intuitive web applications that
                    not only meet but exceed user expectations. I am looking for a challenging role that allows me to
                    apply my technical expertise, creativity, and passion for web development, while constantly learning
                    and improving my skills.
                </p>
            </div>
        </div>
    )
}
