import React, { FC, useEffect, useState } from 'react';
import s from './ProfileAbout.module.css';
import avatar from './../../../../assets/images/avatar.svg';
import { Link } from 'react-router-dom';
import { useProfileAction } from '../../../../hooks/useActions';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import CountrySelector from './CountrySelector/CountrySelector';
import GenderSelector from './GenderSelector/GenderSelector';
import Bio from './Bio/Bio';
import Statistic from './Statistic/Statistic';

const ProfileAbout: FC = () => {
    const [ countrySelectorActive, setCountrySelectorActive ] = useState(true);
    const [ genderSelectorActive, setGenderSelectorActive ] = useState(true);
    const { Country, Gender} = useTypedSelector(state => state.Profile);
    const { userLogin } = useTypedSelector(state => state.Login);
    const loginProfile = window.location.pathname.slice(9);
    
    const { getCountries, getStatistic } = useProfileAction();

    useEffect(() => {
        getCountries();
        getStatistic(userLogin);
    }, []);

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
                    <p className={s.name}>{userLogin}</p>
                    <div className={s.user__categories}>
                        <p className={s.user__category}>Художник</p>
                        <p className={s.user__category}>Смотрящий</p>
                        <p className={s.user__category}>Профессионал</p>
                    </div>
                    <div className={s.user__info}>
                        {
                            userLogin !== loginProfile ?
                                <p className={s.address}>{Country ? Country : 'Не выбран'}</p> :
                                <CountrySelector
                                    countrySelectorActive={countrySelectorActive}
                                    setCountrySelectorActive={setCountrySelectorActive}
                                    setGenderSelectorActive={setGenderSelectorActive}
                                    genderSelectorActive={genderSelectorActive}
                                />
                        }
                        {
                            userLogin !== loginProfile ?
                            <p className={s.gender}>{Gender ? Gender : 'Не выбран'}</p> :
                                <GenderSelector 
                                    genderSelectorActive={genderSelectorActive} 
                                    countrySelectorActive={countrySelectorActive} 
                                    setGenderSelectorActive={setGenderSelectorActive} 
                                    setCountrySelectorActive={setCountrySelectorActive} 
                                />
                        }
                    </div>
                    <div className={s.user__bio}>
                        <h4 className={s.title}>Биография</h4>
                        <Bio />
                    </div>
                </div>
                <Statistic />
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