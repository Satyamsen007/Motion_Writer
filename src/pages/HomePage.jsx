import React from 'react';
import SwiperSlider from '../components/SwiperSlider';
import { motion } from 'framer-motion';
import { Circle } from '@mui/icons-material';
import ServiceCard from '../components/ServiceCard';
import WebHelmet from '../utils/WebHelmet.jsx'
function HomePage() {
  const serviceCards = [
    {
      icon1: './src/assets/images/ICON_BLUE/digital marketing.png',
      icon2: './src/assets/images/ICON_WHITE/digital marketing.png',
      title: 'Digital Marketing',
      description: "Driving growth with powerful digital strategies.Motion Writer transforms your online presence into success.Engage, convert, and build lasting relationships.Elevating brands with targeted digital marketing solutions."
    },
    {
      icon1: './src/assets/images/ICON_BLUE/creative designing.png',
      icon2: './src/assets/images/ICON_WHITE/creative designing.png',
      title: 'Creative Designing',
      description: "Transforming ideas into stunning visuals that captivate. Motion Writer designs with purpose, creativity, and passion.Every design tells your brand’s unique story.Bringing your vision to life through innovation and artistry."
    },
    {
      icon1: './src/assets/images/ICON_BLUE/social.png',
      icon2: './src/assets/images/ICON_WHITE/social.png',
      title: 'Social',
      description: "Building communities, one post at a time.Motion Writer connects your brand to its audience.Engage, inspire, and create lasting social connections.Elevating your brand’s voice on every platform."
    },
    {
      icon1: './src/assets/images/ICON_BLUE/web solution.png',
      icon2: './src/assets/images/ICON_WHITE/web solution.png',
      title: 'Web Solutions',
      description: "Transforming ideas into seamless digital experiences.Motion Writer crafts websites that deliver results.Innovative designs, flawless functionality, and user-first solutions.Your brand’s online success starts with us."
    },
    {
      icon1: './src/assets/images/ICON_BLUE/films.png',
      icon2: './src/assets/images/ICON_WHITE/films.png',
      title: 'Films',
      description: "Bringing stories to life through powerful visuals.Motion Writer creates films that captivate and inspire.Crafting narratives that engage and leave lasting impressions.Where creativity meets storytelling to elevate your brand."
    },
    {
      icon1: './src/assets/images/ICON_BLUE/photography.png',
      icon2: './src/assets/images/ICON_WHITE/photography.png',
      title: 'Photography',
      description: "Capturing moments with precision and artistry.Transforming memories into timeless visuals.Every shot tells your brand’s unique story.Photography that speaks louder than words, every time."
    }
  ];

  return (
    <>
      <WebHelmet title={'Best Creative Agency Of Kolkata'} favicon={'/favIcon/MOTION_WRITTER_LOGO 02.ico'} />
      <SwiperSlider />
      <div className="w-full">
        <div>
          <div className="w-full bg-[url('./src/assets/images/WhoWeAreBg.png')] bg-cover bg-center bg-no-repeat grid grid-cols-[1fr_1fr] justify-items-center items-center px-20">
            <div>
              <img src="./src/assets/images/WhoWeArePeople.png" alt="Who We Are People" />
            </div>
            <div className='font-PrimaryFont mb-44 pr-14'>
              <h1 className='text-[1.8vmax] uppercase font-semibold text-primary mb-10'>Who We Are?</h1>
              <p className='text-[0.9vmax] leading-[30px] font-normal text-justify'>
                Motion Writer is a cutting-edge digital marketing and advertising agency dedicated to bringing your brand's story to life. We specialize in crafting tailored social media strategies that spark engagement and build loyal communities, while our digital marketing services drive targeted traffic and measurable growth. Our creative design team creates visually stunning assets that capture attention and communicate your brand's unique identity. We also offer innovative web solutions, ensuring your website is both functional and optimized for user experience. From dynamic videos to eye-catching photography, Motion Writer produces content that captivates and converts. With a focus on creativity, strategy, and results, we deliver impactful solutions that help your brand stand out and succeed in the digital world. Let us be the driving force behind your digital transformation.
              </p>
            </div>
          </div>
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


        <div className="grid grid-cols-[1fr_1fr_1fr] mx-[120px] gap-6 my-16">
          {serviceCards.map((item) => (
            <ServiceCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
