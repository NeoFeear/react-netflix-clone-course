import React from 'react';
import "./Login.css";
import { Button, TextField } from '@mui/material';
import Home from '../Home/Home';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setLogged } from '../../redux/reducers/user.reducer';
import { useNavigate } from 'react-router-dom';

function Login() {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    let login = React.createRef<HTMLInputElement>();
    let password = React.createRef<HTMLInputElement>();

    function logUser() {
        if (login.current?.value !== '' && password.current?.value !== '') {
            dispatch(setLogged(true));
            navigate('/whoswatching');
        }
    }

    return (
        <div className="login">
            <div className="login__container">
                <h1>Sign In</h1>

                <form action="" className="login__form">
                    <TextField
                        label="Email or phone number"
                        inputRef={login}
                        id="email"
                        color="error"
                        type="email"
                        className="login__input"
                        variant="filled"
                        required
                    />

                    <TextField
                        label="Password"
                        inputRef={password}
                        id="password"
                        color="error"
                        type="password"
                        className="login__input"
                        variant="filled"
                        required
                    />

                    <Button className="login__button" variant="contained" onClick={() => { logUser(); }}>
                        Sign In
                    </Button>
                </form>

                <div className="login__signup">
                    <div className="login__remember">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </div>

                    <div className="login__help">
                        <a href="#">Need help ?</a>
                    </div>
                </div>

                <p className="login__new">
                    New to Netflix?
                    <a href="#">Sign up now.</a>
                </p>
            </div>
        </div>
    );
}

export default Login;