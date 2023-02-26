import React, { FC, useEffect } from 'react';
import { useNewAction } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Post from '../Post/Post';
import s from './NewPosts.module.css';

const NewPosts: FC = () => {
    const { getNewPosts } = useNewAction();
    const { NewPosts } = useTypedSelector(state => state.New);

    useEffect(() => {
        getNewPosts();
    }, []);

    return (
        <main>
            <div className={'container'}>
                <h3 className={s.title}>Новый посты</h3>
                <div className={s.new__block}>
                    {
                        NewPosts.map((post: any) => {
                            return (
                                <Post Avatar={post.avatar} postTitle={post.postTitle} Name={post.login} postDate={post.postDate} postText={post.postText} />
                            )
                        })
                    }
                </div>
            </div>
        </main>
    );
};

export default NewPosts;