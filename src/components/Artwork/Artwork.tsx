import React, { FC, useEffect } from 'react';
import s from './Artwork.module.css';
import comment from './../../assets/images/comment.svg';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Avatar from './../../assets/images/avatar.svg';
import Comments from '../Comments/Comments';
import FavoriteToggle from './FavoriteToggle/FavoriteToggle';
import LikeToggle from './LikeToggle/LikeToggle';
import FollowToggle from './../FollowToggle/FollowToggle';
import { Link } from 'react-router-dom';

const Artwork: FC = () => {
    const { getArtwork, getFavoriteArtwork, getFavoriteArtworkCount, getSubscription, getLikeArtwork, getLikeArtworkCount } = useActions();
    const ArtworkId = window.location.pathname.slice(9);
    const { Artwork } = useTypedSelector(state => state.Artwork);
    const { userLogin } = useTypedSelector(state => state.Login);
    const { ArtworkComments } = useTypedSelector(state => state.Artwork);

    useEffect(() => {
        getArtwork(ArtworkId);
        getFavoriteArtwork(ArtworkId, userLogin);
        getLikeArtwork(ArtworkId, userLogin);
        getFavoriteArtworkCount(ArtworkId);
        getLikeArtworkCount(ArtworkId);
        getSubscription(userLogin, Artwork.login);
    }, [userLogin, ArtworkId, Artwork.login]);


    return (
        <main>
            <div className={'container'}>
                <div className={s.artwork__top}>
                    <img src={Artwork.artworkImage} alt={'artwork__icon'} className={s.artwork__icon} />
                    <div className={s.artwork__top_info}>
                        <FavoriteToggle 
                            ArtworkId={ArtworkId} 
                            UserLogin={userLogin} 
                            Artwork={Artwork} 
                            GetFavoriteArtwork={getFavoriteArtwork} 
                            GetFavoriteArtworkCount={getFavoriteArtworkCount} 
                        />
                        <LikeToggle 
                            GetLikeArtwork={getLikeArtwork} 
                            ArtworkId={ArtworkId} 
                            UserLogin={userLogin}
                            GetLikeArtworkCount={getLikeArtworkCount}
                        />
                        <p className={s.comment__icon}>
                            <img src={comment} alt={'comment'} />
                            <a href={'#comments'}>Комментировать</a>
                        </p>
                    </div>
                </div>
                <div className={s.artwork__bottom}>
                    <div className={s.artwork__profile}>
                        <Link to={'/Profile/' + Artwork.login}>
                            <img src={Artwork.avatar ? Artwork.avatar : Avatar} alt={'avatar'} className={s.avatar} />
                        </Link>
                        <div className={s.artwork__text}>
                            <p className={s.artwork__title}>{Artwork.artworkName}</p>
                            <p className={s.artwork__profile_name}>Автор: {Artwork.login}</p>
                        </div>
                        {userLogin === Artwork.login ? undefined : <FollowToggle UserLogin={userLogin} Item={Artwork} User={Artwork.login} GetSubscription={getSubscription} />}
                    </div>
                    <div className={s.comments__block} id={'comments'} >
                        <Comments UserLogin={userLogin} CommentId={Artwork.id} DataName={'ArtworkComments'} Comments={ArtworkComments} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Artwork;