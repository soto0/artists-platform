import { UsersAction, UsersTypes } from './../../types/Users';
import { Dispatch } from 'redux';
import axios from 'axios';

export const getUsers = () => {
    return async (dispatch: Dispatch<UsersAction>) => {
        const response = await axios.get('http://localhost:3001/Profile');
        dispatch({ type: UsersTypes.GET_USERS, users: response.data })
    };
};