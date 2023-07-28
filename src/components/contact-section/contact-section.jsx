import React, { useState } from "react";
import '../contact-section/contact-section.css';
import Axios from "axios";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [submitMessage, setSubmitMessage] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name, value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(formData);
        try {
            const response = await Axios.post("https://testing-backend-8yjx.onrender.com/api/queries", formData);
            console.log(response.data);
            setSubmitMessage("Data saved successfully!");
            setFormData({
                name: "",
                email: "",
                message: ""
            });
            // Handle the response as needed
            setTimeout(() => {
                setSubmitMessage("");
            }, 3000);
        } catch (error) {
            // Handle error
            console.error(error);
        }
    };

    return (

        // <!-- CONTACT SECTION -->

        <div id="contact">
            <div className="container">
                <div className="row">
                    {/* <!-- left --> */}
                    <div className="contact-left">
                        <h1 className="subTitle">
                            Contact Me
                        </h1>
                        <p><i className="fa-solid fa-paper-plane"></i>ankitkapoor8437@gmail.com</p>
                        <p><i className="fa-solid fa-phone"></i>8437926804</p>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/ankit-kapoor-a72bb7152/"><i
                                className="fa-brands fa-linkedin"></i></a>
                            <a href="https://www.instagram.com/itsallaboutkapoor/"><i
                                className="fa-brands fa-square-instagram"></i></a>
                            <a href="https://github.com/ankitkapoor8437"><i className="fa-brands fa-square-github"></i></a>
                            <a href="https://twitter.com/itsallabtKapoor"><i
                                className="fa-brands fa-square-twitter"></i></a>
                        </div>
                        <a href="images/ANKITKAPOOR_UPDATED_CV.pdf" download className="btn btn2">Download CV</a>
                    </div>
                    {/* <!-- right --> */}
                    <div className="contact-right">
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required value={formData.name} />
                            <input type="email" name="email" id="" placeholder="Your Email" onChange={handleChange} required value={formData.email} />
                            <textarea name="message" rows="6" placeholder="Your Message" onChange={handleChange} value={formData.message}></textarea>
                            <button type="submit" className="btn btn2">Submit</button>
                        </form>
                        <span id="msg">{submitMessage}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;