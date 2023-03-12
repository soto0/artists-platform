export interface LoginState {
    userLogin?: string,
    userPassword?: string,
    isAuth: boolean | undefined,
};

export enum LoginTypes {
    GET_USER_LOGIN = 'GET_USER_LOGIN',
    GET_EXIT_LOGIN = 'GET_EXIT_LOGIN'
};

interface GetUserLogin {
    type: LoginTypes,
    login?: string,
    password?: string,
    isAuth?: boolean,
};

export type LoginActions = GetUserLogin;
