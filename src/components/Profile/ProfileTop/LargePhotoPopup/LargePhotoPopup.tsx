import React, { FC } from 'react';
import s from './../Popup.module.css';
import upload from './../../../../assets/images/upload.svg';

interface LargePhotoPopupProps {
    popupActive: boolean;
    setImage: any;
    uploadImage: any
};

const LargePhotoPopup: FC<LargePhotoPopupProps> = (props) => {
    return (
        <div className={props.popupActive ? s.popup : s.popup_active}>
            <div className={s.popup__top}>
                <h2 className={s.title}>Добавьте изображение профиля</h2>
            </div>
            <label htmlFor={'change_icon'} className={s.change__icon_block}>
                <img src={upload} alt={'upload'} className={s.upload__icon} />
                <p className={s.add__icon_text}>Добавьте изображение</p>
                <input type={'file'}  name={'file'} accept={"image/*,.png,jpg"} onChange={props.uploadImage} id={'change_icon'} className={s.change_icon} />
            </label>
            <button className={s.upload__button} onClick={props.setImage} type={'submit'}>Обновить</button>
        </div>
    );
};

export default LargePhotoPopup;
