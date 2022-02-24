import React, { useEffect } from 'react';
import './Navbar.css';

function Navbar() {

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar?.classList.add('navbar--scrolled');
            } else {
                navbar?.classList.remove('navbar--scrolled');
            }
        });
    }, [])

    return (
        <div className="navbar">
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
        
            <img className="nav__avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="Profile picture" />
        </div>
    );
}

export default Navbar;