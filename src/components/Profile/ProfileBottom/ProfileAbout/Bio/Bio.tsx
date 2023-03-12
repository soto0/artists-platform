import { Field, Form, Formik } from 'formik';
import React, { FC, useState } from 'react';
import s from './Bio.module.css';
import * as yup from 'yup';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import axios from 'axios';
import { useProfileAction } from '../../../../../hooks/useActions';

const Bio: FC = () => {
    const { userLogin } = useTypedSelector(state => state.Login);
    const { LargePhoto, Avatar, Country, Gender, Bio } = useTypedSelector(state => state.Profile);
    const { getProfileData } = useProfileAction();
    const loginProfile = window.location.pathname.split('/').slice(2, 3).join('/');
    const [ editBio, setEditBio ] = useState(false);

    const ShowChangeBio = () => {
        if(userLogin === loginProfile) {
            setEditBio(true);
        } else {
            return undefined
        }
    };

    const validationSchema = yup.object().shape({
        bio: yup.string().required('Заполните поле'),
    });

    return (
        <div className={s.bio}>
            {
                !editBio ?
                <p className={s.bio__text} onClick={ShowChangeBio}>{Bio ? Bio : 'Нет'}</p> :
                userLogin !== loginProfile ?  undefined  :
                <Formik
                    initialValues={{ bio: '' }}
                    validationSchema={validationSchema}
                    onSubmit={async values => {
                        await axios.put('http://localhost:3001/Profile/' + userLogin,
                            { id: userLogin, login: userLogin, largePhoto: LargePhoto, avatar: Avatar, country: Country, gender: Gender, bio: values.bio },
                            { withCredentials: true });

                        getProfileData(userLogin);
                        setEditBio(false);
                    }}
                >
                    {
                        ({ errors, touched, values, handleChange, handleBlur, isValid }) => (
                            <Form>
                                <div className={s.bio__change_block}>
                                    <Field as={'textarea'} name={'bio'} className={s.bio__textarea} onChange={handleChange} onBlur={handleBlur} value={values.bio}></Field>
                                    {touched.bio && errors.bio && <p className={'error'}>Заполните поле</p>}
                                </div>
                                <button className={s.submit__bio} type={'submit'} disabled={!isValid}>Добавить биографию</button>
                            </Form>
                        )
                    }
                </Formik>           
            }
        </div>
    );
};

export default Bio;