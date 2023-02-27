import React, { FC, useEffect } from 'react';
import s from './Artwork.module.css';
import image from './../../assets/images/test.jpg'
import favorite from './../../assets/images/favorite.svg';
import like from './../../assets/images/like.svg';
import comment from './../../assets/images/comment.svg';
import avatar from './../../assets/images/avatar.svg';
import { useArtworkAction } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Artwork: FC = () => {
    const { getArtwork} = useArtworkAction();
    const { Artwork } = useTypedSelector(state => state.Artwork)

    useEffect(() => {
        const url = window.location.pathname.slice(9);
        getArtwork(url);
    }, []);

    return (
        <main>
            <div className={'container'}>
                <div className={s.artwork__top}>
                    <img src={Artwork.artworkImage} alt={'artwork__icon'} className={s.artwork__icon} />
                    <div className={s.artwork__top_info}>
                        <p className={s.favorite}>
                            <img src={favorite} alt={'favorite'} />
                            <span>Добавить в избранное</span>
                        </p>
                        <img src={like} alt={'like'} className={s.like} />
                        <p className={s.comment__icon}>
                            <img src={comment} alt={'comment'} />
                            <span>Комментировать</span>
                        </p>
                    </div>
                </div>
                <div className={s.artwork__bottom}>
                    <div className={s.artwork__profile}>
                        <img src={Artwork.avatar} alt={'avatar'} className={s.avatar} />
                        <div className={s.artwork__text}>
                            <p className={s.artwork__title}>{Artwork.artworkName}</p>
                            <p className={s.artwork__profile_name}>Автор: {Artwork.login}</p>
                        </div>
                        <button className={s.follow}>Отслеживать</button>
                    </div>
                    <div className={s.сomments__block}>
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
            </div>
        </main>
    );
};

export default Artwork;