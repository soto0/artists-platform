import axios from 'axios';
import { Dispatch } from 'redux';
import { LikeTypes, LikeAction} from '../../types/Like';

export const getLikeArtwork = (artworkId?: string | number, userLogin?: string | undefined) => {
    return async (dispatch: Dispatch<LikeAction>) => {
        try {
            const response = await axios.get('http://localhost:3001/LikeArtworks?userId' + userLogin + '&artworkId=' + artworkId);
            const LikeArtworkData = response.data.find((item: any) => item.userLogin === userLogin && item.artworkId === artworkId);
            dispatch({ type: LikeTypes.GET_LIKE_ARTWORK, likeArtwork: LikeArtworkData });
        } catch  {
            dispatch({ type: LikeTypes.GET_LIKE_ARTWORK, likeArtwork: [] });
        };
    };
};

export const getLikeArtworkCount = (artworkId: string | number) => {
    return async (dispatch: Dispatch<LikeAction>) => {
        const response = await axios.get('http://localhost:3001/LikeArtworks?artworkId=' + artworkId);
        dispatch({ type: LikeTypes.GET_LIKE_ARTWORK_COUNT, likeArtworkCount: response.data.length });
    };
};