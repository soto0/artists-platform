import React, { FC, useEffect } from 'react';
import Category from './Category/Category';
import s from './Categories.module.css';
import { useCategoriesAction } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Categories: FC = () => {
    const { getCategories } = useCategoriesAction();
    const { Categories } = useTypedSelector(state => state.Categories);

    useEffect(() => {
        getCategories();
    }, [])
    return (
        <main>
            <div className={'container'}>
                <h3 className={s.title}>Категории</h3>
                <div className={s.categories__blocks}>
                    {
                        Categories.map((category: any) => {
                            return (
                                <Category name={category.categoriyTitle} icon={category.caategoriyIcon} />
                            )
                        })
                    }
                </div>
            </div>
        </main>
    );
};

export default Categories;