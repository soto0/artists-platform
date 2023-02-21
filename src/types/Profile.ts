export interface ProfileState {
    LargePhoto?: string,
    Avatar?: string,
    Artworks?: [],
    Comments?: []
};

export enum ProfileTypes {
    GET_PROFILE_DATA = 'GET_PROFILE_DATA',
};

interface getProfileData {
    type: ProfileTypes.GET_PROFILE_DATA;
    largePhoto?: string;
    avatar?: string;
    artworks?: [];
    comments?: []
};
export type ProfileAction = getProfileData;