import React, { FC } from 'react';
import s from './Comments.module.css';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { useProfileAction } from '../../../../../hooks/useActions';
import Avatar from './../../../../../assets/images/avatar.svg';
import { useNavigate } from 'react-router-dom';

interface CommentsProps {
    userLogin: string | undefined;
    Avatar: string | undefined;
    Login: string | undefined;
}

type Date = { 
    weekday: any;
    month: any;
    day: any;
}

const Comments: FC<CommentsProps> = (props) => {
    const { Comments } = useTypedSelector(state => state.Profile);
    const { getProfileData } = useProfileAction();
    const loginProfile = window.location.pathname.slice(9);
    const navigate = useNavigate();

    return (
        <div className={s.comments}>
            <Formik
                initialValues={{ comment: '' }}
                onSubmit={async values => {
                    if (!props.userLogin) {
                        navigate('/Login')
                    } else {
                        const today = new Date();

                        const options: Date = { weekday: "long", month: "long", day: "numeric" };

                        const now = today.toLocaleString('ru-Ru', options);

                        await axios.post('http://localhost:3001/Comments',
                            { commentText: values.comment, login: props.Login, avatar: props.Avatar, commentDate: now, profile: loginProfile },
                            { withCredentials: true })

                        getProfileData(props.userLogin);
                    }
                }}    
            >
                {({ values, isValid, handleBlur, handleChange }) => (
                    <Form>
                        <Field as={'textarea'} name={'comment'} value={values.comment} onChange={handleChange} onBlur={handleBlur}  className={s.comments__text}></Field>
                        <button className={s.submit__comment} type={'submit'} disabled={!isValid} >Отправить комментарий</button>
                    </Form>
                )}
            </Formik>
            <div className={s.comments}>
                {
                    Comments?.map((comment: any) => {
                        return (
                            <div className={s.comment}>
                                <img src={comment.avatar ? comment.avatar : Avatar} className={s.comment__avatar} />
                                <div className={s.comment__body}>
                                    <div className={s.comment__top}>
                                        <p className={s.comment__name}>{comment.login}</p>
                                        <p className={s.comment__date}>{comment.commentDate}</p>
                                    </div>
                                    <div className={s.comment__text}>{comment.commentText}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Comments;