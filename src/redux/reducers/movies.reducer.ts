import { createSlice } from '@reduxjs/toolkit';
import axios from "axios";
import {AppDispatch} from "../store";

const API_KEY = process.env.REACT_APP_API_KEY;
const language = "en-US";

const apiRequests = {
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
    trending: any[],
    netflixOriginals: any[],
    topRated: any[],
    actionMovies: any[],
    comedyMovies: any[],
    horrorMovies: any[],
}

const initialState: IMoviesState = {
    trending: [],
    netflixOriginals: [],
    topRated: [],
    actionMovies: [],
    comedyMovies: [],
    horrorMovies: []
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
        setTrending: (state, action ) => setTrendingState(state, action),
        setNetflixOriginals: (state, action ) => setNetflixOriginalsState(state, action),
        setTopRated: (state, action ) => setTopRatedState(state, action),
        setActionMovies: (state, action ) => setActionMoviesState(state, action),
        setComedyMovies: (state, action ) => setComedyMoviesState(state, action),
        setHorrorMovies: (state, action ) => setHorrorMoviesState(state, action),
    }
})

export const { setTrending, setNetflixOriginals, setTopRated, setActionMovies, setComedyMovies, setHorrorMovies } = moviesSlice.actions;

export const fetchMovies = () => (dispatch:AppDispatch) => {
    axios.get(apiRequests.reqTrending).then((res) => {
        dispatch(setTrending(res.data.results))
    });

    axios.get(apiRequests.reqNetflixOriginals).then((res) => {
        dispatch(setNetflixOriginals(res.data.results))
    });

    axios.get(apiRequests.reqTopRated).then((res) => {
        dispatch(setTopRated(res.data.results))
    });

    axios.get(apiRequests.reqActionMovies).then((res) => {
        dispatch(setActionMovies(res.data.results))
    });

    axios.get(apiRequests.reqComedyMovies).then((res) => {
        dispatch(setComedyMovies(res.data.results))
    });

    axios.get(apiRequests.reqHorrorMovies).then((res) => {
        dispatch(setHorrorMovies(res.data.results))
    });
}

export default moviesSlice.reducer;