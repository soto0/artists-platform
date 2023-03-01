import { PostCommentsState, PostCommentsAction, PostCommentsTypes } from './../../types/Post';

const initialState: PostCommentsState = {
    PostComments: [],
};

export const PostReducer = (state = initialState, action: PostCommentsAction): PostCommentsState => {
    switch (action.type) {
        case PostCommentsTypes.GET_POST_COMMENTS:
            return { ...state, PostComments: action.postComments }
        default:
            return state        
    }
}