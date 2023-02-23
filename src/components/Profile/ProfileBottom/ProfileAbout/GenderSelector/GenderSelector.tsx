import axios from 'axios';
import React, { FC } from 'react';
import { useProfileAction } from '../../../../../hooks/useActions';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import s from './../ProfileAbout.module.css';

interface GenderSelectorProps {
    genderSelectorActive: boolean;
    setGenderSelectorActive: any;
    setCountrySelectorActive: any;
    countrySelectorActive: any;
}

const GenderSelector: FC<GenderSelectorProps>= (props) => {
    const { Avatar, LargePhoto, Country, Gender } = useTypedSelector(state => state.Profile);
    const { userLogin } = useTypedSelector(state => state.Login);
    const { getProfileData } = useProfileAction();
    
    const onClickGenders = () => {
        props.setGenderSelectorActive(!props.genderSelectorActive);
        props.setCountrySelectorActive(true);
    };


    const onClickGender = async (event: any) => {
        await axios.put('http://localhost:3001/Profile/' + userLogin,
            { id: userLogin,  login: userLogin, avatar: Avatar, largePhoto: LargePhoto, country: Country, gender: event.currentTarget.innerText   },
            { withCredentials: true }
        );

        props.setGenderSelectorActive(!props.genderSelectorActive);
        getProfileData(userLogin);
    };

    return (
        <div>
            <p className={s.gender} onClick={onClickGenders}>{Gender ? Gender : 'Не выбран'}</p>
            <div className={props.genderSelectorActive ? s.selector : s.selector_active}>
                <p className={s.option} onClick={onClickGender}>Мужчина</p>
                <p className={s.option} onClick={onClickGender}>Женщина</p>
            </div>
        </div>
    );
};

export default GenderSelector;