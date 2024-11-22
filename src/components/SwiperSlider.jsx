import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import '../cssfiles/SwiperSlider.css';
// Import required Swiper modules
import { Autoplay, Navigation, Keyboard, EffectFade } from 'swiper/modules';

function SwiperSlider() {
  const slides = [
    {
      image: './src/assets/images/banner/LANDING_PAGE_BANNER_01.png',
    },
    {
      image: './src/assets/images/banner/LANDING_PAGE_BANNER_02.png',
    },
    {
      image: './src/assets/images/banner/LANDING_PAGE_BANNER_01.png',
    },
  ];

  return (
    <div className="w-full h-[100vh]">
      <Swiper
        slidesPerView={1}
        loop={true}
        effect="fade"
        speed={1000}
        keyboard={{ enabled: true }}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Keyboard, EffectFade]}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
              <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
                {slide.text}
              </h2>
            </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperSlider;
