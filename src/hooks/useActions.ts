import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActionCreators from './../redux/action-creators/popularArtist';
import * as LoginActionCreators from './../redux/action-creators/Login';


export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(UserActionCreators, dispatch);
};

export const useLoginActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(LoginActionCreators, dispatch);
};

// export const useLoginActions = () => {
//     const dispatch = useDispatch();
//     return bindActionCreators(LoginActionCreators, dispatch);
// };