/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react';
import "./Home.css";

import Banner from './Banner/Banner';
import Row from '../../components/Row/Row';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { fetchMovies } from '../../redux/reducers/movies.reducer';

function Home() {
    const dispatch = useAppDispatch();

    const {fetched, trending, netflixOriginals, topRated, actionMovies, comedyMovies, horrorMovies} = useAppSelector(
        state => state.movies
    );

    useEffect(() => {
        if(!fetched) {
            dispatch(fetchMovies());
        }
    }, []);

    return (
        <div className="home">
            <Banner />

            <div className="row__container">
                <Row title="Trending Now" data={trending} />
                <Row title="Netflix Originals" data={netflixOriginals} />
                <Row title="Top Rated" data={topRated} />
                <Row title="Action Movies" data={actionMovies} />
                <Row title="Comedy Movies" data={comedyMovies} />
                <Row title="Horror Movies" data={horrorMovies} />
            </div>
        </div>
    );
}

export default Home;