import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActionCreators from './../redux/action-creators/popularArtist';
import * as LoginActionCreators from './../redux/action-creators/Login';
import * as ProfileActionCreators from './../redux/action-creators/Profile';
import * as UsersActionCreators from './../redux/action-creators/Users';
import * as CategoriesActionCreators from './../redux/action-creators/Categories';
import * as NewActionCreators from '../redux/action-creators/New';
import * as CategoryActionCreators from './../redux/action-creators/Category';
import * as ArtworkActionCreators from './../redux/action-creators/Artwork';
import * as PostActionCreators from './../redux/action-creators/Post';
import * as HeaderActionCreators from './../redux/action-creators/Header';
import * as FavoriteActionCreators from './../redux/action-creators/Favorite';
import * as LikeActionCreators from './../redux/action-creators/Like';
import * as SubscriptionsActionCreators from './../redux/action-creators/Subscription';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(UserActionCreators, dispatch);
};

export const useLoginActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(LoginActionCreators, dispatch);
};

export const useProfileAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ProfileActionCreators, dispatch);
};

export const useUsersAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(UsersActionCreators, dispatch);
};

export const useCategoriesAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(CategoriesActionCreators, dispatch);
};

export const useNewAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(NewActionCreators, dispatch);
};

export const useCategoryAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(CategoryActionCreators, dispatch);
};

export const useArtworkAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ArtworkActionCreators, dispatch);
};

export const useHeaderAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(HeaderActionCreators, dispatch);
};

export const usePostAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(PostActionCreators, dispatch);
};

export const useFavoriteAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(FavoriteActionCreators, dispatch);
};

export const useLikeAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(LikeActionCreators, dispatch);
};

export const useSubscriptionsAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(SubscriptionsActionCreators, dispatch);
};