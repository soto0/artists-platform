import { SubscriptionsReducer } from './Follow';
import { LikeReducer } from './Like';
import { FavoriteReducer } from './Favorite';
import { PostReducer } from './Post';
import { HeaderReducer } from './Header';
import { ArtworkReducer } from './Artwork';
import { CategoryReducer } from './Category';
import { NewReducer } from './New';
import { CategoriesReducer } from './Categories';
import { UsersReducer } from './Users';
import { ProfileReducer } from './Profile';
import { LoginReducer } from './Login';
import { combineReducers } from 'redux';


export const rootReducer = combineReducers({
    Login: LoginReducer,
    Profile: ProfileReducer,
    Users: UsersReducer,
    Categories: CategoriesReducer,
    New: NewReducer,
    Category: CategoryReducer,
    Artwork: ArtworkReducer,
    Post: PostReducer,
    Header: HeaderReducer,
    Favorite: FavoriteReducer,
    Like: LikeReducer,
    Subscriptions: SubscriptionsReducer
});

export type RootState = ReturnType<typeof rootReducer>