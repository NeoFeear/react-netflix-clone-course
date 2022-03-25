import {configureStore} from '@reduxjs/toolkit';
import filmsReducer from './reducers/films.reducer';
import categoriesReducer from './reducers/categories.reducer';
import seriesReducer from './reducers/series.reducer';
import userReducer from './reducers/user.reducer';

const store = configureStore({
    reducer: {
        user: userReducer,

        categories: categoriesReducer,
        films: filmsReducer,
        series: seriesReducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;