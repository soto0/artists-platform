import React, { FC, useEffect, useState } from 'react';
import s from './ProfileMain.module.css';
import upload from './../../../../assets/images/upload.svg';
import UploadJobPopup from '../UploadJobPopup/UploadJobPopup';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import Artwork from '../../../Artwork/Artwork';
import Comments from './Comments/Commets';
import { useProfileAction } from '../../../../hooks/useActions';

const ProfileMain: FC = () => {
    const { Artworks, Avatar, Country, Gender, Bio, Login } = useTypedSelector(state => state.Profile);
    const { userLogin } = useTypedSelector(state => state.Login);
    const [ ArtworkPopupActive, setArtworkPopupActive ] = useState(true);
    const loginProfile = window.location.pathname.slice(9);
    const { getComments } = useProfileAction();

    useEffect(() => {
        getComments(loginProfile);
    }, []);

    let onClickAddArtwork = () => {
        setArtworkPopupActive(!ArtworkPopupActive);
    };

    return (
        <div className={s.wrapper}>
            <div className={s.main__top}>
                <div className={s.artworks}>
                    <h3>Работы</h3>
                    {
                        Artworks?.length !== 0 ?
                            <div className={s.artworks__block}>
                                {
                                    Artworks?.map((artwork: any) => {
                                        return (
                                            <Artwork name={loginProfile} key={userLogin} avatar={Avatar} artworkName={artwork.artworkName} artworkImage={artwork.artworkImage} />
                                        )
                                    })
                                }
                            </div>
                            :
                            userLogin !== loginProfile ?
                                undefined :
                                <div className={s.upload__artworks}>
                                    <img src={upload} alt={'upload__artwork'} className={s.upload__artworks_icon} />
                                    <p className={s.upload__artwork_text}>Загрузить первую работу</p>
                                    <button className={s.upload__artwork_button} onClick={onClickAddArtwork}>Загрузить</button>
                                    <UploadJobPopup ArtworkPopupActive={ArtworkPopupActive} setArtworkPopupActive={setArtworkPopupActive} />
                                    <div onClick={onClickAddArtwork} className={ArtworkPopupActive ? s.popup__back : s.popup__back_active}></div>
                                </div>
                    }
                </div>
                <div className={s.about}>
                    <h3>Обо мне</h3>
                    <div className={s.about__block}>
                        <div className={s.about__block_top}>
                            <div className={s.about__block_info}>
                                <p className={s.address}>{Country  ? Country : 'Не выбрана'}</p>
                                <p className={s.gender}>{Gender ? Gender : 'Не выбран'}</p>
                            </div>
                        </div>
                        <div className={s.about__block__bio}>
                            <h4 className={s.title}>Биография</h4>
                            <p className={s.bio}>{Bio ? Bio : 'Нет'}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.main__bottom}>
                <h3>Комментарии</h3>
                <Comments userLogin={userLogin} Avatar={Avatar} Login={Login} />
            </div>
        </div>
    );
};

export default ProfileMain;