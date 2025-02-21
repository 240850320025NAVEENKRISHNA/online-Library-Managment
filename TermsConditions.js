

import React from "react";
import { Link } from "react-router-dom";
import "../css/TermsConditions.css";

const TermsConditions = () => {
    return (
        
        <div className="terms-container">
            <h1>Terms & Conditions</h1>
            <p>By using our website, you agree to the following terms and conditions:</p>
            <ul>
                <li>You must not use our website for any illegal activities.</li>
                <li>All content on this website is for informational purposes only.</li>
                <li>We reserve the right to update or modify these terms at any time.</li>
                <li>Your personal information will be handled as per our privacy policy.</li>
                <li>Unauthorized copying or distribution of content is prohibited.</li>
                <li>We do not guarantee the accuracy or completeness of the information provided.</li>
                <li>Any misuse of the website may result in access restrictions.</li>
                <li>Third-party links provided are for convenience; we are not responsible for their content.</li>
                <li>Users should comply with all applicable laws and regulations.</li>
                <li>Disputes arising from the use of this website will be governed by applicable law.</li>
            </ul>
            <Link to="/main" className="back-link">Back to Main Page</Link>
        </div>
    );
};

export default TermsConditions;
