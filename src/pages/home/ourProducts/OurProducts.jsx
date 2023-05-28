import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import { FreeMode, Pagination } from "swiper";
import TextHeader from '../../../componnents/textHeader/TextHeaders';


const LattestFood = () => {
    return (
        <div className='mt-20'>
            <TextHeader subHeader='---From 11:00am to 10:00pm---'
                header='ORDER ONLINE'
            >
            </TextHeader>
            <Swiper
                slidesPerView={3}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper md:w-9/12 mx-auto"
            >
                <SwiperSlide className='mr-4'>
                    <img src={slide1} className='w-full  h-96 ' alt="" />
                    <h1 className='-mt-40 w-8/12  mx-auto font-bold text-white text-4xl'>salad</h1>
                </SwiperSlide>

                <SwiperSlide className='mr-4'>
                    <img  className='w-full  h-96 ' src={slide2} alt="" />
                    <h1 className='-mt-40 w-8/12  mx-auto font-bold text-white text-4xl'>salad</h1>
                </SwiperSlide>
                <SwiperSlide className='mr-4'>
                    <img  className='w-full  h-96 ' src={slide3} alt="" />
                    <h1 className='-mt-40 w-8/12  mx-auto font-bold text-white text-4xl'>salad</h1>
                </SwiperSlide>
                <SwiperSlide className='ml-4'>
                    <img   className='w-full  h-96 ' src={slide4} alt="" />
                    <h1 className='-mt-40 w-8/12  mx-auto font-bold text-white text-4xl'>salad</h1>
                </SwiperSlide>
                <SwiperSlide className='ml-4'>
                    <img   className='w-full  h-96 ' src={slide5} alt="" />
                    <h1 className='-mt-40 w-8/12  mx-auto font-bold text-white text-4xl'>salad</h1>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default LattestFood;