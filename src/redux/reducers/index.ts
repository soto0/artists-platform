import { LoginReducer } from './Login';
import { combineReducers } from 'redux';
import { PopularArtistsReducer } from './PopularArtists';


export const rootReducer = combineReducers({
    popularArtists: PopularArtistsReducer,
    Login: LoginReducer
});

export type RootState = ReturnType<typeof rootReducer>