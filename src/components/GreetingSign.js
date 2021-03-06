import React from 'react';
import Scroll from 'react-scroll';

const Link = Scroll.Link;

const GreetingSign = () => (
    <div className="greeting-sign">
        <h1 className="greeting-sign__title">Hey, I'm <span class="cherry-text">Ash</span></h1>
        <h3 className="greeting-sign__subtitle">Welcome to my page!</h3>

        <Link 
            to="sky-end"
            offset={10}
            smooth={true} 
            duration={500}
        >
            <i className="greeting-sign__scroller fas fa-angle-double-down"></i>
        </Link>
        
    </div>
);

export default GreetingSign;