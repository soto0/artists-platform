import React, { FC } from 'react';
import CategoryBottom from './CategoryBottom/CategoryBottom';
import CategoryTop from './CategoryTop/CategoryTop';

const Category: FC = () => {
    return (
        <main>
            <div className={'container'}>
                <CategoryTop />
                <CategoryBottom />
            </div>
        </main>
    );
};

export default Category;