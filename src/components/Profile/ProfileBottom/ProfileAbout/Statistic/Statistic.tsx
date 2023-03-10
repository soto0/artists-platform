import React, { FC } from 'react';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import s from './Statistic.module.css';

const Statistic: FC = () => {
    const { PostsStatistics, ArtworksStatistic, FavoritesStatistic, SubscriptionsStatistic } = useTypedSelector(state => state.Profile);
    
    return (
        <div id={'statistics'} className={s.statistics}>
            <h3>Статистика</h3>
            <div className={s.statistic__blocks}>
                <div className={s.statistic__block}>
                    <h4 className={s.statistic__title}>Посты</h4>
                    <p className={s.statistic__count}>{PostsStatistics}</p>
                </div>
                <div className={s.statistic__block}>
                    <h4 className={s.statistic__title}>Подписчики</h4>
                    <p className={s.statistic__count}>{SubscriptionsStatistic}</p>
                </div>
                <div className={s.statistic__block}>
                    <h4 className={s.statistic__title}>Работы</h4>
                    <p className={s.statistic__count}>{ArtworksStatistic}</p>
                </div>
                <div className={s.statistic__block}>
                    <h4 className={s.statistic__title}>Избранное</h4>
                    <p className={s.statistic__count}>{FavoritesStatistic}</p>
                </div>
            </div>
        </div>
    );
};

export default Statistic;