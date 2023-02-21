import React, { FC, useState } from 'react';
import s from './ProfileMain.module.css';
import upload from './../../../../assets/images/upload.svg';
import avatar from './../../../../assets/images/avatar.svg';
import UploadJobPopup from './UploadJobPopup/UploadJobPopup';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import Artwork from '../../../Artwork/Artwork';

const ProfileMain: FC = () => {
    const { Artworks, Avatar } = useTypedSelector(state => state.Profile);
    const { userLogin } = useTypedSelector(state => state.Login);
    const [ ArtworkPopupActive, setArtworkPopupActive ] = useState(true);

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
                                            <Artwork name={userLogin} key={userLogin} avatar={Avatar} artworkName={artwork.artworkName} artworkImage={artwork.artworkImage} />
                                        )
                                    })
                                }
                           </div>
                            :
                            <div className={s.upload__artworks}>
                                <img src={upload} alt={'upload__artwork'} className={s.upload__artworks_icon} />
                                <p className={s.upload__artwork_text}>Загрузить работу</p>
                                <button className={s.upload__artwork_button} onClick={onClickAddArtwork}>Загрузить</button>
                            </div>
                    }
                </div>
                <div className={s.about}>
                    <h3>Обо мне</h3>
                    <div className={s.about__block}>
                        <div className={s.about__block_top}>
                            <div className={s.about__block_info}>
                                <p className={s.address}>Россия</p>
                                <p className={s.gender}>Мужчина</p>
                            </div>
                        </div>
                        <div className={s.about__block__bio}>
                            <h4 className={s.title}>Биография</h4>
                            <p className={s.bio}>Начинающий фронтенд разработчик данного сайта! И немного художник.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.main__bottom}>
                <h3>Комментарии</h3>
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
                            <div className={s.comment__text}>Привет первый тест комментарией</div>
                        </div>
                    </div>
                </div>
            </div>
            <UploadJobPopup ArtworkPopupActive={ArtworkPopupActive} />
            <div onClick={onClickAddArtwork} className={ArtworkPopupActive ? s.popup__back : s.popup__back_active}></div>
        </div>
    );
};

export default ProfileMain;