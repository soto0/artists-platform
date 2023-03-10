import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { FC, useState } from 'react';
import * as yup from 'yup';
import { useActions } from '../../../../hooks/useActions';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import upload from './../../../../assets/images/upload.svg';
import CategorySelector from './CategorySelector/CategorySelector';


interface UploadJobPopupProps {
    ArtworkPopupActive: boolean;
    SetArtworkPopupActive: any;
};

const UploadJobPopup: FC<UploadJobPopupProps> = (props) => {
    const [artworkUrl, setArtworkUrl] = useState<any>();
    const [artworkImage, setArtworkImage] = useState<any>();
    const { userLogin } = useTypedSelector(state => state.Login);
    const { Avatar } = useTypedSelector(state => state.Profile);
    const { getArtworks } = useActions();
    const [ category, setCategory ] = useState();
    const [ categorySelectorActive, setCategorySelectorActive ] = useState(true);
    const loginProfile = window.location.pathname.slice(9);

    const validationSchema = yup.object().shape({
        artwork_name: yup.string().required('Заполните поле')
    });

    const artworkReader = new FileReader();

    if (artworkImage) {
        artworkReader.readAsDataURL(artworkImage);
    };

    artworkReader.onloadend = () => {
        setArtworkUrl(artworkReader.result);
    };

    return (
        <div className={props.ArtworkPopupActive ? 'popup' : 'popup_active'}>
            <div className={'popup__top'}>
                <h2 className={'title'}>Добавьте работу</h2>
            </div>
            <Formik
                initialValues={{ artwork_name: '', file: '' }}
                validationSchema={validationSchema}
                onSubmit={async values => {
                    if (artworkUrl) {
                        await axios.post(`http://localhost:3001/Artworks`,
                            { 
                                login: userLogin, 
                                artworkName: values.artwork_name, 
                                artworkImage: artworkUrl, 
                                category: category, 
                                avatar: Avatar, 
                                profile: loginProfile 
                            },
                            { withCredentials: true });
                    };

                    getArtworks(userLogin);
                    props.SetArtworkPopupActive(true);
                }}
            >
                {({ values, errors, touched, handleChange, handleBlur, isValid }) => (
                    <Form className={'form'}>
                        <div className={'add__artwork_name'}>
                            <span className={'label'}>Название работы</span>
                            <Field type={'text'} name={'artwork_name'} onChange={handleChange} onBlur={handleBlur} value={values.artwork_name} className={'artwork__name'} />
                            {touched.artwork_name && errors.artwork_name && <p className={'error'}>Заполните поле</p>}
                        </div>
                        <CategorySelector 
                            CategorySelectorActive={categorySelectorActive} 
                            SetCategorySelectorActive={setCategorySelectorActive} 
                            Category={category} 
                            SetCategory={setCategory} 
                        />
                        <label htmlFor={'add_artwork'} className={'change__icon_block'}>
                            <img src={upload} alt={'upload'} className={'upload__icon'} />
                            <p className={'add__icon_text'}>Добавьте работу</p>
                            <Field
                                type={'file'}
                                name={'file'}
                                onChange={(event: any) => {
                                    setArtworkImage(event.currentTarget.files[0])
                                }}
                                accept={"image/*,.png,jpg"}
                                id={'add_artwork'}
                                className={'change_icon'}
                            />
                        </label>
                        <button className={'upload__button'} disabled={!isValid || category === 'Не выбрана'} type={'submit'}>Добавить</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UploadJobPopup;