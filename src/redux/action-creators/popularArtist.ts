import { PopularArtistsActions, PopularArtistsTypes } from '../../types/popularArtists';
import { Dispatch } from 'redux';
import axios from 'axios';


export const getPopularArtists = () => {
    return async (dispatch: Dispatch<PopularArtistsActions>) => {
        const response = await axios.get('http://localhost:3001/PopularArtists');
        dispatch({ type: PopularArtistsTypes.GET_POPULAR_ARTISTS, payload: response.data });
    };
};