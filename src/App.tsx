/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './components/Requests';

function App() {
    return (
        <div className="app">
            {/* <Navbar /> */}

            <Banner />

            <Row title="Trending Now" fetchUrl={requests.trending} />
            <Row title="Netflix Originals" fetchUrl={requests.netflixOriginals} />
            <Row title="Top Rated" fetchUrl={requests.topRated} />
            <Row title="Action Movies" fetchUrl={requests.actionMovies} />
            <Row title="Comedy Movies" fetchUrl={requests.comedyMovies} />
            <Row title="Horror Movies" fetchUrl={requests.horrorMovies} />
        </div>
    );
}

export default App;