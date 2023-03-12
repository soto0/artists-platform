import { LoginActions, LoginTypes } from './../../types/Login';
import { Dispatch } from 'redux';
import axios from 'axios';

export const getUserLogin = (values: any) => {
    return async (dispatch: Dispatch<LoginActions>) => {
        const response = await axios.get('http://localhost:3001/Users/' + values.login);
        if (response.data.password === values.password) {
            dispatch({ type: LoginTypes.GET_USER_LOGIN, login: response.data.login, password: response.data.password, id: response.data.id })
        }
    };
};

export const getExitLogin = () => {
    return async (dispatch: Dispatch<LoginActions>) => {
        dispatch({ type: LoginTypes.GET_EXIT_LOGIN, login: '', password: '', id: '' })
    }
}