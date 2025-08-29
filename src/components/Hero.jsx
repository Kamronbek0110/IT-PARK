import React, { useEffect, useRef } from "react";

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {Autoplay, Pagination, Navigation} from "swiper/modules";
export default function Hero() {
  return (
      
     <div className="hero">
        <div className="hero_content">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
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
            <SwiperSlide className="swiper-slide">
              <div className="overlay"></div>
              <img src="./hero/slides/2.png" alt="" />
              <div className="texts">
                <div className="text">
                  <h1>IT PARK - Innovatsion Texnologiyalar Markazi</h1>
                  <p>
                    Bizning maqsadimiz - IT sohasida yangi avlod
                    mutaxassislarini tayyorlash.
                  </p>
                </div>
                <a href="#" className="btn">
                  Kurslarimizni ko'rish
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="overlay"></div>
              <img src="./hero/slides/1.webp" alt="" />
              <div className="texts">
                <div className="text">
                  <h1>IT PARK - Innovatsion Texnologiyalar Markazi</h1>
                  <p>
                    Bizning maqsadimiz - IT sohasida yangi avlod
                    mutaxassislarini tayyorlash.
                  </p>
                </div>
                <a href="#" className="btn">
                  Kurslarimizni ko'rish
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="overlay"></div>
              <img src="./hero/slides/3.webp" alt="" />
              <div className="texts">
                <div className="text">
                  <h1>IT PARK - Innovatsion Texnologiyalar Markazi</h1>
                  <p>
                    Bizning maqsadimiz - IT sohasida yangi avlod
                    mutaxassislarini tayyorlash.
                  </p>
                </div>
                <a href="#" className="btn">
                  Kurslarimizni ko'rish
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
  );
}
/*
.hero {
  height: calc(100vh - 72px);
}
.hero .hero_content {
  width: 100%;
}
.hero .overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.5);
}

.hero .hero_content .swiper {
  width: 100%;
  height: 100%;
  position: relative;
}

.hero .hero_content .swiper-slide {
  display: flex;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;

  height: calc(100vh - 72px);
}
.hero .hero_content .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 1;
  top: 0;
}
.hero .hero_content .swiper-slide .texts {
  position: relative;
  z-index: 11;
  top: 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: auto 0;
}
.hero .hero_content .swiper-slide .texts .text {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.hero .hero_content .swiper-slide .texts .text h1 {
  width: 90%;
  text-align: center;
  margin: 0 auto;
  font-size: 50px;
  font-weight: 600;
  line-height: 1.1;
}
.hero .hero_content .swiper-slide .texts .text p {
  font-size: 18px;
  font-weight: 400;
}
.hero .hero_content .swiper-slide .texts a {
  margin: 0 auto;
}

*/