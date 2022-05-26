import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../../styles/Home.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';

export const Slide = () => {
    return (
        <>
            <div className={styles.SlideMovilSection3}>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <img src="/CARACTERISTICAS-1.png"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/CARACTERISTICAS-2.png"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/CARACTERISTICAS-3.png"/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={styles.SlideDesktopSection3}>
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={2}
                    navigation
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <img src="/CARACTERISTICAS-1.png"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/CARACTERISTICAS-2.png"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="/CARACTERISTICAS-3.png"/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
