import { createSlice } from '@reduxjs/toolkit';
import instance from "../axios";
import {AppDispatch} from "../store";

const API_KEY = process.env.REACT_APP_API_KEY;
const language = "en-US";

export const apiRequests = {
    reqTrending: `/trending/all/week?api_key=${API_KEY}&language=${language}&page=1`,
    reqNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=${language}&page=1`,
    reqTopRated: `/movie/top_rated?api_key=${API_KEY}&language=${language}&page=1`,
}

interface ICategoriesState {
    categoriesFetched: boolean,

    trending: any[],
    netflixOriginals: any[],
    topRated: any[],
}

const initialState: ICategoriesState = {
    categoriesFetched: false,

    trending: [],
    netflixOriginals: [],
    topRated: [],
}

const setCategoriesFetchedState = (state:ICategoriesState, action:any) => {
    state.categoriesFetched = action.payload;
}

const setTrendingState = (state:ICategoriesState, action:any) => {
    state.trending = action.payload;
}
const setNetflixOriginalsState = (state:ICategoriesState, action:any) => {
    state.netflixOriginals = action.payload;
}
const setTopRatedState = (state:ICategoriesState, action:any) => {
    state.topRated = action.payload;
}

export const categoriesSlice = createSlice({
    name:'categories',
    initialState,
    reducers: {
        setCategoriesFetched: (state, action) => setCategoriesFetchedState(state, action),

        setTrending: (state, action)          => setTrendingState(state, action),
        setNetflixOriginals: (state, action)  => setNetflixOriginalsState(state, action),
        setTopRated: (state, action)          => setTopRatedState(state, action),
    }
})

export const { setCategoriesFetched, setTrending, setNetflixOriginals, setTopRated } = categoriesSlice.actions;

const reqTrending = instance.get(apiRequests.reqTrending);
const reqNetflixOriginals = instance.get(apiRequests.reqNetflixOriginals);
const reqTopRated = instance.get(apiRequests.reqTopRated);


export const fetchCategories = () => (dispatch: AppDispatch) => {
    Promise.all([reqTrending, reqNetflixOriginals, reqTopRated])
    .then(([dataTrending, dataNetflixOriginals, dataTopRated]) => {
        
        dispatch(setTrending(dataTrending.data.results));
        dispatch(setNetflixOriginals(dataNetflixOriginals.data.results));
        dispatch(setTopRated(dataTopRated.data.results));
        
    })
    .then(() => {
        dispatch(setCategoriesFetched(true));
    }) 
}

export default categoriesSlice.reducer;