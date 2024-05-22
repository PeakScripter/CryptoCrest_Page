import React from 'react';
// import { SwiperSlide } from 'swiper/react';

const Card = ({ title, description }) => (
  <div className="card shadow-md rounded-lg overflow-hidden">
    <div className="card-content px-4 py-6 flex flex-col justify-between h-full">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

export default Card;
