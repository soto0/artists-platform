import { LoginState, LoginActions, LoginTypes } from './../../types/Login';

const initialState: LoginState = {
    userLogin: '',
    userPassword: '',
    isAuth: false,
}

export const LoginReducer = (state = initialState, action: LoginActions): LoginState => {
    switch (action.type) {
        case LoginTypes.GET_USER_LOGIN: 
            return { userLogin: action.login, userPassword: action.password, isAuth: true}
        default: 
            return state
    };
};