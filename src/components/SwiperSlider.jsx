import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import '../cssfiles/SwiperSlider.css';
import { Autoplay, Navigation, Keyboard, EffectFade } from 'swiper/modules';

function SwiperSlider() {
  const slides = [
    {
      image: './src/assets/images/banner/branding banner.png',
      heading: "<span class='text-primary'>Let's Grow</span> your Brand To The Next Level",
      text: "Transform your brand into a powerhouse with tailored strategies that resonate and engage your audience. Let's elevate your identity, amplify your reach, and drive lasting growth",
    },
    {
      image: './src/assets/images/banner/creative designing.png',
      heading: "Sharing Vitality <span class='text-primary'>Through Designing</span>",
      text: 'Infusing energy and creativity into every design, we craft strategies that bring brands to life. Let us help you connect, inspire, and thrive in the digital world',
    },
    {
      image: './src/assets/images/banner/creative digital marketing.png',
      heading: "Let's <span class='text-primary'>Build</span> Great Experiences Together",
      text: "Join forces with our creative and digital marketing agency to craft unforgettable experiences that inspire and engage. Together,we'll turn innovation into measurable success.",
    },
    {
      image: './src/assets/images/banner/seo service.png',
      heading: "Increase Your Web Traffic With <span class='text-primary'>Motion Writer</span>",
      text: 'Enhance your online presence with expert SEO services designed to increase web traffic and grow your business.',
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
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
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
            <div className="absolute inset-0 font-PrimaryFont bg-white bg-opacity-0 flex items-center pl-16">
              <div className="text-left text-textColor max-w-[40%] space-y-6 px-16">
                <h2
                  className="text-4xl md:text-5xl font-extrabold leading-tight"
                  dangerouslySetInnerHTML={{ __html: slide.heading }}
                ></h2>
                <p className="text-lg md:text-xl font-normal leading-relaxed">
                  {slide.text}
                </p>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperSlider;
