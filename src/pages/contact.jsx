import './pages.css';
import React from "react";

const Contact = () => {
    return (
        <div className="contact-section">
            <h1 style={{ textAlign: 'center' }}>Contact Me</h1>
            <p style={{ textAlign: 'center' }}>You can reach me through the following:</p>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'center' }}>
                <li>Email: vefe.godoy.au@phinmaed.com</li>
                <li>Phone: 0964-764-9527</li>
                <li>Facebook: Venice Godoy</li>
            </ul>
        </div>
    );
}

export default Contact;
