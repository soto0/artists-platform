export interface ProfileState {
    LargePhoto?: string | undefined,
    Avatar?: string | undefined
};

export enum ProfileTypes {
    GET_PROFILE_DATA = 'GET_PROFILE_DATA',
};

interface getProfileData {
    type: ProfileTypes.GET_PROFILE_DATA;
    largePhoto: string;
    avatar: string;
};


export type ProfileAction = getProfileData;