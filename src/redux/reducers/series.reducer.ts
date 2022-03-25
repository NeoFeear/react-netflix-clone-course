import { createSlice } from '@reduxjs/toolkit';
import instance from "../axios";
import {AppDispatch} from "../store";

const API_KEY = process.env.REACT_APP_API_KEY;
const language = "en-US";

export const apiRequests = {
    reqTopRatedSeries: `/discover/tv?sort_by=popularity.desc&api_key=${API_KEY}&language=${language}&page=1`
}

interface ISeriesState {
    seriesFetched: boolean,

    topRatedSeries: any[],
}

const initialState: ISeriesState = {
    seriesFetched: false,

    topRatedSeries: [],
}

const setSeriesFetchedState = (state:ISeriesState, action:any) => {
    state.seriesFetched = action.payload;
}

const setTopRatedSeriesState = (state:ISeriesState, action:any) => {
    state.topRatedSeries = action.payload;
}

export const seriesSlice = createSlice({
    name:'series',
    initialState,
    reducers: {
        setSeriesFetched: (state, action)  => setSeriesFetchedState(state, action),

        setTopRatedSeries: (state, action) => setTopRatedSeriesState(state, action),
    }
})

export const { setSeriesFetched, setTopRatedSeries } = seriesSlice.actions;

const reqTopRatedSeries = instance.get(apiRequests.reqTopRatedSeries);


export const fetchSeries = () => (dispatch: AppDispatch) => {
    Promise.all([reqTopRatedSeries])
    .then(([dataTopRatedSeries]) => {  

        dispatch(setTopRatedSeries(dataTopRatedSeries.data.results));   

    })
    .then(() => {
        dispatch(setSeriesFetched(true));
    }) 
}

export default seriesSlice.reducer;