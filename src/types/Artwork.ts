export interface ArtworkState {
    Artwork: any
};

export enum ArtworkTypes {
    GET_ARTWORK = 'GET_ARTWORK'
};

interface getArtwork {
    type: ArtworkTypes.GET_ARTWORK;
    artwork: []
};

export type ArtworkAction = getArtwork;