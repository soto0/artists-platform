import axios from 'axios';
import React, { FC } from 'react';
import { useActions } from '../../../../../hooks/useActions';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { SelectorProps } from '../../../../../types/Selector';
import s from './../ProfileAbout.module.css';

const GenderSelector: FC<SelectorProps>= (props) => {
    const { Avatar, LargePhoto, Country, Gender } = useTypedSelector(state => state.Profile);
    const { userLogin } = useTypedSelector(state => state.Login);
    const { getProfileData } = useActions();
    
    const onClickGenders = () => {
        props.SetGenderSelectorActive(!props.GenderSelectorActive);
        props.SetCountrySelectorActive(true);
    };


    const onClickGender = async (event: any) => {
        await axios.put('http://localhost:3001/Profile/' + userLogin,
            { 
                id: userLogin,  
                login: userLogin, 
                avatar: Avatar, 
                largePhoto: LargePhoto, 
                country: Country, 
                gender: event.currentTarget.innerText 
            },
            { withCredentials: true }
        );

        props.SetGenderSelectorActive(!props.GenderSelectorActive);
        getProfileData(userLogin);
    };

    return (
        <div>
            <p className={s.gender} onClick={onClickGenders}>{Gender ? Gender : 'Не выбран'}</p>
            <div className={props.GenderSelectorActive ? s.selector : s.selector_active}>
                <p className={s.option} onClick={onClickGender}>Мужчина</p>
                <p className={s.option} onClick={onClickGender}>Женщина</p>
            </div>
        </div>
    );
};

export default GenderSelector;