import { Field, Form, Formik } from 'formik';
import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Login: FC = () => {
    const navigate = useNavigate();
    const { getUserLogin, getAvatar } = useActions();
    const [ unknowError, setUnknowError] = useState('');
    const { userLogin, isAuth } = useTypedSelector(state => state.Login);

    const validationSchema = yup.object().shape({
        login: yup.string().required('Заполните поле'),
        password: yup.string().required('Заполните поле'),
    });

    useEffect(() => {
        if(isAuth === true) {
            navigate('/Profile/' + userLogin);
            getAvatar(userLogin);
        };
    });
    
    return (
        <main>
            <div className={'container'}>
                <div className={'form__block'}>
                    <h2 className={'title'}>Вход</h2>
                    <Formik
                        initialValues={{login: '', password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={values => {
                            getUserLogin(values);
                            if(isAuth === false) {
                                setUnknowError('Логин или пароль неверные');
                            };
                        }}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, isValid }) => (
                            <Form className={'form'}>
                                <div className={'inputs__block'}>
                                    <Field type={'text'} name={'login'} className={'input'} onChange={handleChange} onBlur={handleBlur} value={values.login} placeholder={'Введите логин'} />
                                    {touched.login && errors.login && <p className={'error'}>Заполните поле</p>}
                                    <Field type={'password'} name={'password'} className={'input'} onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder={'Введите пароль'} />
                                    {touched.password && errors.password && <p className={'error'}>Заполните поле</p>}
                                    <p className={'unknow__error'}>{unknowError}</p>
                                </div>
                                <button type={'submit'} disabled={!isValid} className={'submit'}>Войти</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </main>
    );
};

export default Login;