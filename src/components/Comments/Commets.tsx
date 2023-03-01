import React, { FC } from 'react';
import s from './Comments.module.css';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useArtworkAction, usePostAction } from '../../hooks/useActions';

interface CommentsProps {
    userLogin: string | undefined;
    commentId: number;
    dataName: string | undefined;
    comments: []
}

type Date = { 
    weekday: any;
    month: any;
    day: any;
}

const Comments: FC<CommentsProps> = (props) => {
    const { getArtwork } = useArtworkAction();
    const { getPost } = usePostAction();
    const { Avatar } = useTypedSelector(state => state.Profile);
    const { userLogin } = useTypedSelector(state => state.Login);

    
    return (
        <div className={s.comments}>
            <Formik
                initialValues={{ comment: '' }}
                onSubmit={async (values,  { resetForm }) => {
                    const today = new Date();
                    const options: Date = { weekday: "long", month: "long", day: "numeric" };
                    const now = today.toLocaleString('ru-Ru', options);

                    await axios.post('http://localhost:3001/' + props.dataName,
                        { commentText: values.comment, avatar: Avatar, commentDate: now, artworkId: props.commentId, login: userLogin },
                        { withCredentials: true });
                    
                    if (props.dataName === 'ArtworkComments') {
                        getArtwork(props.commentId);
                    } else if (props.dataName === 'PostComments') {
                        getPost();
                    };
                    resetForm();
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
                    props.comments.filter((comment: any) => comment.artworkId === props.commentId).map((comment: any) => {
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