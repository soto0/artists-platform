export interface UsersState {
    Users: []
};

export enum UsersTypes {
    GET_USERS = 'GET_USERS'
};

interface getUsers {
    type: UsersTypes.GET_USERS;
    users: [];
};

export type UsersAction = getUsers;