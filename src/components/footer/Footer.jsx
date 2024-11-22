import {
  Facebook,
  Home,
  Instagram,
  LinkedIn,
  Mail,
  Phone,
  Share,
  Twitter,
  YouTube,
} from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="w-full bg-primary overflow-x-hidden">
      <div className="grid grid-cols-[1fr_1fr_1fr] p-[40px] gap-24">
        {/* Left Section */}
        <div className="flex flex-col pl-28">
          <div className="w-[180px] translate-x-[-32px]">
            <img
              src="./src/assets/images/logo/WITHOUT_BG/MOTION_WRITTER_LOGO 02.png"
              alt="Motion writer Logo"
              className="max-w-full h-auto"
            />
          </div>
          <div className="font-PrimaryFont text-[1.1vmax] text-white font-medium">
            <p>
              Motion Writer Bringing brands to life with creativity and precision,
              Mastering digital marketing and stunning designs,
              Capturing moments, telling stories through films,
              Crafting seamless web solutions, your brand's vision defined.
            </p>
          </div>
        </div>

        {/* Center Section */}
        <div className="px-5">
          <div className="text-3xl text-center font-PrimaryFont text-white font-semibold mt-24 mb-14">
            <h1>Our Services</h1>
          </div>
          <div className="flex justify-center gap-16 text-whiteColor font-PrimaryFont text-[1.1vmax]">
            <div>
              <Link className='flex gap-4 mb-5 cursor-pointer'>
                <img
                  src="./src/assets/images/digital marketing.png"
                  alt="Digital Marketing Image"
                  width={30}
                />
                <p>Digital Marketing</p>
              </Link>
              <Link className='flex gap-4 mb-5 cursor-pointer'>
                <img
                  src="./src/assets/images/creative designing.png"
                  alt="Creative Designing Image"
                  width={30}
                />
                <p>Creative</p>
              </Link>
              <Link className='flex gap-4 mb-5 cursor-pointer'>
                <img
                  src="./src/assets/images/social.png"
                  alt="Social Image"
                  width={30}
                />
                <p>Social</p>
              </Link>
            </div>

            <div>
              <Link className='flex gap-4 mb-5 cursor-pointer'>
                <img
                  src="./src/assets/images/web solution.png"
                  alt="Web Solution Image"
                  width={30}
                />
                <p>Web Solutions</p>
              </Link>
              <Link className='flex gap-4 mb-5 cursor-pointer'>
                <img
                  src="./src/assets/images/films.png"
                  alt="FilmsImage"
                  width={30}
                />
                <p>Films</p>
              </Link>
              <Link className='flex gap-4 mb-5 cursor-pointer'>
                <img
                  src="./src/assets/images/photography.png"
                  alt="Photography Image"
                  width={30}
                />
                <p>Photography</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h1 className="text-3xl font-PrimaryFont text-white font-semibold mt-24 mb-14">
            Contact Us
          </h1>
          {[
            ['+91 54689 54879', <Phone />],
            ['h@motionwriter.com', <Mail />],
          ].map(([contact, icon], index) => (
            <div
              key={index}
              className="flex gap-4 mb-4 font-PrimaryFont text-[1.1vmax] font-medium relative group text-white"
            >
              {icon}
              <p className="cursor-pointer">{contact}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-8 pb-8 pt-6 font-Primary justify-center font-medium text-white">
        {[
          ['https://www.instagram.com/motion.writer', <Instagram fontSize="medium" />],
          ['https://www.facebook.com/its.motionwriter', <Facebook fontSize="medium" />],
          ['https://www.youtube.com/@MotionWriter', <YouTube fontSize="medium" />],
          ['https://www.linkedin.com/company/motionwriter', <LinkedIn fontSize="medium" />],
        ].map(([link, icon], index) => (
          <a
            key={index}
            href={link}
            target='_blank'
            className="inline-block transform transition-transform duration-300 hover:text-secondary hover:scale-[1.5] cursor-pointer"
          >
            <span>{icon}</span>
          </a>
        ))}
      </div>

      <div className="w-full h-[1px] bg-white my-4"></div>
      <div className="pb-3">
        <p className="text-center text-white font-medium font-primaryFont text-[1.1vmax]">
          &copy; {new Date().getFullYear()} Motion Writer. All rights reserved.
        </p>
      </div>

    </div>
  );
}

export default Footer;

