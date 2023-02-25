import { ProfileState, ProfileAction, ProfileTypes } from './../../types/Profile';

const initialState: ProfileState = {
    LargePhoto: "",
    Avatar: "",
    Artworks: [],
    Comments: [],
    Countries: [],
    Country: "",
    Gender: "",
    Bio: "",
    Posts: [],
    Login: ""
};

export const ProfileReducer = (state = initialState, action: ProfileAction): ProfileState => {
    switch (action.type) {
        case ProfileTypes.GET_PROFILE_DATA:
            return { ...state,  LargePhoto: action.largePhoto, Avatar: action.avatar, Country: action.country, Gender: action.gender, Bio: action.bio, Login: action.login }
        case ProfileTypes.GET_ARTWORKS:
            return { ...state, Artworks: action.artworks }
        case ProfileTypes.GET_COMMENTS:
            return { ...state, Comments: action.comments }
        case ProfileTypes.GET_COUNTRIES:
            return { ...state, Countries: action.countries }
        case ProfileTypes.GET_POSTS:
            return { ...state, Posts: action.posts }
        default: 
            return state
    };
};