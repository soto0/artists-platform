import { PostCommentsAction } from './../../types/Post';
import axios from 'axios';
import { Dispatch } from 'redux';
import { PostCommentsTypes } from '../../types/Post';

export const getPost = () => {
    return async (dispatch: Dispatch<PostCommentsAction>) => {
        const response = await axios.get('http://localhost:3001/PostComments');
        dispatch({ type: PostCommentsTypes.GET_POST_COMMENTS, postComments: response.data });
    };
};