import { ArtworkState, ArtworkAction, ArtworkTypes } from './../../types/Artwork';

const initialState: ArtworkState = {
    Artwork: []
};

export const ArtworkReducer = (state = initialState, action: ArtworkAction): ArtworkState => {
    switch (action.type) {
        case ArtworkTypes.GET_ARTWORK:
            return { ...state, Artwork: action.artwork}
        default: 
            return state
    };
};