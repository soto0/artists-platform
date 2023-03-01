export interface PostCommentsState {
    PostComments: [],
};

export enum PostCommentsTypes {
    GET_POST_COMMENTS = 'GET_POST_COMMENTS',
};

interface getPostComments {
    type: PostCommentsTypes.GET_POST_COMMENTS;
    postComments: [],
};

export type PostCommentsAction = getPostComments;