/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
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
    const [myList, setMyList] = useState(localStorage.getItem('myList'));

    useEffect(() => {
        if (!categories.categoriesFetched) { dispatch(fetchCategories()); }
        if (!films.filmsFetched) { dispatch(fetchFilms()); }
        if (!series.seriesFetched) { dispatch(fetchSeries()); }
    }, []);

    const showMyList = () => {
        if (myList) {
            let list = JSON.parse(myList);

            if (list.length > 0) {
                return (<Row title="My List" data={list} />);
            }
        }
    };


    return (
        <div className="home">
            <Banner />

            <div className="row__container">

                {showMyList()}

                {/* CATEGORIES */}
                <Row title="Trending Now" data={categories.trending} />
                <Row title="Netflix Originals" data={categories.netflixOriginals} />
                <Row title="Top Rated" data={categories.topRated} />

                {/* FILMS */}
                <Row title="Popular Films" data={films.popular} />
                <Row title="Action Films" data={films.action} />
                <Row title="Comedy Films" data={films.comedy} />
                <Row title="Horror Films" data={films.horror} />

                {/* SERIES */}
                <Row title="Top Rated Series" data={series.popular} />
                <Row title="Comedy Series" data={series.comedy} />
            </div>
        </div>
    );
}

export default Home;