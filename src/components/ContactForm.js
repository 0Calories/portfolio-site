import React from 'react';
import Fade from 'react-reveal/Fade';

export default class ContactForm extends React.Component {

    render() {
        return (
            <div className="contact-form-wrapper">
                <form 
                    className="contact-form" 
                    action="https://formspree.io/aanan092@uottawa.ca"
                    method="POST"
                >
                    <input className="contact-form__input" type="email" name="email" placeholder="Your Email" required="required"/>
                    <input className="contact-form__input" type="text" name="name" placeholder="Your Name" />
                    <textarea id="contact-form-message" className="contact-form__input" name="message" placeholder="Your Message Here" required />
                    <button className="contact-form__submit">Send</button> 
                </form>
            </div>
        );
    }

} 