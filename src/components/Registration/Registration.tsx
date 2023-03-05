import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

const Registration: FC = () => {
    const navigate = useNavigate();

    const validationSchema = yup.object().shape({
        login: yup.string().required('Заполните поле'),
        password: yup.string().required('Заполните поле'),
        email: yup.string().required('Заполните поле')
    });

    return (
        <main>
            <div className={'container'}>
                <div className={'form__block'}>
                    <h2 className={'title'}>Регистрация</h2>
                    <Formik initialValues={{ login: '', email: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={async (values) => {
                            await axios.post('http://localhost:3001/Users',
                                { id: values.login, login: values.login, email: values.email, password: values.password }).then(() => {
                                    axios.post('http://localhost:3001/Profile/',
                                        { id: values.login, login: values.login, largePhoto: '', avatar: '' },
                                        { withCredentials: true }
                                    );

                                    navigate('/Login');
                                }
                            );
                        }}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, isValid }) => (
                            <Form className={'form'}>
                                <div className={'inputs__block'}>
                                    <Field type={'text'} name={'login'} onChange={handleChange} onBlur={handleBlur} value={values.login} className={'input'} placeholder={'Придумайте логин'} />
                                    {touched.login && errors.login && <p className={'error'}>Заполните поле</p>}
                                    <Field type={'email'} name={'email'} onChange={handleChange} onBlur={handleBlur} value={values.email} className={'input'} placeholder={'Введите email'} />
                                    {touched.email && errors.email && <p className={'error'}>Заполните поле</p>}
                                    <Field type={'password'} name={'password'} onChange={handleChange} onBlur={handleBlur} value={values.password} className={'input'} placeholder={'Придумайте пароль'} />
                                    {touched.password && errors.password && <p className={'error'}>Заполните поле</p>}
                                </div>
                                <button type={'submit'} disabled={!isValid} className={'submit'}>Зарегистрироваться</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </main>
    );
};

export default Registration;