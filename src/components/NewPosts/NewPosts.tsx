import React, { FC, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Post from '../Post/Post';
import s from './NewPosts.module.css';

const NewPosts: FC = () => {
    const { getNewPosts } = useActions();
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
                                <Post
                                    Avatar={post.avatar}
                                    PostTitle={post.postTitle}
                                    Name={post.login}
                                    PostDate={post.postDate}
                                    Id={post.id}
                                    PostText={post.postText}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </main>
    );
};

export default NewPosts;