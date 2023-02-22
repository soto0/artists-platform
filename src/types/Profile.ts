export interface ProfileState {
    LargePhoto?: string,
    Avatar?: string,
    Artworks?: [],
    Comments?: [],
    Countries?: [],
    Country?: string | undefined
};

export enum ProfileTypes {
    GET_PROFILE_DATA = 'GET_PROFILE_DATA',
    GET_COUNTRIES = 'GET_COUNTRIES'
};

interface getProfileData {
    type: ProfileTypes.GET_PROFILE_DATA;
    largePhoto?: string;
    avatar?: string;
    artworks?: [];
    comments?: [];
    country?: string;
};

interface getCountries {
    type: ProfileTypes.GET_COUNTRIES;
    countries?: []
};

export type ProfileAction = getProfileData | getCountries;