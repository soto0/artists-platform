import React, { FC } from 'react';
import s from './Category.module.css';
import { Link } from 'react-router-dom';

interface CategoryProps {
    name: string;
    icon: string;
}

const Category: FC<CategoryProps> = (props) => {
    return (
        <Link to={props.name} className={s.category}>
            <img src={props.icon} alt={'category__icon'} className={s.category__icon} />
            <p className={s.category__title}>{props.name}</p>
        </Link>
    );
};

export default Category;