import React, { FC } from 'react';
import upload from './../../../../assets/images/upload.svg';

interface LargePhotoPopupProps {
    popupActive: boolean;
    setImage: any;
    uploadImage: any
};

const LargePhotoPopup: FC<LargePhotoPopupProps> = (props) => {
    return (
        <div className={props.popupActive ? 'popup' : 'popup_active'}>
            <div className={'popup__top'}>
                <h2 className={'title'}>Добавьте изображение профиля</h2>
            </div>
            <label htmlFor={'change_icon'} className={'change__icon_block'}>
                <img src={upload} alt={'upload'} className={'upload__icon'} />
                <p className={'add__icon_text'}>Добавьте изображение</p>
                <input type={'file'}  name={'file'} accept={"image/*,.png,jpg"} onChange={props.uploadImage} id={'change_icon'} className={'change_icon'} />
            </label>
            <button className={'upload__button'} onClick={props.setImage} type={'submit'}>Обновить</button>
        </div>
    );
};

export default LargePhotoPopup;
