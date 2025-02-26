"use client";

import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SwiperRef } from 'swiper/react';


const SwiperComponent: React.FC = () => {
    const swiperRef = useRef<SwiperRef>(null);
    const isSwiping = useRef(false);
    const touchStartY = useRef(0);

    useEffect(() => {
        const swiper = swiperRef.current?.swiper;
        if (!swiper) return;

        const slides = document.querySelectorAll('.swiper-slide');
        const numSlides = slides.length;
        const swiperContainer = document.querySelector('.swiper-container') as HTMLElement;
        const swiperHeight = swiperContainer?.offsetHeight || 0;
        const slideHeight = swiperHeight / numSlides;

        const handleScroll = () => {
            if (isSwiping.current) return;

            const scrollPosition = window.scrollY;
            let activeSlideIndex = Math.min(Math.floor(scrollPosition / slideHeight), numSlides - 1);

            if (activeSlideIndex !== swiper.activeIndex) {
                isSwiping.current = true;
                swiper.slideTo(activeSlideIndex, 500, false);

                setTimeout(() => {
                    isSwiping.current = false;
                }, 500);
            }
        };

        const handleTouchStart = (e: TouchEvent) => {
            touchStartY.current = e.touches[0].clientY;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            const touchEndY = e.changedTouches[0].clientY;
            const deltaY = touchStartY.current - touchEndY;

            if (Math.abs(deltaY) > 50) { // Adjust threshold as needed
                if (deltaY > 0) {
                    // Swiped up
                    window.scrollBy({ top: slideHeight, behavior: 'smooth' });
                } else {
                    // Swiped down
                    window.scrollBy({ top: -slideHeight, behavior: 'smooth' });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        swiperContainer?.addEventListener('touchstart', handleTouchStart);
        swiperContainer?.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            swiperContainer?.removeEventListener('touchstart', handleTouchStart);
            swiperContainer?.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    return (
        <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            direction="vertical"
            spaceBetween={0}
            slidesPerView={1}
            // navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            mousewheel={false} // Disable Swiper's mousewheel here
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className="swiper-container"
        >
            <SwiperSlide className='border' >Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    );
};

export default SwiperComponent;