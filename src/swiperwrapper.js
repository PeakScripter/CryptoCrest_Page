import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperWrapper = ({ children }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      navigation={true}
      pagination={{ clickable: true }}
    >
      {children}
    </Swiper>
  );
};

export default SwiperWrapper;
