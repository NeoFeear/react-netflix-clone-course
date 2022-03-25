import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./User.css";

interface UserProps {
    name: string;
    picture: string;
}

function User({ name, picture }: UserProps) {
    const navigate = useNavigate();

    function redirectToHome() {
        navigate('/home');
    }

    return (
        <div className="avatar__wrapper user" onClick={() => { redirectToHome(); }}>
            <img src={picture} alt={name} />

            <span className="profile__name">{name}</span>
        </div>
    );
}

export default User;