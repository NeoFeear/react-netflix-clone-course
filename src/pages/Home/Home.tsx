/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import "./Home.css";

import requests from '../Requests/Requests';

import Banner from './Banner/Banner';
import Row from '../../components/Row/Row';

function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="row__container">
                <Row title="Trending Now" fetchUrl={requests.trending} />
                <Row title="Netflix Originals" fetchUrl={requests.netflixOriginals} />
                <Row title="Top Rated" fetchUrl={requests.topRated} />
                <Row title="Action Movies" fetchUrl={requests.actionMovies} />
                <Row title="Comedy Movies" fetchUrl={requests.comedyMovies} />
                <Row title="Horror Movies" fetchUrl={requests.horrorMovies} />
            </div>
        </div>
    );
}

export default Home;