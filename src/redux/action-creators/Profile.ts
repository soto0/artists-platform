import axios from 'axios';
import { Dispatch } from 'redux';
import { ProfileAction, ProfileTypes } from "../../types/Profile"

export const getProfileData = (userLogin: any) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        const response = await axios.get('http://localhost:3001/Profile/' + userLogin);
        const responseArtworks = await axios.get('http://localhost:3001/Artworks?login=' + userLogin);
        const responseComments = await axios.get('http://localhost:3001/Comments');
        dispatch({ type: ProfileTypes.GET_PROFILE_DATA, largePhoto: response.data.largePhoto, avatar: response.data.avatar, artworks: responseArtworks.data, comments: responseComments.data });
    };
    
};