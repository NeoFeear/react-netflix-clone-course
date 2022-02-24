import { createSlice } from '@reduxjs/toolkit';
import instance from "../../pages/Requests/axios";
import {AppDispatch} from "../store";

const API_KEY = process.env.REACT_APP_API_KEY;
const language = "en-US";

export const apiRequests = {
    reqTrending: `/trending/all/week?api_key=${API_KEY}&language=${language}&page=1`,
    reqNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=${language}&page=1`,
    reqTopRated: `/movie/top_rated?api_key=${API_KEY}&language=${language}&page=1`,
    reqActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=${language}&page=1`,
    reqComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=${language}&page=1`,
    reqHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=${language}&page=1`,
}

interface IMovie {
    //définir le movie
}

interface IMoviesState {
    fetched: boolean,

    trending: any[],
    netflixOriginals: any[],
    topRated: any[],
    actionMovies: any[],
    comedyMovies: any[],
    horrorMovies: any[],
}

const initialState: IMoviesState = {
    fetched: false,

    trending: [],
    netflixOriginals: [],
    topRated: [],
    actionMovies: [],
    comedyMovies: [],
    horrorMovies: []
}

const setFetchedState = (state:IMoviesState, action:any) => {
    state.fetched = action.payload;
}

const setTrendingState = (state:IMoviesState, action:any) => {
    state.trending = action.payload;
}
const setNetflixOriginalsState = (state:IMoviesState, action:any) => {
    state.netflixOriginals = action.payload;
}
const setTopRatedState = (state:IMoviesState, action:any) => {
    state.topRated = action.payload;
}
const setActionMoviesState = (state:IMoviesState, action:any) => {
    state.actionMovies = action.payload;
}
const setComedyMoviesState = (state:IMoviesState, action:any) => {
    state.comedyMovies = action.payload;
}
const setHorrorMoviesState = (state:IMoviesState, action:any) => {
    state.horrorMovies = action.payload;
}

export const moviesSlice = createSlice({
    name:'movies',
    initialState,
    reducers: {
        setFetched: (state, action ) => setFetchedState(state, action),

        setTrending: (state, action ) => setTrendingState(state, action),
        setNetflixOriginals: (state, action ) => setNetflixOriginalsState(state, action),
        setTopRated: (state, action ) => setTopRatedState(state, action),
        setActionMovies: (state, action ) => setActionMoviesState(state, action),
        setComedyMovies: (state, action ) => setComedyMoviesState(state, action),
        setHorrorMovies: (state, action ) => setHorrorMoviesState(state, action),
    }
})

export const { setFetched, setTrending, setNetflixOriginals, setTopRated, setActionMovies, setComedyMovies, setHorrorMovies } = moviesSlice.actions;

const reqTrending = instance.get(apiRequests.reqTrending);
const reqNetflixOriginals = instance.get(apiRequests.reqNetflixOriginals);
const reqTopRated = instance.get(apiRequests.reqTopRated);
const reqActionMovies = instance.get(apiRequests.reqActionMovies);
const reqComedyMovies = instance.get(apiRequests.reqComedyMovies);
const reqHorrorMovies = instance.get(apiRequests.reqHorrorMovies);


export const fetchMovies = () => (dispatch:AppDispatch) => {
    Promise.all([reqTrending, reqNetflixOriginals, reqTopRated, reqActionMovies, reqComedyMovies, reqHorrorMovies])
    .then(([dataTrending, dataNetflixOriginals, dataTopRated, dataActionMovies, dataComedyMovies, dataHorrorMovies]) => {
        
        dispatch(setTrending(dataTrending.data.results));
        dispatch(setNetflixOriginals(dataNetflixOriginals.data.results));
        dispatch(setTopRated(dataTopRated.data.results));
        dispatch(setActionMovies(dataActionMovies.data.results));
        dispatch(setComedyMovies(dataComedyMovies.data.results));
        dispatch(setHorrorMovies(dataHorrorMovies.data.results));
        
    })
    .then(() => {
        dispatch(setFetched(true));
    }) 
}

export default moviesSlice.reducer;