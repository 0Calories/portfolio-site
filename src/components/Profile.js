import React from 'react';
import Fade from 'react-reveal/Fade';

const Profile = () => (
    <div className="profile-box box">
        <Fade left>
            <img
                src="/images/pic.png"
                className="profile-box__pic"
            />
            <p className="profile-box__desc">
                I'm currently a fourth year student at the <span class="cherry-text">University of Ottawa</span>, studying <span class="cherry-text">Software Engineering</span>.
                My passion lies in full-stack web development, although I am interested in and have experience with other software-related fields too.
            <br />
                <br />
                I enjoy learning new things and improving my development skills with my free time.
                Come check out the cool stuff I've been working on!
        </p>
        </Fade>
        
    </div>
);

export default Profile;