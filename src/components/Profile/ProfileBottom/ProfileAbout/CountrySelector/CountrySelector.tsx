import axios from 'axios';
import React, { FC, useState } from 'react';
import { useActions } from '../../../../../hooks/useActions';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { SelectorProps } from '../../../../../types/Selector';
import s from './../ProfileAbout.module.css';

const CountrySelector: FC<SelectorProps> = (props) => {
    const [countries, setCountries] = useState<any>();
    const { Countries, Avatar, LargePhoto, Country, Gender} = useTypedSelector(state => state.Profile);
    const { userLogin } = useTypedSelector(state => state.Login);
    const { getProfileData } = useActions();
    
    const onClickCountries = () => {
        setCountries(Countries);
        props.SetCountrySelectorActive(!props.CountrySelectorActive);
        props.SetGenderSelectorActive(true);
    };

    const onClickCountry = async (event: any) => {
        await axios.put('http://localhost:3001/Profile/' + userLogin,
            { 
                id: userLogin,  
                login: userLogin, 
                avatar: Avatar, 
                largePhoto: LargePhoto, 
                country: event.currentTarget.innerText, 
                gender: Gender 
            },
            { withCredentials: true }
        );

        props.SetCountrySelectorActive(!props.CountrySelectorActive);
        getProfileData(userLogin);
    };

    return (
        <div>
            <p className={s.address} onClick={onClickCountries}>{Country ? Country : 'Не выбран'}</p>
            <div className={props.CountrySelectorActive ? s.selector : s.selector_active}>
                {
                    countries === undefined ? undefined :
                        countries?.map((country: any) => {
                            return (
                                <p className={s.option} onClick={onClickCountry}>{country.name}</p>
                            )
                        })
                }
            </div>
        </div>
    );
};

export default CountrySelector;