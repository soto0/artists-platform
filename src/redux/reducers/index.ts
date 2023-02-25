import { CategoriesReducer } from './Categories';
import { UsersReducer } from './Users';
import { ProfileReducer } from './Profile';
import { LoginReducer } from './Login';
import { combineReducers } from 'redux';
import { PopularArtistsReducer } from './PopularArtists';


export const rootReducer = combineReducers({
    popularArtists: PopularArtistsReducer,
    Login: LoginReducer,
    Profile: ProfileReducer,
    Users: UsersReducer,
    Categories: CategoriesReducer
});

export type RootState = ReturnType<typeof rootReducer>