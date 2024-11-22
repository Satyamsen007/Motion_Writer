import React from 'react';
import SwiperSlider from '../components/SwiperSlider';
import { motion } from 'framer-motion';
import { Circle } from '@mui/icons-material';
import ServiceCard from '../components/ServiceCard';

function HomePage() {
  const serviceCards = [
    {
      icon: './src/assets/images/digital marketing.png',
      title: 'Digital Marketing',
      description: '"Empowering brands with innovative digital marketing strategies that drive engagement and achieve impactful results. Your success is our mission."'
    },
    {
      icon: './src/assets/images/creative designing.png',
      title: 'Creative Designing',
      description: '"Transforming ideas into visually stunning designs that captivate audiences and elevate brands. Creativity meets purpose in every detail."'
    },
    {
      icon: './src/assets/images/social.png',
      title: 'Social',
      description: '"Connecting brands with audiences through innovative strategies and engaging content. Building relationships, one post at a time."'
    },
    {
      icon: './src/assets/images/web solution.png',
      title: 'Web Solutions',
      description: '"Crafting seamless digital experiences through innovative web design and development. Your online success, our priority."'
    },
    {
      icon: './src/assets/images/films.png',
      title: 'Films',
      description: '"Bringing stories to life with captivating visuals and creative storytelling. Films that inspire, engage, and leave a lasting impact."'
    },
    {
      icon: './src/assets/images/photography.png',
      title: 'Photography',
      description: '"Capturing moments with precision and artistry, transforming memories into timeless visuals that tell your unique story."'
    }
  ];

  return (
    <>
      <SwiperSlider />
      <div className="py-[100px] w-full">
        <div className="mx-[120px]">
          <div className='w-full bg-gradient-to-r from-white via-[#4583B4] to-white mb-6 py-1'>
            <h1 className="font-PrimaryFont text-[1.8vmax] uppercase font-extrabold text-center text-whiteColor">
              Who We Are?
            </h1>
          </div>

          <p className="font-PrimaryFont text-[20px] leading-[35px] text-textColor text-center font-medium">
            Motion Writer is a cutting-edge digital marketing and advertising agency dedicated to bringing your brand’s story to life. We specialize in crafting tailored social media strategies that spark engagement and build loyal communities, while our digital marketing services drive targeted traffic and measurable growth. Our creative design team creates visually stunning assets that capture attention and communicate your brand’s unique identity. We also offer innovative web solutions, ensuring your website is both functional and optimized for user experience. From dynamic videos to eye-catching photography, Motion Writer produces content that captivates and converts. With a focus on creativity, strategy, and results, we deliver impactful solutions that help your brand stand out and succeed in the digital world. Let us be the driving force behind your digital transformation.
          </p>
        </div>

        <div>
          <div className='w-full bg-gradient-to-r from-white via-[#4583B4] to-white mb-6 mt-28 py-1'>
            <h1 className="font-PrimaryFont text-[1.8vmax] uppercase font-extrabold text-center text-whiteColor">
              What We Do?
            </h1>
          </div>

          <div className="flex flex-col gap-1 px-24 mt-12">
            <div className="flex justify-evenly gap-6">
              <div>
                <iframe
                  className="rounded-lg"
                  width="450"
                  height="250"
                  src="https://www.youtube.com/embed/wK1vYVjFULY?si=bZdS1OYhJ1qeaVSP"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div>
                <iframe
                  className="rounded-lg"
                  width="450"
                  height="250"
                  src="https://www.youtube.com/embed/3RMxY1d3yWs?si=ZSJyv4Yw2WAkpzxQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div>
                <iframe
                  className="rounded-lg"
                  width="450"
                  height="250"
                  src="https://www.youtube.com/embed/RDN3jHvsSIE?si=ycGbk2b4wt5FqxC8"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="flex justify-center gap-10 mt-10">
              <div>
                <iframe
                  className="rounded-lg"
                  width="450"
                  height="250"
                  src="https://www.youtube.com/embed/hIR7MQyZ8TA?si=ctBJYw2G2ySsdJve"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div>
                <iframe
                  className="rounded-lg"
                  width="450"
                  height="250"
                  src="https://www.youtube.com/embed/X0cPg78HJcU?si=4O1hOUPYyAQ32Hy1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full bg-gradient-to-r from-white via-[#4583B4] to-white mb-6 mt-28 py-1'>
          <h1 className="font-PrimaryFont text-[1.8vmax] uppercase font-extrabold text-center text-whiteColor">
            Our Services
          </h1>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-6 mx-[120px] my-16">
          {serviceCards.map((item) => (
            <ServiceCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
