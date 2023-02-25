export interface ProfileState {
    LargePhoto: string,
    Avatar: string,
    Artworks: [],
    Comments: [],
    Countries: [] | undefined,
    Country: string | undefined,
    Gender: string | undefined,
    Bio: string | undefined,
    Posts: []
};

export enum ProfileTypes {
    GET_PROFILE_DATA = 'GET_PROFILE_DATA',
    GET_ARTWORKS = 'GET_ARTWORKS',
    GET_COMMENTS = 'GET_COMMENTS',
    GET_COUNTRIES = 'GET_COUNTRIES',
    GET_POSTS = 'GET_POSTS'
};

interface getProfileData {
    type: ProfileTypes.GET_PROFILE_DATA;
    largePhoto: string;
    avatar: string;
    country: string;
    gender: string;
    bio: string
};

interface getArtworks {
    type: ProfileTypes.GET_ARTWORKS;
    artworks: [];
};

interface getComments {
    type: ProfileTypes.GET_COMMENTS;
    comments: [];
};

interface getCountries {
    type: ProfileTypes.GET_COUNTRIES;
    countries: [];
};

interface getPosts {
    type: ProfileTypes.GET_POSTS;
    posts: [];
}

export type ProfileAction = getProfileData | getArtworks | getComments | getCountries | getPosts;

export interface PopupProps {
    popupActive: boolean;
    setPopupActive: any;
    LargePhoto?: string | undefined;
    userLogin: string | undefined;
    Avatar?: string | undefined;
    getProfileData: any;
    Country: string | undefined;
    Gender: string | undefined;
    Bio: string | undefined
};