export interface HeaderState {
    Avatar: string,
};

export enum HeaderTypes {
    GET_AVATAR = 'GET_AVATAR'
};

interface getAvatar {
    type: HeaderTypes.GET_AVATAR;
    avatar: string;
};

export type HeaderAction = getAvatar;