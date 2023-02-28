import React, { FC } from 'react';
import s from './Post.module.css';
import avatar from './../../assets/images/avatar.svg';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface PostProps {
    Avatar: string;
    Name: string | undefined;
    postDate: string;
    postTitle: string;
    postText: string;
}

const Post: FC<PostProps> = (props) => {
    const { userLogin } = useTypedSelector(state => state.Login);
    const loginProfile = window.location.pathname.split('/').slice(2, 3).join('/');

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
                <textarea name={'comments'} className={s.comments__text}></textarea>
                <button className={s.submit__comment}>Отправить комментарий</button>
                <div className={s.comments}>
                    <div className={s.comment}>
                        <img src={avatar} className={s.comment__avatar} />
                        <div className={s.comment__body}>
                            <div className={s.comment__top}>
                                <p className={s.comment__name}>test</p>
                                <p className={s.comment__date}>14 Ян. 15:03</p>
                            </div>
                            <div className={s.comment__text}>Привет первый тест комментарией постов</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;