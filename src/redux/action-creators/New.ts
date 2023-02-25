import { NewAction, NewTypes } from './../../types/New';
import { Dispatch } from 'redux';
import axios from 'axios';

export const getNew = () => {
    return async (dispatch: Dispatch<NewAction>) => {
        const response = await axios.get('http://localhost:3001/Artworks');
        dispatch({ type: NewTypes.GET_NEW, new: response.data });
    };
};