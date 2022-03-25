import { createSlice } from '@reduxjs/toolkit';
import {AppDispatch} from "../store";

interface IUserState {
    userLogged: boolean
}

const initialState: IUserState = {
    userLogged: false
}

const setLoggedState = (state:IUserState, action:any) => {
    state.userLogged = action.payload;
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLogged: (state, action) => setLoggedState(state, action)
    }
})

export const { setLogged } = userSlice.actions;

export const LogUser = () => (dispatch: AppDispatch) => {
    dispatch(setLogged(true));
}

export default userSlice.reducer;