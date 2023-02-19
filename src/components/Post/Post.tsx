import React, { FC } from 'react';
import s from './Post.module.css';
import avatar from './../../assets/images/avatar.svg';

const Post: FC = () => {
    return (
        <div className={s.post}>
            <div className={s.post__top}>
                <img src={avatar} alt={'avatar'} className={s.avatar} />
                <div className={s.post__top_text}>
                    <p className={s.name}>test</p>
                    <p className={s.date}>Dec 15, 2022</p>
                </div>
                <button className={s.follow}>Отслеживать</button>
            </div>
            <div className={s.post__center}>
                <p className={s.post__title}>Крутая платформа</p>
                <p className={s.post__text}>платформа для художников очень крутая</p>
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