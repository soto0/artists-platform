import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { FC, useState } from 'react';
import upload from './../../../../assets/images/upload.svg';

interface LargePhotoPopupProps {
    popupActive: boolean;
    setPopupActive: any;
    userLogin: string | undefined;
    Avatar: string | undefined;
    getProfileData: any;
};

const LargePhotoPopup: FC<LargePhotoPopupProps> = (props) => {
    const [largeImage, setLargeImage] = useState<any>();
    const [imageUrl, setImageUrl] = useState<any>();

    const fileReader = new FileReader();

    if (largeImage) {
        fileReader.readAsDataURL(largeImage);
    };

    fileReader.onloadend = () => {
        setImageUrl(fileReader.result);
    };

    return (
        <div className={props.popupActive ? 'popup' : 'popup_active'}>
            <div className={'popup__top'}>
                <h2 className={'title'}>Добавьте изображение профиля</h2>
            </div>
            <Formik
                initialValues={{ largePhoto: '' }}
                onSubmit={async values => {
                    if (imageUrl) {
                        await axios.put('http://localhost:3001/Profile/' + props.userLogin,
                            { id: props.userLogin, login: props.userLogin, largePhoto: imageUrl, avatar: props.Avatar },
                            { withCredentials: true });
                    };

                    props.getProfileData(props.userLogin);
                    props.setPopupActive(true);
                }}
            >
                {({ isValid }) => (
                    <Form>
                        <label htmlFor={'change_icon'} className={'change__icon_block'}>
                            <img src={upload} alt={'upload'} className={'upload__icon'} />
                            <p className={'add__icon_text'}>Добавьте изображение</p>
                            <Field
                                type={'file'}
                                name={'file'}
                                onChange={(event: any) => {
                                    setLargeImage(event.currentTarget.files[0]);
                                }}
                                accept={"image/*,.png,jpg"}
                                id={'change_icon'}
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

export default LargePhotoPopup;
