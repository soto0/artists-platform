import React, { FC, useEffect, useState } from 'react';
import s from './ProfileAbout.module.css';
import { useActions } from '../../../../hooks/useActions';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import CountrySelector from './CountrySelector/CountrySelector';
import GenderSelector from './GenderSelector/GenderSelector';
import Bio from './Bio/Bio';
import Statistic from './Statistic/Statistic';

const ProfileAbout: FC = () => {
    const [ countrySelectorActive, setCountrySelectorActive ] = useState(true);
    const [ genderSelectorActive, setGenderSelectorActive ] = useState(true);
    const { Country, Gender, Login} = useTypedSelector(state => state.Profile);
    const { userLogin } = useTypedSelector(state => state.Login);
    const loginProfile = window.location.pathname.split('/').slice(2, 3).join('/');
    const { getCountries, getStatistic } = useActions();

    useEffect(() => {
        getCountries();
        getStatistic(loginProfile);
    }, []);

    return (
        <div className={s.wrapper}>
            <div className={s.info__left}>
                <a href='#about'>Обо мне</a>
                <a href='#statistics'>Статистика</a>
            </div>
            <div className={s.info__right}>
                <div id={'about'} className={s.about__info}>
                    <p className={s.name}>{Login}</p>
                    <div className={s.user__info}>
                        {
                            userLogin !== loginProfile ?
                            <p className={s.address__text}>{Country ? Country : 'Не выбран'}</p> :
                            <CountrySelector
                                CountrySelectorActive={countrySelectorActive}
                                SetCountrySelectorActive={setCountrySelectorActive}
                                SetGenderSelectorActive={setGenderSelectorActive}
                                GenderSelectorActive={genderSelectorActive}
                            />
                        }
                        {
                            userLogin !== loginProfile ?
                            <p className={s.gender__text}>{Gender ? Gender : 'Не выбран'}</p> :
                            <GenderSelector 
                                GenderSelectorActive={genderSelectorActive} 
                                CountrySelectorActive={countrySelectorActive} 
                                SetGenderSelectorActive={setGenderSelectorActive} 
                                SetCountrySelectorActive={setCountrySelectorActive} 
                            />
                        }
                    </div>
                    <div className={s.user__bio}>
                        <h4 className={s.title}>Биография</h4>
                        <Bio />
                    </div>
                </div>
                <Statistic />
            </div>
        </div>
    );
};

export default ProfileAbout;