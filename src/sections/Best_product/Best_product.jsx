import React from "react";
import "./Best_product.css";

import {Card_Best_product}  from "../../components/index";

import Data from "../../Data/Best_product";

import paper from "../../assets/image/logo-leaf-new.png";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Best_product = () => {
  const card = Data.map((card) => {
    return (
      <Card_Best_product
        key={card.id}
        image={card.Image}
        title={card.title}
        name={card.name}
        price={card.price}
      />
    );
  });

  return (
    <div className="best_product bg-white  text-center mb-5 mt-5">
      <h1 className="container mt-5 pt-5">Best slling Product</h1>
      <p className="mt-4 mb-4">
        <img src={paper} alt="" />
      </p>


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
        slidesPerView={3}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>{card[0]}</SwiperSlide>
        <SwiperSlide>{card[1]}</SwiperSlide>
        <SwiperSlide>{card[2]}</SwiperSlide>
        <SwiperSlide>{card[3]}</SwiperSlide>
        <SwiperSlide>{card[4]}</SwiperSlide>
        <SwiperSlide>{card[5]}</SwiperSlide>
        <SwiperSlide>{card[6]}</SwiperSlide>
        <SwiperSlide>{card[7]}</SwiperSlide>
        <SwiperSlide>{card[8]}</SwiperSlide>
      </Swiper>
        </div>
  
  );
};

export default Best_product;
