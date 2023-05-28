import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import TextHeader from '../../../componnents/textHeader/TextHeaders';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { FaUserSecret } from "react-icons/fa";

const Testiomonial = () => {
    const [revews ,setRebews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/testimonial')
        .then(res=>res.json())
        .then(data=>setRebews(data))
    },[])
    return (
        <>
        <TextHeader header='TESTIMONIALS' subHeader='---What Our Clients Say---'></TextHeader>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            revews.map(revew=><SwiperSlide key={revew._id}>
               <div className='w-6/12 mx-auto text-center my-28'>
               <Rating className='w-full mx-auto '  style={{ maxWidth: 150,}} value={revew.rating} readOnly  />
               <FaUserSecret  className='w-full mx-auto h-16 my-8'/>
                
                <p>{revew.details}</p>
                <h1 className='text-xl font-bold text-yellow-500'>{revew.name}</h1>
               </div>
            </SwiperSlide>)
        }
       
      </Swiper>
    </>
    );
};

export default Testiomonial;