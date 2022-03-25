import { createSlice } from '@reduxjs/toolkit';
import instance from "../axios";
import {AppDispatch} from "../store";

const API_KEY = process.env.REACT_APP_API_KEY;
const language = "en-US";

export const apiRequests = {
    reqPopular: `/discover/tv?sort_by=popularity.desc&api_key=${API_KEY}&language=${language}&page=1`,
    reqComedy: `/discover/tv?api_key=${API_KEY}&with_genres=35&language=${language}&page=1`,
}

interface ISeriesState {
    seriesFetched: boolean,

    popular: any[],
    comedy: any[],
}

const initialState: ISeriesState = {
    seriesFetched: false,

    popular: [],
    comedy: [],
}

const setSeriesFetchedState = (state:ISeriesState, action:any) => {
    state.seriesFetched = action.payload;
}

const setTopRatedSeriesState = (state:ISeriesState, action:any) => {
    state.popular = action.payload;
}
const setComedySeriesState = (state:ISeriesState, action:any) => {
    state.comedy = action.payload;
}

export const seriesSlice = createSlice({
    name:'series',
    initialState,
    reducers: {
        setSeriesFetched: (state, action)  => setSeriesFetchedState(state, action),

        setTopRatedSeries: (state, action) => setTopRatedSeriesState(state, action),
        setComedySeries: (state, action)   => setComedySeriesState(state, action),
    }
})

export const { setSeriesFetched, setTopRatedSeries, setComedySeries } = seriesSlice.actions;

const reqPopular = instance.get(apiRequests.reqPopular);
const reqComedy = instance.get(apiRequests.reqComedy);

export const fetchSeries = () => (dispatch: AppDispatch) => {
    Promise.all([reqPopular, reqComedy])
    .then(([dataTopRatedSeries, dataComedySeries]) => {

        dispatch(setTopRatedSeries(dataTopRatedSeries.data.results));  
        dispatch(setComedySeries(dataComedySeries.data.results));

    })
    .then(() => {
        dispatch(setSeriesFetched(true));
    }) 
}

export default seriesSlice.reducer;