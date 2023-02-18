import React, { FC } from 'react';
import s from './../Popup.module.css';
import upload from './../../../../assets/images/upload.svg';

interface AvatarPopupProps {
    avatarPopupActive: boolean;
    setAvatar: any;
    uploadAvatar: any
};

const AvatarPopup: FC<AvatarPopupProps> = (props) => {
    return (
        <div className={props.avatarPopupActive ? s.popup : s.popup_active}>
            <div className={s.popup__top}>
                <h2 className={s.title}>Добавьте аватар</h2>
            </div>
            <label htmlFor={'change_avatar'} className={s.change__icon_block}>
                <img src={upload} alt={'upload'} className={s.upload__icon} />
                <p className={s.add__icon_text}>Добавьте аватар</p>
                <input type={'file'}  name={'file'} accept={"image/*,.png,jpg"} onChange={props.uploadAvatar} id={'change_avatar'} className={s.change_icon} />
            </label>
            <button className={s.upload__button} onClick={props.setAvatar} type={'submit'}>Обновить</button>
        </div>
    );
};

export default AvatarPopup;
