import { ProfileState, ProfileAction, ProfileTypes } from './../../types/Profile';

const initialState: ProfileState = {
    LargePhoto: "",
    Avatar: ""
};

export const ProfileReducer = (state = initialState, action: ProfileAction): ProfileState => {
    switch (action.type) {
        case ProfileTypes.GET_PROFILE_DATA:
            return { LargePhoto: action.largePhoto, Avatar: action.avatar }
        default: 
            return state
    };
};