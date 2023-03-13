import React, { FC, useEffect } from 'react';
import s from './Post.module.css';
import avatar from './../../assets/images/avatar.svg';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Comments from '../Comments/Comments';
import { useActions } from '../../hooks/useActions';
import FollowToggle from '../FollowToggle/FollowToggle';

interface PostProps {
    Avatar: string;
    Name: string | undefined;
    PostDate: string;
    PostTitle: string;
    PostText: string;
    Id: number;
};

const Post: FC<PostProps> = (props) => {
    const { getPost, getSubscription } = useActions();
    const { userLogin } = useTypedSelector(state => state.Login);
    const { PostComments } = useTypedSelector(state => state.Post);
    const loginProfile = window.location.pathname.split('/').slice(2, 3).join('/');

    useEffect(() => {
        getPost();
        getSubscription(userLogin, props.Name);
    }, [props.Name]);

    return (
        <div className={s.post}>
            <div className={s.post__top}>
                <img src={props.Avatar ? props.Avatar : avatar} alt={'avatar'} className={s.avatar} />
                <div className={s.post__top_text}>
                    <p className={s.name}>{props.Name}</p>
                    <p className={s.date}>{props.PostDate}</p>
                </div>
                {
                    userLogin !== loginProfile ?
                        <FollowToggle 
                            UserLogin={userLogin} 
                            Item={props.Name} 
                            User={props.Name} 
                            GetSubscription={getSubscription} 
                        /> :
                        undefined
                }
            </div>
            <div className={s.post__center}>
                <p className={s.post__title}>{props.PostTitle}</p>
                <p className={s.post__text}>{props.PostText}</p>
            </div>
            <div className={s.post__bottom}>
                <div className={s.comments__block}>
                    <Comments 
                        UserLogin={userLogin} 
                        CommentId={props.Id} 
                        DataName={'PostComments'} 
                        Comments={PostComments} 
                    />
                </div>
            </div>
        </div>
    );
};

export default Post;