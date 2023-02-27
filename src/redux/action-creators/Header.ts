import axios from 'axios';
import { Dispatch } from 'redux';
import { HeaderAction, HeaderTypes } from "../../types/Header"

export const getAvatar = (userLogin: string | undefined) => {
    return async (dispatch: Dispatch<HeaderAction>) => {
        const response = await axios.get('http://localhost:3001/Profile/' + userLogin);
        dispatch({ type: HeaderTypes.GET_AVATAR, avatar: response.data.avatar });
    };
};