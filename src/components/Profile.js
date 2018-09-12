import React from 'react';

const Profile = () => (
    <div className="profile-box box">
        <img 
            src="/images/pic.png"
            className="profile-box__pic"
        />
        <p className="profile-box__desc">
            I'm currently a fourth year student at the University of Ottawa, studying Software Engineering.
            My passion lies in full-stack web development, although I am interested in and have experience with other software-related fields too.
            <br />
            <br />
            I enjoy learning new things and improving my development skills with my free time.
            Come check out the cool stuff I've been working on!
        </p>
    </div>
);

export default Profile;