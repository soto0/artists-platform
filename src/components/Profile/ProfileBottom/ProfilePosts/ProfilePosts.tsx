import React, { FC, useEffect } from 'react';
import s from './ProfilePosts.module.css';
import avatar from './../../../../assets/images/avatar.svg';
import Post from '../../../Post/Post';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import { useProfileAction } from '../../../../hooks/useActions';


type Date = {
    weekday: any;
    month: any;
    day: any;
}

const ProfilePosts: FC = () => {
    const { Avatar, Posts } = useTypedSelector(state => state.Profile);
    const { userLogin } = useTypedSelector(state => state.Login);
    const { getPosts } = useProfileAction();
    const loginProfile = window.location.pathname.split('/').slice(2, 3).join('/');


    const validationSchema = yup.object().shape({
        postTitle: yup.string().required('Заполните поле'),
        postText: yup.string().required('Заполните поле'),
    });

    useEffect(() => {
        getPosts(loginProfile);
    }, []);

    return (
        <div className={s.posts__block}>
            {
                userLogin !== loginProfile ?
                    undefined :
                    <Formik
                        initialValues={{ postTitle: '', postText: '' }}
                        validationSchema={validationSchema}
                        onSubmit={async (values, { resetForm }) => {
                            const today = new Date();

                            const options: Date = { weekday: "long", month: "long", day: "numeric" };

                            const now = today.toLocaleString('ru-Ru', options);

                            await axios.post('http://localhost:3001/Posts',
                                { postTitle: values.postTitle, login: userLogin, postDate: now, postText: values.postText, avatar: Avatar },
                                { withCredentials: true });

                            getPosts(userLogin);
                            resetForm();
                        }}
                    >
                        {({ errors, touched, values, isValid, handleBlur, handleChange }) => (
                            <Form>
                                <div className={s.posts__top}>
                                    <img src={Avatar !== "" ? Avatar : avatar} alt={'avatar'} className={s.avatar} />
                                    <div className={s.add__post_block}>
                                        <h3 className={s.title__post}>Заголовок поста</h3>
                                        <Field name={'postTitle'} className={s.add__post_title} onChange={handleChange} value={values.postTitle} onBlur={handleBlur}></Field>
                                        {touched.postTitle && errors.postTitle && <p className={'error'}>Заполните поле</p>}
                                        <h3 className={s.text__post}>Текст поста</h3>
                                        <Field as={'textarea'} name={'postText'} className={s.add__post} onChange={handleChange} value={values.postText} onBlur={handleBlur}></Field>
                                        {touched.postText && errors.postText && <p className={'error'}>Заполните поле</p>}
                                        <button className={s.submit__post} disabled={!isValid}>Добавить пост</button>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
            }
            <div className={s.posts__bottom}>
                {
                    Posts?.map((post: any) => {
                        return (
                            <Post Avatar={post.avatar} Name={post.profile} postDate={post.postDate} postTitle={post.postTitle} postText={post.postText} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProfilePosts;