import React from 'react';

import Navbar from './components/Navbar/Navbar';

import FirstPage from './pages/FirstPage/FirstPage';
import Login from './pages/Login/Login';
import WhosWatching from './pages/WhosWatching/WhosWatching';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Series from './pages/Series/Series';
import Films from './pages/Films/Films';
import MyList from './pages/MyList/MyList';

function App() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/whoswatching" element={<WhosWatching />} />

                <Route path="/home" element={<Home />} />
                <Route path="/series" element={<Series />} />
                <Route path="/films" element={<Films />} />
                <Route path="/mylist" element={<MyList />} />
            </Routes>
        </>
    );
}

export default App;