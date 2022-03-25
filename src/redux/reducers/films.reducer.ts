import { createSlice } from '@reduxjs/toolkit';
import instance from "../axios";
import {AppDispatch} from "../store";

const API_KEY = process.env.REACT_APP_API_KEY;
const language = "en-US";

export const apiRequests = {
    reqPopular: `/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=${language}&page=1`,
    reqAction: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=${language}&page=1`,
    reqComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=${language}&page=1`,
    reqHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=${language}&page=1`,
}

interface IFilmsState {
    filmsFetched: boolean,

    popular: any[],
    action: any[],
    comedy: any[],
    horror: any[],
}

const initialState: IFilmsState = {
    filmsFetched: false,

    popular: [],
    action: [],
    comedy: [],
    horror: []
}

const setFilmsFetchedState = (state:IFilmsState, action:any) => {
    state.filmsFetched = action.payload;
}

const setPopularState = (state:IFilmsState, action:any) => {
    state.popular = action.payload;
}
const setActionState = (state:IFilmsState, action:any) => {
    state.action = action.payload;
}
const setComedyState = (state:IFilmsState, action:any) => {
    state.comedy = action.payload;
}
const setHorrorState = (state:IFilmsState, action:any) => {
    state.horror = action.payload;
}

export const filmsSlice = createSlice({
    name:'films',
    initialState,
    reducers: {
        setFetched: (state, action)     => setFilmsFetchedState(state, action),

        setPopular: (state, action)     => setPopularState(state, action),
        setAction: (state, action)      => setActionState(state, action),
        setComedy: (state, action)      => setComedyState(state, action),
        setHorror: (state, action)      => setHorrorState(state, action),
    }
})

export const { setFetched, setPopular, setAction, setComedy, setHorror } = filmsSlice.actions;

const reqPopular = instance.get(apiRequests.reqPopular);
const reqAction = instance.get(apiRequests.reqAction);
const reqComedy = instance.get(apiRequests.reqComedy);
const reqHorror = instance.get(apiRequests.reqHorror);


export const fetchFilms = () => (dispatch: AppDispatch) => {
    Promise.all([ reqPopular, reqAction, reqComedy, reqHorror ])
    .then(([ dataPopular, dataAction, dataComedy, dataHorror ]) => {
        
        dispatch(setPopular(dataPopular.data.results));
        dispatch(setAction(dataAction.data.results));
        dispatch(setComedy(dataComedy.data.results));
        dispatch(setHorror(dataHorror.data.results));
        
    })
    .then(() => {
        dispatch(setFetched(true));
    }) 
}

export default filmsSlice.reducer;