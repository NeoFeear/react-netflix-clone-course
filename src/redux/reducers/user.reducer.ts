import { createSlice } from '@reduxjs/toolkit';
import {AppDispatch} from "../store";

interface IUserState {
    userLogged: boolean,
    list: any[]
}

const initialState: IUserState = {
    userLogged: false,
    list: []
}

const setLoggedState = (state:IUserState, action:any) => {
    state.userLogged = action.payload;
}

const addToList = (state:IUserState, action:any) => {
    state.list.push(action.payload);
}

const removeFromList = (state:IUserState, action:any) => {
    state.list = state.list.filter(item => item.id !== action.payload);
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLogged: (state, action) => setLoggedState(state, action),
        addToList: (state, action) => addToList(state, action),
        removeFromList: (state, action) => removeFromList(state, action)
    }
})

export const { setLogged } = userSlice.actions;

export const LogUser = () => (dispatch: AppDispatch) => {
    dispatch(setLogged(true));
}

export default userSlice.reducer;