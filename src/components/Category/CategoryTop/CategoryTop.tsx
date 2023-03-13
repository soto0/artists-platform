import React, { FC, useEffect } from 'react';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { CategoryProps } from '../../../types/Category';
import s from './CategoryTop.module.css';

const CategoryTop: FC<CategoryProps> = (props) => {
    const { getCategory } = useActions();
    const { CategoryIcon, CategoryName } = useTypedSelector(state => state.Category);

    useEffect(() => {
        getCategory(props.Url);
    }, []);

    return (
        <div className={s.category__top}>
            <img src={CategoryIcon} alt={'category_icon'} className={s.category__icon} />
            <h3 className={s.category__title}>{CategoryName}</h3>
        </div>
    );
};

export default CategoryTop;