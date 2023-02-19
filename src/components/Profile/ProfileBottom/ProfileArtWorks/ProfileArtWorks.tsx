import React, { FC } from 'react';
import Artwork from '../../../Artwork/Artwork';
import s from './ProfileArtWorks.module.css';

const ProfileArtWorks: FC = () => {
    return (
        <div className={s.artworks}>
            <h3>Работы</h3>
            <div className={s.artworks__block}>
                <Artwork />
                <Artwork />
                <Artwork />
                <Artwork />
            </div>
        </div>
    );
};

export default ProfileArtWorks;