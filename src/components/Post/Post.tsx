import React, { FC, useEffect } from 'react';
import s from './Post.module.css';
import avatar from './../../assets/images/avatar.svg';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Comments from '../Comments/Commets';
import { usePostAction } from '../../hooks/useActions';

interface PostProps {
    Avatar: string;
    Name: string | undefined;
    postDate: string;
    postTitle: string;
    postText: string;
    id: number;
}

const Post: FC<PostProps> = (props) => {
    const { getPost } = usePostAction();
    const { userLogin } = useTypedSelector(state => state.Login);
    const { PostComments } = useTypedSelector(state => state.Post);
    const loginProfile = window.location.pathname.split('/').slice(2, 3).join('/');

    useEffect(() => {
        getPost();
    }, []);

    return (
        <div className={s.post}>
            <div className={s.post__top}>
                <img src={props.Avatar ? props.Avatar : avatar} alt={'avatar'} className={s.avatar} />
                <div className={s.post__top_text}>
                    <p className={s.name}>{props.Name}</p>
                    <p className={s.date}>{props.postDate}</p>
                </div>
                {
                    userLogin !== loginProfile ?
                        <button className={s.follow}>Отслеживать</button> :
                        undefined
                }
            </div>
            <div className={s.post__center}>
                <p className={s.post__title}>{props.postTitle}</p>
                <p className={s.post__text}>{props.postText}</p>
            </div>
            <div className={s.post__bottom}>
                <div className={s.сomments__block}>
                    <Comments userLogin={userLogin} commentId={props.id} dataName={'PostComments'} comments={PostComments} />
                </div>
            </div>
        </div>
    );
};

export default Post;