import { NewState, NewAction, NewTypes } from './../../types/New';

const initialState: NewState = {
    NewArtworks: [],
    NewPosts: []
};

export const NewReducer = (state = initialState, action: NewAction): NewState => {
    switch (action.type) {
        case NewTypes.GET_NEW_ARTWORKS:
            return { ...state, NewArtworks: action.newArtworks }
        case NewTypes.GET_NEW_POSTS:
            return { ...state, NewPosts: action.newPosts }
        default: 
            return state
    }
}