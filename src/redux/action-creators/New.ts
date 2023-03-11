import { NewAction, NewTypes } from '../../types/New';
import { Dispatch } from 'redux';
import axios from 'axios';

export const getNewArtworks = () => {
    return async (dispatch: Dispatch<NewAction>) => {
        const response = await axios.get('http://localhost:3001/Artworks');
        dispatch({ type: NewTypes.GET_NEW_ARTWORKS, newArtworks: response.data.reverse() });
    };
};

export const getNewPosts = () => {
    return async (dispatch: Dispatch<NewAction>) => {
        const response = await axios.get('http://localhost:3001/Posts');
        dispatch({ type: NewTypes.GET_NEW_POSTS, newPosts: response.data.reverse() });
    };
};