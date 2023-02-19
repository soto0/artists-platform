import React, { FC } from 'react';
import s from './ProfilePosts.module.css';
import avatar from './../../../../assets/images/avatar.svg';
import Post from '../../../Post/Post';

const ProfilePosts: FC = () => {
    return (
        <div className={s.posts__block}>
            <div className={s.posts__top}>
                <img src={avatar} alt={'avatar'} className={s.avatar} />
                <div className={s.add__post_block}>
                    <h3 className={s.title__post}>Заголовок поста</h3>
                    <input name={'post'} className={s.add__post_title}></input>
                    <h3 className={s.text__post}>Текст поста</h3>
                    <textarea name={'post'} className={s.add__post}></textarea>
                    <button className={s.submit__post}>Добавить пост</button>
                </div>
            </div>
            <div className={s.posts__bottom}>
                <Post />
            </div>
        </div>
    );
};

export default ProfilePosts;