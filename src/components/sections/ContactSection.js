import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';

import ContactForm from '../ContactForm';
import LinkBadge from '../LinkBadge';

const ContactSection = (props) => (
    <div id="contact-section" className="section">
        <Flip right>
            <h1 id="contact-section__header" className="section__header">{props.sectionName}</h1>
        </Flip>
        
        <p id="contact-section__desc">Want to get in touch? Feel free to send me a message using the form below, or check out my LinkedIn, GitHub, and resume.</p>

        

        <div id="contact-section__body" className="section__body">
            <Bounce bottom>
                <div className="contact-form-wrapper">
                    <ContactForm />
                </div>
            </Bounce>
            
        </div>

        <Bounce bottom>
            <div id="contact-section__links">
                <LinkBadge link="https://www.linkedin.com/in/ashwin-anand7/" iconClass="fab fa-linkedin-in" />
                <LinkBadge link="https://github.com/0Calories" iconClass="fab fa-github" />
                <LinkBadge link="/resume.pdf" iconClass="fas fa-file" />
            </div>
        </Bounce>
        

    </div>
);

export default ContactSection;