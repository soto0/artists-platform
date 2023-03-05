import { FavoriteState, FavoriteAction, FavoriteTypes } from './../../types/Favorite';

const initialState: FavoriteState = {
    FavoriteArtwork: [],
    FavoriteArtworkCount: 0
};

export const FavoriteReducer = (state = initialState, action: FavoriteAction): FavoriteState => {
    switch (action.type) {
        case FavoriteTypes.GET_FAVORITE_ARTWORK:
            return { ...state, FavoriteArtwork: action.favoriteArtwork }
        case FavoriteTypes.GET_FAVORITE_ARTWORK_COUNT:
            return { ...state, FavoriteArtworkCount: action.favoriteArtworkCount }
        default:
            return state
    };
};