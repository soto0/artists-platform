import { ProfileState, ProfileAction, ProfileTypes } from './../../types/Profile';

const initialState: ProfileState = {
    LargePhoto: "",
    Avatar: "",
    Artworks: [],
    Comments: []
};

export const ProfileReducer = (state = initialState, action: ProfileAction): ProfileState => {
    switch (action.type) {
        case ProfileTypes.GET_PROFILE_DATA:
            return { LargePhoto: action.largePhoto, Avatar: action.avatar, Artworks: action.artworks, Comments: action.comments }
        default: 
            return state
    };
};