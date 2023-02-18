export interface LoginState {
    userLogin?: string,
    userPassword?: string,
    isAuth: boolean,
};

export enum LoginTypes {
    GET_USER_LOGIN = 'GET_USER_LOGIN'
};

interface GetUserLogin {
    type: LoginTypes.GET_USER_LOGIN,
    login?: string,
    password?: string,
    isAuth?: boolean,
};

export type LoginActions = GetUserLogin;
