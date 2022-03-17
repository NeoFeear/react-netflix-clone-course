import React, { useEffect } from 'react';
import './Navbar.css';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { Button, MenuItem, Select } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Navbar() {
    const { userLogged } = useAppSelector( state => state.user );

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

    // SI AUCUN UTILISAUR N'EST CONNECTÉ
    if(!userLogged) {
        return (
            <div className="navbar">
                <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />

                <Select className="nav__language" label="Language" value="english">
                    <MenuItem value="english">English</MenuItem>
                    <MenuItem value="french">Français</MenuItem>
                </Select>

                <Button className="nav__signin" variant="contained" color="error">
                    <Link to={'/login'}>Sign In</Link>
                </Button>
            </div>
        )
    }
    
    // SINON
    else {
        return (
            <div className="navbar">
                <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
            
                <img className="nav__avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="Profile picture" />
            </div>
        );
    }
}

export default Navbar;