import React, { FC, useEffect } from 'react';
import { useCategoriesAction } from '../../../../../hooks/useActions';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import s from './CategorySelector.module.css';

interface CategorySelectorProps {
    categorySelectorActive: boolean;
    setCategorySelectorActive: any;
    category: string | undefined;
    setCategory: any;
}

const CategorySelector: FC<CategorySelectorProps>= (props) => {
    const { getCategories } = useCategoriesAction();
    const { Categories } = useTypedSelector(state => state.Categories);

    useEffect(() => {
        getCategories();
    }, []);

    const onClickCategories = () => {
        props.setCategorySelectorActive(!props.categorySelectorActive);
    };

    const onClickCategory = async (event: any) => {
        props.setCategory(event.currentTarget.innerText);

        props.setCategorySelectorActive(!props.categorySelectorActive);
    };

    return (
        <div>
            <p className={s.category} onClick={onClickCategories}>{props.category ? props.category : 'Не выбрана'}</p>
            <div className={props.categorySelectorActive ? s.selector : s.selector_active}>
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