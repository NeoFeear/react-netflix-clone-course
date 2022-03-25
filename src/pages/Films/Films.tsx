import React, { useEffect } from 'react';
import Row from '../../components/Row/Row';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchFilms } from '../../redux/reducers/films.reducer';
import './Films.css';

function Films() {

    const dispatch = useAppDispatch();

    const { films } = useAppSelector(state => state);

    useEffect(() => {
        if (!films.filmsFetched) { dispatch(fetchFilms()); }
    }, []);

    return (
        <div className='films'>
            <div className='films__container'>
                <Row title="Action Films" data={films.action} />
                <Row title="Comedy Films" data={films.comedy} />
                <Row title="Horror Films" data={films.horror} />
            </div>
        </div>
    );
}

export default Films;