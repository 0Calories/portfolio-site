import React from 'react';

const Profile = (props) => (
    <div className="profile-box">
        <img 
            src={'./../../public/images/' + props.imageName}
            className="profile-box__pic"
        />
        <p className="profile-box__desc">Test description asdf 123 lorem ipsum fuck shit thing</p>
    </div>
);

export default Profile;