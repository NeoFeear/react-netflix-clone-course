/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import API_Popular from './components/API_Popular';
import Navbar from './components/Navbar';

function App() {
    return (
        <>
            <API_Popular />
            <Navbar />
        </>
    );
}

export default App;