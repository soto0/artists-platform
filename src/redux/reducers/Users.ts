import { UsersAction, UsersState, UsersTypes } from "../../types/Users";

const initialState: UsersState = {
    Users: []
};

export const UsersReducer = (state = initialState, action: UsersAction): UsersState => {
    switch (action.type) {
        case UsersTypes.GET_USERS: 
            return { ...state, Users: action.users}
        default: 
            return state
    }
}