import React, { FC, useEffect, useState } from 'react';
import { useProfileAction } from '../../../../hooks/useActions';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import Artwork from '../../../Artwork/Artwork';
import UploadJobPopup from '../UploadJobPopup/UploadJobPopup';
import s from './ProfileArtWorks.module.css';

const ProfileArtWorks: FC = () => {
    const { Artworks, Avatar } = useTypedSelector(state => state.Profile);
    const { userLogin } = useTypedSelector(state => state.Login);
    const [ ArtworkPopupActive, setArtworkPopupActive ] = useState(true);
    const { getArtworks } = useProfileAction();
    const loginProfile = window.location.pathname.split('/').slice(2, 3).join('/');

    let onClickAddArtwork = () => {
        setArtworkPopupActive(!ArtworkPopupActive);
    };

    useEffect(() => {
        getArtworks(loginProfile);
    }, []);

    return (
        <div className={s.artworks}>
            <div className={s.artworks__top}>
                <h3>Работы</h3>
                {
                    userLogin !== loginProfile ?
                    undefined :
                    <button className={s.add__artwork} onClick={onClickAddArtwork}>Добавить работу</button> 
                }
            </div>
            <div className={s.artworks__block}>
                {
                    Artworks?.map((artwork: any) => {
                        return (
                            <Artwork name={loginProfile} key={userLogin} avatar={Avatar} artworkName={artwork.artworkName} artworkImage={artwork.artworkImage} />
                        )
                    })
                }
            </div>
            <UploadJobPopup ArtworkPopupActive={ArtworkPopupActive} setArtworkPopupActive={setArtworkPopupActive} />
        </div>
    );
};

export default ProfileArtWorks;