import React from 'react';

import Navbar from './components/Navbar/Navbar';

import FirstPage from './pages/FirstPage/FirstPage';
import Login from './pages/Login/Login';
import WhosWatching from './pages/WhosWatching/WhosWatching';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/whoswatching" element={<WhosWatching />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;