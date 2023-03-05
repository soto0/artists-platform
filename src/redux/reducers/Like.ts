import { LikeState, LikeAction, LikeTypes } from '../../types/Like';

const initialState: LikeState = {
    LikeArtwork: [],
    LikeArtworkCount: 0
};

export const LikeReducer = (state = initialState, action: LikeAction): LikeState => {
    switch (action.type) {
        case LikeTypes.GET_LIKE_ARTWORK:
            return { ...state, LikeArtwork: action.likeArtwork }
        case LikeTypes.GET_LIKE_ARTWORK_COUNT:
            return { ...state, LikeArtworkCount: action.likeArtworkCount }    
        default:
            return state
    };
};