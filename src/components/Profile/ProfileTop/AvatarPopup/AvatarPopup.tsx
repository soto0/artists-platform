import React, { FC } from 'react';
import upload from './../../../../assets/images/upload.svg';

interface AvatarPopupProps {
    avatarPopupActive: boolean;
    setAvatar: any;
    uploadAvatar: any
};

const AvatarPopup: FC<AvatarPopupProps> = (props) => {
    return (
        <div className={props.avatarPopupActive ? 'popup' : 'popup_active'}>
            <div className={'popup__top'}>
                <h2 className={'title'}>Добавьте аватар</h2>
            </div>
            <label htmlFor={'change_avatar'} className={'change__icon_block'}>
                <img src={upload} alt={'upload'} className={'upload__icon'} />
                <p className={'add__icon_text'}>Добавьте аватар</p>
                <input type={'file'}  name={'file'} accept={"image/*,.png,jpg"} onChange={props.uploadAvatar} id={'change_avatar'} className={'change_icon'} />
            </label>
            <button className={'upload__button'} onClick={props.setAvatar} type={'submit'}>Обновить</button>
        </div>
    );
};

export default AvatarPopup;
