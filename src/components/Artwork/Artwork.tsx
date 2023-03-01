import React, { FC, useEffect } from 'react';
import s from './Artwork.module.css';
import favorite from './../../assets/images/favorite.svg';
import like from './../../assets/images/like.svg';
import comment from './../../assets/images/comment.svg';
import { useArtworkAction } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Avatar from './../../assets/images/avatar.svg';
import Comments from '../Comments/Commets';

const Artwork: FC = () => {
    const { getArtwork } = useArtworkAction();
    const { Artwork } = useTypedSelector(state => state.Artwork);
    const { userLogin } = useTypedSelector(state => state.Login);
    const loginProfile = window.location.pathname.slice(9);
    const { ArtworkComments } = useTypedSelector(state => state.Artwork);

    useEffect(() => {
        getArtwork(loginProfile);
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
                        <img src={Artwork.avatar ? Artwork.avatar : Avatar} alt={'avatar'} className={s.avatar} />
                        <div className={s.artwork__text}>
                            <p className={s.artwork__title}>{Artwork.artworkName}</p>
                            <p className={s.artwork__profile_name}>Автор: {Artwork.login}</p>
                        </div>
                       {
                         userLogin !== Artwork.login ?
                         <button className={s.follow}>Отслеживать</button> : 
                         undefined
                       }
                    </div>
                    <div className={s.сomments__block}>
                        <Comments userLogin={userLogin} commentId={Artwork.id}  dataName={'ArtworkComments'} comments={ArtworkComments} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Artwork;