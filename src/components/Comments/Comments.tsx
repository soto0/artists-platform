import React, { FC } from 'react';
import s from './Comments.module.css';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useNavigate } from 'react-router-dom';
import UnknownAvatar from './../../assets/images/avatar.svg';
import { useActions } from '../../hooks/useActions';

interface CommentsProps {
    UserLogin: string | undefined;
    CommentId: number;
    DataName: string | undefined;
    Comments: [],
};

type Date = {
    weekday: any;
    month: any;
    day: any;
};

const Comments: FC<CommentsProps> = (props) => {
    const { getArtwork, getPost } = useActions();
    const navigate = useNavigate();
    const { Avatar } = useTypedSelector(state => state.Profile);
    const { userLogin } = useTypedSelector(state => state.Login);

    return (
        <div className={s.comments}>
            <Formik
                initialValues={{ comment: '' }}
                onSubmit={async (values, { resetForm }) => {
                    if (!userLogin) {
                        navigate('/Login');
                    } else {
                        const today = new Date();
                        const options: Date = { weekday: "long", month: "long", day: "numeric" };
                        const now = today.toLocaleString('ru-Ru', options);

                        await axios.post('http://localhost:3001/' + props.DataName,
                            { commentText: values.comment, avatar: Avatar, commentDate: now, artworkId: props.CommentId, login: userLogin },
                            { withCredentials: true });

                        if (props.DataName === 'ArtworkComments') {
                            getArtwork(props.CommentId);
                        } else if (props.DataName === 'PostComments') {
                            getPost();
                        };

                        resetForm();
                    }
                }}
            >
                {({ values, isValid, handleBlur, handleChange }) => (
                    <Form>
                        <Field as={'textarea'} name={'comment'} value={values.comment} onChange={handleChange} onBlur={handleBlur} className={s.comments__text}></Field>
                        <button className={s.submit__comment} type={'submit'} disabled={!isValid} >Отправить комментарий</button>
                    </Form>
                )}
            </Formik>
            <div className={s.comments}>
                {
                    props.Comments.filter((comment: any) => comment.artworkId === props.CommentId).map((comment: any) => {
                        return (
                            <div className={s.comment}>
                                <img src={comment.avatar ? comment.avatar : UnknownAvatar} className={s.comment__avatar} />
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