import React from 'react';

import Navbar from './components/Navbar/Navbar';

import Login from './pages/Login/Login';
import WhosWatching from './pages/WhosWatching/WhosWatching';
import Home from './pages/Home/Home';

function App() {
    return (
        <>
            <Navbar />

            <Login />
            {/* <WhosWatching /> */}
            {/* <Home /> */}
        </>
    );
}

export default App;