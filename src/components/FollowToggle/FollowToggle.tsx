import axios from 'axios';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfileAction } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import s from './FollowToggle.module.css';

interface FollowProps {
    UserLogin: string | undefined,
    Item: string | undefined,
    User: string | undefined,
    GetSubscription: any
};


const FollowToggle: FC<FollowProps> = (props) => {
    const { Subscriptions } = useTypedSelector(state => state.Subscriptions);
    const { getStatistic } = useProfileAction();
    const navigate = useNavigate();

    const FollowToggle = async () => {
        if (!props.UserLogin) {
            navigate('/Login');
        } else if (!Subscriptions?.follow) {
            await axios.post('http://localhost:3001/Subscriptions', { userLogin: props.UserLogin, user: props.User, follow: true });
            props.GetSubscription(props.UserLogin, props.User);
        } else if (Subscriptions.follow === false && Subscriptions.userLogin !== props.UserLogin) {
            await axios.post('http://localhost:3001/Subscriptions', { userLogin: props.UserLogin, user: props.User, follow: true });
            props.GetSubscription(props.UserLogin,  props.User);
        } else {
            await axios.delete('http://localhost:3001/Subscriptions/' + Subscriptions.id);
            props.GetSubscription();
        };

        getStatistic(props.UserLogin);
    };

    return (
        <div className={s.button__block}>
            {
                props.UserLogin !== props.Item ?
                <button className={s.follow} onClick={FollowToggle}>{Subscriptions?.follow ? 'Не отслеживать' : 'Отслеживать'}</button> : undefined
            }
        </div>
    );
};

export default FollowToggle;