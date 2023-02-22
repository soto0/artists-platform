import React, { FC } from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import Artwork from '../../../Artwork/Artwork';
import s from './ProfileArtWorks.module.css';

const ProfileArtWorks: FC = () => {
    const { Artworks, Avatar } = useTypedSelector(state => state.Profile);
    const { userLogin } = useTypedSelector(state => state.Login);

    return (
        <div className={s.artworks}>
            <h3>Работы</h3>
            <div className={s.artworks__block}>
                {
                    Artworks?.map((artwork: any) => {
                        return (
                            <Artwork name={userLogin} key={userLogin} avatar={Avatar} artworkName={artwork.artworkName} artworkImage={artwork.artworkImage} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProfileArtWorks;