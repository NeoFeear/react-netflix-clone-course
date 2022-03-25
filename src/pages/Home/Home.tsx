/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react';
import "./Home.css";

import Banner from '../../components/Banner/Banner';
import Row from '../../components/Row/Row';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { fetchCategories } from '../../redux/reducers/categories.reducer';
import { fetchFilms } from '../../redux/reducers/films.reducer';
import { fetchSeries } from '../../redux/reducers/series.reducer';

function Home() {
    const dispatch = useAppDispatch();

    const { categories, films, series } = useAppSelector(state => state);

    useEffect(() => {
        if (!categories.categoriesFetched) { dispatch(fetchCategories()); }
        if (!films.filmsFetched) { dispatch(fetchFilms()); }
        if (!series.seriesFetched) { dispatch(fetchSeries()); }
    }, []);

    return (
        <div className="home">
            <Banner />

            <div className="row__container">
                {/* CATEGORIES */}
                <Row title="Trending Now" data={categories.trending} />
                <Row title="Netflix Originals" data={categories.netflixOriginals} />
                <Row title="Top Rated" data={categories.topRated} />

                {/* FILMS */}
                <Row title="Action Films" data={films.action} />
                <Row title="Comedy Films" data={films.comedy} />
                <Row title="Horror Films" data={films.horror} />

                {/* SERIES */}
                <Row title="Top Rated Series" data={series.topRatedSeries} />
            </div>
        </div>
    );
}

export default Home;