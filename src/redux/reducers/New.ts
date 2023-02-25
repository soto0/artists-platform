import { NewState, NewAction, NewTypes } from './../../types/New';

const initialState: NewState = {
    New: []
};

export const NewReducer = (state = initialState, action: NewAction): NewState => {
    switch (action.type) {
        case NewTypes.GET_NEW:
            return { ...state, New: action.new }
        default: 
            return state
    }
}