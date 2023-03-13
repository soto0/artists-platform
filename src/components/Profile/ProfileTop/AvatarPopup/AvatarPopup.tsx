import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { FC, useState } from 'react';
import { PopupProps } from '../../../../types/Profile';
import upload from './../../../../assets/images/upload.svg';


const AvatarPopup: FC<PopupProps> = (props) => {
    const [avatarImage, setAvatarImage] = useState<any>();
    const [avatarUrl, setAvatarUrl] = useState<any>();

    const avatarReader = new FileReader();

    if (avatarImage) {
        avatarReader.readAsDataURL(avatarImage);
    };

    avatarReader.onloadend = () => {
        setAvatarUrl(avatarReader.result);
    };

    return (
        <div className={props.PopupActive ? 'popup' : 'popup_active'}>
            <div className={'popup__top'}>
                <h2 className={'title'}>Добавьте аватар</h2>
            </div>
            <Formik
                initialValues={{ avatar: '' }}
                onSubmit={async values => {
                    if (avatarUrl) {
                        await axios.put('http://localhost:3001/Profile/' + props.UserLogin,
                            { 
                                id: props.UserLogin, 
                                login: props.UserLogin, 
                                largePhoto: props.LargePhoto,
                                avatar: avatarUrl, 
                                country: props.Country, 
                                gender: props.Gender, 
                                bio: props.Bio 
                            },
                            { withCredentials: true });
                    };

                    props.GetProfileData(props.UserLogin);
                    props.SetPopupActive(true);
                }}
            >
                {({ isValid }) => (
                    <Form>
                        <label htmlFor={'change_avatar'} className={'change__icon_block'}>
                            <img src={upload} alt={'upload'} className={'upload__icon'} />
                            <p className={'add__icon_text'}>Добавьте аватар</p>
                            <Field
                                type={'file'}
                                name={'file'}
                                onChange={(event: any) => {
                                    setAvatarImage(event.currentTarget.files[0]);
                                }}
                                accept={"image/*,.png,jpg"}
                                id={'change_avatar'}
                                className={'change_icon'}
                            />
                        </label>
                        <button className={'upload__button'} disabled={!isValid} type={'submit'}>Обновить</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AvatarPopup;
