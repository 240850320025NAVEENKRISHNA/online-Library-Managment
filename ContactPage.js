import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/ContactPage.css";

import { FaInstagram, FaYoutube, FaFacebook, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactPage = () => {
    const navigate = useNavigate();

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>Feel free to reach out through any of the platforms below:</p>

            <div className="contact-links">
                <a href="https://instagram.com/your_instagram" target="_blank" rel="noopener noreferrer">
                    <FaInstagram /> Instagram
                </a>
                <a href="https://youtube.com/your_youtube" target="_blank" rel="noopener noreferrer">
                    <FaYoutube /> YouTube
                </a>
                <a href="https://facebook.com/your_facebook" target="_blank" rel="noopener noreferrer">
                    <FaFacebook /> Facebook
                </a>
                <a href="mailto:your_email@example.com">
                    <FaEnvelope /> guthanaveenkrishna@gmail.com
                </a>
                <a href="tel:+1234567890">
                    <FaPhone /> +91-9493788811
                </a>
            </div>

            <button className="main-button" onClick={() => navigate("/main")}>
                Go to Main Page
            </button>
        </div>
    );
};

export default ContactPage;