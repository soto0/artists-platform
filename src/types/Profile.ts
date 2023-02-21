export interface ProfileState {
    LargePhoto?: string,
    Avatar?: string,
    Artworks?: []
};

export enum ProfileTypes {
    GET_PROFILE_DATA = 'GET_PROFILE_DATA',
};

interface getProfileData {
    type: ProfileTypes.GET_PROFILE_DATA;
    largePhoto?: string;
    avatar?: string;
    artworks?: []
};
export type ProfileAction = getProfileData;