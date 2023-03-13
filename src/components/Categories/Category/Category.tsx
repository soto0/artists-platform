import React, { FC } from 'react';
import s from './Category.module.css';
import { Link } from 'react-router-dom';

interface CategoryProps {
    Name: string;
    Icon: string;
};

const Category: FC<CategoryProps> = (props) => {
    return (
        <Link to={props.Name} className={s.category}>
            <img src={props.Icon} alt={'category__icon'} className={s.category__icon} />
            <p className={s.category__title}>{props.Name}</p>
        </Link>
    );
};

export default Category;