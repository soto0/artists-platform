import axios from 'axios';
import { Dispatch } from 'redux';
import { FavoriteAction, FavoriteTypes } from '../../types/Favorite';

export const getFavoriteArtwork = (artworkId?: string | number, userLogin?: string | undefined) => {
    return async (dispatch: Dispatch<FavoriteAction>) => {
        try {
            const response = await axios.get('http://localhost:3001/FavoriteArtworks?userId' + userLogin + '&artworkId=' + artworkId);
            const FavoriteArtworkData = response.data.find((item: any) => item.userLogin === userLogin && item.artworkId === artworkId);
            dispatch({ type: FavoriteTypes.GET_FAVORITE_ARTWORK, favoriteArtwork: FavoriteArtworkData })
        } catch  {
            dispatch({ type: FavoriteTypes.GET_FAVORITE_ARTWORK, favoriteArtwork: [] })
        };
    };
};

export const getFavoriteArtworkCount = (artworkId: string | number) => {
    return async (dispatch: Dispatch<FavoriteAction>) => {
        const response = await axios.get('http://localhost:3001/FavoriteArtworks?artworkId=' + artworkId);
        dispatch({ type: FavoriteTypes.GET_FAVORITE_ARTWORK_COUNT, favoriteArtworkCount: response.data.length });
    };
};