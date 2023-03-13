import React, { FC, useEffect } from 'react';
import { useActions } from '../../../../../hooks/useActions';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import s from './CategorySelector.module.css';

interface CategorySelectorProps {
    CategorySelectorActive: boolean;
    SetCategorySelectorActive: any;
    Category: string | undefined;
    SetCategory: any;
};

const CategorySelector: FC<CategorySelectorProps>= (props) => {
    const { getCategories } = useActions();
    const { Categories } = useTypedSelector(state => state.Categories);

    useEffect(() => {
        getCategories();
    }, []);

    const onClickCategories = () => {
        props.SetCategorySelectorActive(!props.CategorySelectorActive);
    };

    const onClickCategory = async (event: any) => {
        props.SetCategory(event.currentTarget.innerText);

        props.SetCategorySelectorActive(!props.CategorySelectorActive);
    };

    return (
        <div>
            <p className={s.category} onClick={onClickCategories}>{props.Category ? props.Category : 'Не выбрана'}</p>
            <div className={props.CategorySelectorActive ? s.selector : s.selector_active}>
                {
                    Categories.map((category: any) => {
                        return (
                            <p className={s.option} onClick={onClickCategory}>{category.categoryTitle}</p>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default CategorySelector;