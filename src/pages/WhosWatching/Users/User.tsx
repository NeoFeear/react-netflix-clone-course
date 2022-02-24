import React from 'react';
import "./User.css";

interface UserProps {
    name: string;
    picture: string;
}

function User({ name, picture }: UserProps) {
    return (
        <div className="avatar__wrapper user">
            <img src={picture} alt={name} />

            <span className="profile__name">{name}</span>
        </div>
    );
}

export default User;