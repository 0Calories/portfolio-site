import React from 'react';
import Fade from 'react-reveal/Fade';

export default class ContactForm extends React.Component {
    
    render() {
        return (
            <div className="contact-form-wrapper">
                <form className="contact-form">
                    <input className="contact-form__input" type="text" name="email" placeholder="Your Email"/>
                    <textarea id="contact-form-message" className="contact-form__input" name="message" placeholder="Your Message Here" />
                </form>
            </div>
        );
    }

} 