export interface ArtworkState {
    Artwork: any,
    ArtworkComments: []
};

export enum ArtworkTypes {
    GET_ARTWORK = 'GET_ARTWORK',
};

interface getArtwork {
    type: ArtworkTypes.GET_ARTWORK;
    artwork: [],
    artworkComments: []
};

export type ArtworkAction = getArtwork;