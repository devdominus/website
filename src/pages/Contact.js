import React from 'react'
import '../App.css'
function Contact() {
    return (
        <div className="page">
            <div className="project-header-container">
            <div className="header-text2">Contact Us</div>
            </div>
            <div className="contact-container">
                <div className="contact-details">
                <div className="col1">
                <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
                </div>
                <div className="col2">
                <div className="contact-title">Call / Whatsapp Us</div>
                <div className="contact-body">+91 8681835595<br/>+91 6383602632</div>
                </div>
                </div>
                <div className="contact-details">
                <div className="col1">
                <i className="fa fa-telegram fa-2x" aria-hidden="true"></i>
                </div>
                <div className="col2">
                <div className="contact-title">Telegram</div>
                <div className="contact-body">@devdominus</div>
                </div>
                </div>
                <div className="contact-details">
                <div className="col1">
                <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
                </div>
                <div className="col2">
                <div className="contact-title">Mail Us</div>
                <div className="contact-body">contact@devdominus.in</div>
                </div>
                </div>
                <div className="follow-parent">
                <div className="contact-title">Follow Us</div>
                <div className="follow-icon-container">
                <a href="https://www.instagram.com/devdominus/" target="_blank" ><i className="fa fa-instagram icon" aria-hidden="true"></i></a>
                <a href="https://twitter.com/dominus_dev" target="_blank" ><i className="fa fa-twitter icon" aria-hidden="true"></i></a>
                <a href="https://www.facebook.com/dev.dominus" target="_blank" ><i className="fa fa-facebook-square icon" aria-hidden="true"></i></a>
                </div>
                </div>  
            </div>
        </div>
    )
}

export default Contact;
