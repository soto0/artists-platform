export interface NewState {
    NewArtworks: [];
    NewPosts: [];
};

export enum NewTypes {
    GET_NEW_ARTWORKS = 'GET_NEW_ARTWORKS',
    GET_NEW_POSTS = 'GET_NEW_POSTS'
};

interface getNewArtworks {
    type: NewTypes.GET_NEW_ARTWORKS;
    newArtworks: [];
};

interface getNewPosts {
    type: NewTypes.GET_NEW_POSTS,
    newPosts: [];
}

export type NewAction = getNewArtworks | getNewPosts;