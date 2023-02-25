import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActionCreators from './../redux/action-creators/popularArtist';
import * as LoginActionCreators from './../redux/action-creators/Login';
import * as ProfileActionCreators from './../redux/action-creators/Profile';
import * as UsersActionCreators from './../redux/action-creators/Users';
import * as CategoriesActionCreators from './../redux/action-creators/Categories';

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