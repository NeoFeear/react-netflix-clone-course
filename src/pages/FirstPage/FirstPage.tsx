import { Button, TextField } from '@mui/material';
import React from 'react';
import "./FirstPage.css";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function FirstPage() {
  return (
    <div className="firstpage">
        <div className="firstpage__container">
            <h1 className="title">Unlimited movies, TV<br />shows, and more.</h1>
            
            <h2 className="subtitle">Watch anywhere. Cancel anytime.</h2>

            <div className="firstpage__form">
                <h3 className="form_title">Ready to watch? Enter your email to create or restart your membership.</h3>

                <div className="input">
                    <TextField
                        label="Email address"
                        id="email"
                        color="error"
                        type="email"
                        className="firstpage__input"
                        variant="filled"
                    />

                    <Button
                        type="submit"
                        className="firstpage__button"
                        variant="contained"
                        color="error"
                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default FirstPage;