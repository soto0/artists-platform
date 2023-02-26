import React, { FC, useEffect } from 'react';
import { useCategoryAction } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import s from './CategoryTop.module.css';

const CategoryTop: FC = () => {
    const { getCategory } = useCategoryAction();
    const { CategoryIcon, CategoryName } = useTypedSelector(state => state.Category)

    useEffect(() => {
        const url = window.location.pathname.slice(12);
        getCategory(url);
    }, []);

    return (
        <div className={s.category__top}>
            <img src={CategoryIcon} alt={'category_icon'} className={s.category__icon} />
            <h3 className={s.category__title}>{CategoryName}</h3>
        </div>
    );
};

export default CategoryTop;