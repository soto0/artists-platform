import React, { FC, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import User from '../User/User';
import s from './Users.module.css';

const Users: FC = () => {
    const { getUsers } = useActions();
    const { Users } = useTypedSelector(state => state.Users);

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <main>
            <div className={'container'}>
                <h3 className={s.title}>Пользователи</h3>
                <div className={s.users__block}>
                    {
                        Users?.map((user: any) => {
                            return (
                                <User Avatar={user.avatar} Name={user.login} />
                            )
                        })
                    }
                </div>
            </div>
        </main>
    );
};

export default Users;