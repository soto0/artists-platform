import React, { FC, useEffect } from 'react';
import { useProfileAction } from '../../../../hooks/useActions';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import ArtworkSmall from '../../../ArtworkSmall/ArtworkSmall';
import s from './ProfileFavorites.module.css';

const ProfileFavorites: FC = () => {
    const { FavoriteArtworks } = useTypedSelector(state => state.Profile);
    const { getFavorites } = useProfileAction();
    const loginProfile = window.location.pathname.split('/').slice(2, 3).join('/');

    useEffect(() => {
        getFavorites(loginProfile);
    }, []);

    return (
        <div className={s.favorites}>
            <h3>Избранное</h3>
            <div className={s.favorites__block}>
                {
                    FavoriteArtworks?.map((favorite: any) => {
                        return (
                            <ArtworkSmall id={favorite.id} name={favorite.favoriteArtworkAuthor} artworkName={favorite.favoriteArtworkName} artworkImage={favorite.FavoriteArtworkImage} avatar={favorite.favoriteArtworkAuthorAvatar} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProfileFavorites;