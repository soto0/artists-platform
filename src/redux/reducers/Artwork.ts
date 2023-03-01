import { ArtworkState, ArtworkAction, ArtworkTypes } from './../../types/Artwork';

const initialState: ArtworkState = {
    Artwork: [],
    ArtworkComments: []
};

export const ArtworkReducer = (state = initialState, action: ArtworkAction): ArtworkState => {
    switch (action.type) {
        case ArtworkTypes.GET_ARTWORK:
            return { ...state, Artwork: action.artwork, ArtworkComments: action.artworkComments }
        default: 
            return state
    };
};