import React, { FC, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from './PopularArtists.module.css';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const PopularArtists: FC = () => {
    const { popularArtists } = useTypedSelector(state => state.popularArtists);
    const { getPopularArtists } = useActions();

    useEffect(() => {
        getPopularArtists();
    }, []);

    return (
        <section className={s.popularArtists}>
            <h2 className={s.title}>Популярные художники</h2>
            <Swiper className={s.slider} 
                spaceBetween={40} 
                slidesPerView={4} 
                breakpoints={{
                    1350: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    920: {
                        slidesPerView: 3, 
                        spaceBetween: 20
                    },
                    680: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30
                    }
            }}>
                {
                    popularArtists.map(popularArtist => {
                        return (
                            <SwiperSlide key={popularArtist.id} className={s.slide}>
                                <Link className={s.slide__link} to=''>
                                    <img src={popularArtist.icon} alt={'slide'} className={s.slide__icon} />
                                    <p className={s.name}>{popularArtist.name}</p>
                                </Link>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
};

export default PopularArtists;