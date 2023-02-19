import React, { FC } from 'react';
import Artwork from '../../../Artwork/Artwork';
import s from './ProfileFavorites.module.css';

const ProfileFavorites: FC = () => {
    return (
        <div className={s.favorites}>
            <h3>Избранное</h3>
            <div className={s.favorites__block}>
                <Artwork />
                <Artwork />
                <Artwork />
                <Artwork />
            </div>
        </div>
    );
};

export default ProfileFavorites;