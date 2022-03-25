import React, { useEffect } from 'react';
import './Navbar.css';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { Button, Grid, MenuItem, Select } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Navbar() {
    const userLogged = useAppSelector((state) => state.user.userLogged);

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

            <ul className="nav__menu">
                <li className="nav__menu__item">
                    <Link to="/home">Home</Link>
                </li>

                <li className="nav__menu__item">
                    <Link to="/series">Series</Link>
                </li>

                <li className="nav__menu__item">
                    <Link to="/films">Films</Link>
                </li>

                <li className="nav__menu__item">
                    <Link to="/myList">My list</Link>
                </li>
            </ul>

            <Grid item sx={{ ml: 'auto' }}>
                {!userLogged ?

                    <>
                        <Select className="nav__language" label="Language" value="english" sx={{ color: 'white', height: '40px', width: '130px' }}>
                            <MenuItem value="english">English</MenuItem>
                            <MenuItem value="french">Français</MenuItem>
                        </Select>

                        <Button className="nav__signin" variant="contained" color="error">
                            <Link to={'/login'}>Sign In</Link>
                        </Button>
                    </>

                    :

                    <img className="nav__avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="Profile picture" />
                }
            </Grid>
        </div>
    )
}

export default Navbar;