import React, { useEffect } from 'react';
import Row from '../../components/Row/Row';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchSeries } from '../../redux/reducers/series.reducer';
import './Series.css';

function Series() {

    const dispatch = useAppDispatch();

    const { series } = useAppSelector(state => state);

    useEffect(() => {
        if (!series.seriesFetched) { dispatch(fetchSeries()); }
    }, []);

    return (
        <div className='series'>
            <div className='series__container'>
                <Row title="Top Rated Series" data={series.topRatedSeries} />
            </div>
        </div>
    );
}

export default Series;