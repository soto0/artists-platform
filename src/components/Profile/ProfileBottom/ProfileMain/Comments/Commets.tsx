import React, { FC } from 'react';
import s from './Comments.module.css';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { useProfileAction } from '../../../../../hooks/useActions';

interface CommentsProps {
    userLogin: string | undefined
    Avatar: string | undefined 
}

const Comments: FC<CommentsProps> = (props) => {
    const { Comments } = useTypedSelector(state => state.Profile);
    const { getProfileData } = useProfileAction();

    return (
        <div className={s.comments}>
            <Formik
                initialValues={{ comment: '' }}
                onSubmit={async values => {
                    await axios.post('http://localhost:3001/Comments',
                        { commentText: values.comment, login: props.userLogin, avatar: props.Avatar},
                        { withCredentials: true })

                    getProfileData(props.userLogin);
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
                                <img src={comment.avatar} className={s.comment__avatar} />
                                <div className={s.comment__body}>
                                    <div className={s.comment__top}>
                                        <p className={s.comment__name}>{comment.login}</p>
                                        <p className={s.comment__date}>14 Ян. 15:03</p>
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