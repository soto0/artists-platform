import React, { FC } from 'react';
import CategoryBottom from './CategoryBottom/CategoryBottom';
import CategoryTop from './CategoryTop/CategoryTop';

const Category: FC = () => {
    const url = window.location.pathname.slice(12);

    return (
        <main>
            <div className={'container'}>
                <CategoryTop Url={url} />
                <CategoryBottom Url={url} />
            </div>
        </main>
    );
};

export default Category;