import React, { FC } from 'react';
import s from './Main.module.css';
import Art from './../../assets/images/art.png'

const Main: FC = () => {
    return (
        <section className={s.main}>
            <div className={s.main__left}>
                <h1 className={s.title}>Платформа для художников</h1>
                <p className={s.text}>Платформа, где вы можете общаться о рисовании и показать другим свою работу. И получить обратную связь.</p>
            </div>
            <div className={s.main__right}>
                <img src={Art} alt={'art'} className={s.art} />
            </div>
        </section>
    );
};

export default Main;