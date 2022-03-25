import React from 'react';
import "./WhosWatching.css";
import User from './Users/User';
import AddUser from './Users/AddUser';

function WhosWatching() {

    return (
        <div className="whosWatching">
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