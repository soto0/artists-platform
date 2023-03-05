export interface LikeState {
    LikeArtwork: any,
    LikeArtworkCount: number
};

export enum LikeTypes {
    GET_LIKE_ARTWORK = 'GET_LIKE_ARTWORK',
    GET_LIKE_ARTWORK_COUNT = 'GET_LIKE_ARTWORK_COUNT'
};

interface getLikeArtwork {
    type: LikeTypes.GET_LIKE_ARTWORK,
    likeArtwork: []
};

interface getLikeCount {
    type: LikeTypes.GET_LIKE_ARTWORK_COUNT,
    likeArtworkCount: number
}
export type LikeAction = getLikeArtwork | getLikeCount;