export interface PopularArtistsState {
    popularArtists: any[]
};

export enum PopularArtistsTypes {
    GET_POPULAR_ARTISTS = 'GET_POPULAR_ARTISTS'
};

interface GetPopularArtists {
    type: PopularArtistsTypes.GET_POPULAR_ARTISTS;
    payload: any[]
};

export type PopularArtistsActions = GetPopularArtists;