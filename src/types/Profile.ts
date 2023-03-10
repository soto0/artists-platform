export interface ProfileState {
    Artworks: [],
    Comments: [],
    Posts: [],
    FavoriteArtworks: [],
    Countries: [] | undefined,
    LargePhoto: string,
    Avatar: string,
    Country: string | undefined,
    Gender: string | undefined,
    Bio: string | undefined,
    Login: string | undefined,
    PostsStatistics: number,
    ArtworksStatistic: number,
    FavoritesStatistic: number,
    SubscriptionsStatistic: number
};

export enum ProfileTypes {
    GET_PROFILE_DATA = 'GET_PROFILE_DATA',
    GET_ARTWORKS = 'GET_ARTWORKS',
    GET_COMMENTS = 'GET_COMMENTS',
    GET_COUNTRIES = 'GET_COUNTRIES',
    GET_POSTS = 'GET_POSTS',
    GET_STATISTIC = 'GET_STATISTIC',
    GET_FAVORITES = 'GET_FAVORITES'
};

interface getProfileData {
    type: ProfileTypes.GET_PROFILE_DATA;
    largePhoto: string;
    avatar: string;
    country: string;
    gender: string;
    bio: string;
    login: string
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

interface  getStatistic {
    type: ProfileTypes.GET_STATISTIC;
    postsStatistic: number;
    artworksStatistic: number;
    favoritesStatistic: number;
    subscriptionsStatistic: number
}

interface getFavorites {
    type: ProfileTypes.GET_FAVORITES,
    favoriteArtworks: []
}

export type ProfileAction = getProfileData | getArtworks | getComments | getCountries | getPosts | getStatistic | getFavorites;

export interface PopupProps {
    popupActive: boolean;
    setPopupActive: any;
    LargePhoto?: string | undefined;
    userLogin: string | undefined;
    Avatar?: string | undefined;
    getProfileData: any;
    Country: string | undefined;
    Gender: string | undefined;
    Bio: string | undefined;
    login?: string | undefined;
};