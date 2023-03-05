export interface FavoriteState {
    FavoriteArtwork: any,
    FavoriteArtworkCount: number
};

export enum FavoriteTypes {
    GET_FAVORITE_ARTWORK = 'GET_FAVORITE_ARTWORK',
    GET_FAVORITE_ARTWORK_COUNT = 'GET_FAVORITE_ARTWORK_COUNT'
};

interface getFavoriteArtwork {
    type: FavoriteTypes.GET_FAVORITE_ARTWORK,
    favoriteArtwork: []
};

interface getFavoriteCount {
    type: FavoriteTypes.GET_FAVORITE_ARTWORK_COUNT,
    favoriteArtworkCount: number
}

export type FavoriteAction = getFavoriteArtwork | getFavoriteCount;