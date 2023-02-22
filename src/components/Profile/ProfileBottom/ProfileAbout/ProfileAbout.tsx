import React, { FC, useEffect, useState } from 'react';
import s from './ProfileAbout.module.css';
import avatar from './../../../../assets/images/avatar.svg';
import { Link } from 'react-router-dom';
import { useProfileAction } from '../../../../hooks/useActions';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import axios from 'axios';

const ProfileAbout: FC = () => {
    const [countries, setCountries] = useState<any>();
    const [ countrySelectorActive, setCountrySelectorActive ] = useState(true);
    const { Countries, Avatar, LargePhoto, Country} = useTypedSelector(state => state.Profile);
    const { userLogin } = useTypedSelector(state => state.Login);
    const { getCountries, getProfileData } = useProfileAction();

    const onClickCountries = () => {
        setCountrySelectorActive(!countrySelectorActive);
        setCountries(Countries);
    };

    useEffect(() => {
        getCountries();
    }, []);

    const onClickCountry = async (event: any) => {
        await axios.put('http://localhost:3001/Profile/' + userLogin,
            { id: userLogin,  login: userLogin, avatar: Avatar, largePhoto: LargePhoto, country: event.currentTarget.innerText },
            { withCredentials: true }
        );
        setCountrySelectorActive(!countrySelectorActive);
        getProfileData(userLogin);
    };

    return (
        <div className={s.wrapper}>
            <div className={s.info__left}>
                <a href='#about'>Обо мне</a>
                <a href='#statistics'>Статистика</a>
                <a href='#subscribers'>Подписчики</a>
                <a href='#subscriptions'>Подписки</a>
            </div>
            <div className={s.info__right}>
                <div id={'about'} className={s.about__info}>
                    <p className={s.name}>Test</p>
                    <div className={s.user__categories}>
                        <p className={s.user__category}>Художник</p>
                        <p className={s.user__category}>Смотрящий</p>
                        <p className={s.user__category}>Профессионал</p>
                    </div>
                    <div className={s.user__info}>
                        <p className={s.address} onClick={onClickCountries}>{Country ? Country : 'Не выбран'}</p>
                        <div className={countrySelectorActive ? s.address__selector : s.address__selector_active}>
                            {
                                countries === undefined ? undefined :
                                countries?.map((country: any) => {
                                    return (
                                        <p className={s.country} onClick={onClickCountry}>{country.name}</p>
                                    )
                                })
                            }
                        </div>
                        <p className={s.gender}>Мужчина</p>
                    </div>
                    <div className={s.user__bio}>
                        <h4 className={s.title}>Биография</h4>
                        <p className={s.bio}>Начинающий фронтенд разработчик данного сайта! И немного художник.</p>
                    </div>
                </div>
                <div id={'statistics'} className={s.statistics}>
                    <h3>Статистика</h3>
                    <div className={s.statistic__blocks}>
                        <div className={s.statistic__block}>
                            <h4 className={s.statistic__title}>Посты</h4>
                            <p className={s.statistic__count}>5</p>
                        </div>
                        <div className={s.statistic__block}>
                            <h4 className={s.statistic__title}>Подписчики</h4>
                            <p className={s.statistic__count}>5</p>
                        </div>
                        <div className={s.statistic__block}>
                            <h4 className={s.statistic__title}>Подписки</h4>
                            <p className={s.statistic__count}>5</p>
                        </div>
                        <div className={s.statistic__block}>
                            <h4 className={s.statistic__title}>Сообщества</h4>
                            <p className={s.statistic__count}>5</p>
                        </div>
                        <div className={s.statistic__block}>
                            <h4 className={s.statistic__title}>Работы</h4>
                            <p className={s.statistic__count}>5</p>
                        </div>
                        <div className={s.statistic__block}>
                            <h4 className={s.statistic__title}>Избранное</h4>
                            <p className={s.statistic__count}>5</p>
                        </div>
                    </div>
                </div>
                <div id={'subscribers'} className={s.subscribers}>
                    <h3>Подписчики</h3>
                    <div className={s.subscriber__blocks}>
                        <Link to={''} className={s.subscriber}>
                            <img src={avatar} alt={'subscriber__avatar'} className={s.subscriber__avatar} />
                            <p className={s.subscriber__name}>sotto0</p>
                        </Link>
                    </div>
                </div>
                <div id={'subscriptions'} className={s.subscriptions}>
                    <h3>Подписки</h3>
                    <div className={s.subscription__block}>
                        <Link to={''} className={s.subscription}>
                            <img src={avatar} alt={'subscription__avatar'} className={s.subscription__avatar} />
                            <p className={s.subscription__name}>sotto0</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileAbout;