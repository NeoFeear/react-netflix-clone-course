import React from 'react';
import AddUser from './User/AddUser';
import User from './User/User';
import "./WhosWatching.css";

function WhosWatching() {
    return (
        <div className="whosWatching">
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />

            <div className="whosWatching__container">
                <h1>Who's watching?</h1>

                <div className="whosWatching__list">
                    <User name="User 1" picture="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
                    <User name="User 2" picture="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" />
                    <User name="User 3" picture="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" />
                    <User name="User 4" picture="https://i.pinimg.com/originals/34/62/d2/3462d27440aa255b1c314ff16f4032b4.png" />

                    <AddUser />
                </div>

                <a aria-label="MANAGE PROFILES" className="manage-profile-button">MANAGE PROFILES</a>
            </div>
        </div>
    );
}

export default WhosWatching;