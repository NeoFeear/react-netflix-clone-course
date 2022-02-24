import React from 'react';
import "./User.css";

function AddUser() {
    return (
        <div className="avatar__wrapper add">
            <img src="http://cdn.onlinewebfonts.com/svg/img_258753.png" alt="Add a profile" />

            <span className="profile__name">Add Profile</span>
        </div>
    );
}

export default AddUser;