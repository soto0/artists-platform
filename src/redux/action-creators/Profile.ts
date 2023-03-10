import axios from 'axios';
import { Dispatch } from 'redux';
import { ProfileAction, ProfileTypes } from "../../types/Profile"

export const getProfileData = (userLogin: string | undefined) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        const response = await axios.get('http://localhost:3001/Profile/' + userLogin);
        dispatch({ type: ProfileTypes.GET_PROFILE_DATA, largePhoto: response.data.largePhoto, avatar: response.data.avatar, country: response.data.country, gender: response.data.gender, bio: response.data.bio, login: response.data.login });
    };
    
};

export const getArtworks = (userLogin: string | undefined) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        const response = await axios.get('http://localhost:3001/Artworks?login=' + userLogin);
        dispatch({ type: ProfileTypes.GET_ARTWORKS,  artworks: response.data });
    };
};

export const getComments = (Login: string | undefined) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        const response = await axios.get('http://localhost:3001/Comments/?profile=' + Login);
        dispatch({ type: ProfileTypes.GET_COMMENTS, comments: response.data});
    };
};

export const getCountries = () => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        const response = await axios.get('http://localhost:3001/Countries');
        dispatch({ type: ProfileTypes.GET_COUNTRIES, countries: response.data});
    };
};

export const getPosts = (Login: string | undefined) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        const response = await axios.get('http://localhost:3001/Posts?profile=' + Login);
        dispatch({ type: ProfileTypes.GET_POSTS, posts: response.data});
    };
};

export const getStatistic = (userLogin: string | undefined) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        const PostsStatisticsResponse = await axios.get('http://localhost:3001/Posts?login=' + userLogin);
        const SubscriptionsStatisticResponse = await axios.get('http://localhost:3001/Subscriptions?userLogin=' + userLogin);
        const ArtworksStatisticResponse = await axios.get('http://localhost:3001/Artworks?login=' + userLogin);
        const FavoritesStatisticResponse = await axios.get('http://localhost:3001/FavoriteArtworks?userLogin=' + userLogin);
        dispatch({ 
            type: ProfileTypes.GET_STATISTIC, 
            postsStatistic: PostsStatisticsResponse.data.length, 
            artworksStatistic: ArtworksStatisticResponse.data.length, 
            favoritesStatistic: FavoritesStatisticResponse.data.length, 
            subscriptionsStatistic: SubscriptionsStatisticResponse.data.length 
        })
    }
}

export const getFavorites = (userLogin: string | undefined) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        const response = await axios.get('http://localhost:3001/FavoriteArtworks?userLogin=' + userLogin);
        dispatch({type: ProfileTypes.GET_FAVORITES, favoriteArtworks: response.data });
    }
}