import React, { FC, useState } from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import Artwork from '../../../Artwork/Artwork';
import UploadJobPopup from '../UploadJobPopup/UploadJobPopup';
import s from './ProfileArtWorks.module.css';

const ProfileArtWorks: FC = () => {
    const { Artworks, Avatar } = useTypedSelector(state => state.Profile);
    const { userLogin } = useTypedSelector(state => state.Login);
    const [ ArtworkPopupActive, setArtworkPopupActive ] = useState(true);
    const loginProfile = window.location.pathname.slice(9);
    
    const userLoginText = '/' +  userLogin + '/Artworks';

    let onClickAddArtwork = () => {
        setArtworkPopupActive(!ArtworkPopupActive);
    };

    return (
        <div className={s.artworks}>
            <div className={s.artworks__top}>
                <h3>Работы</h3>
                {
                    userLoginText !== loginProfile ?
                    undefined :
                    <button className={s.add__artwork} onClick={onClickAddArtwork}>Добавить работу</button> 
                }
            </div>
            <div className={s.artworks__block}>
                {
                    Artworks?.map((artwork: any) => {
                        return (
                            <Artwork name={userLogin} key={userLogin} avatar={Avatar} artworkName={artwork.artworkName} artworkImage={artwork.artworkImage} />
                        )
                    })
                }
            </div>
            <UploadJobPopup ArtworkPopupActive={ArtworkPopupActive} setArtworkPopupActive={setArtworkPopupActive} />
        </div>
    );
};

export default ProfileArtWorks;