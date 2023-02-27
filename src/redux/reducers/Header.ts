import { HeaderState, HeaderAction, HeaderTypes } from '../../types/Header';

const initialState: HeaderState = {
    Avatar: "",
};

export const HeaderReducer = (state = initialState, action: HeaderAction): HeaderState => {
    switch (action.type) {
        case HeaderTypes.GET_AVATAR:
            return { ...state, Avatar: action.avatar}
        default: 
            return state
    };
};